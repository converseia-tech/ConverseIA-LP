"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CheckIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import NumberFlow from "@number-flow/react"

export type PlanLevel = "starter" | "pro" | "all" | string

export interface PricingFeature {
  name: string
  included: PlanLevel | null
}

export interface PricingPlan {
  name: string
  level: PlanLevel
  price: {
    monthly: number
    quarterly?: number
    annually: number
  }
  popular?: boolean
}

export interface PricingTableProps
  extends React.HTMLAttributes<HTMLDivElement> {
  features: PricingFeature[]
  plans: PricingPlan[]
  onPlanSelect?: (plan: PlanLevel) => void
  defaultPlan?: PlanLevel
  defaultInterval?: "monthly" | "yearly"
  containerClassName?: string
  buttonClassName?: string
}

export function PricingTable({
  features,
  plans,
  onPlanSelect,
  defaultPlan = "pro",
  defaultInterval = "monthly",
  className,
  containerClassName,
  buttonClassName,
  ...props
}: PricingTableProps) {
  const [interval, setInterval] = React.useState<"monthly" | "quarterly" | "annually">(defaultInterval as "monthly" | "quarterly" | "annually")
  const [selectedPlan, setSelectedPlan] = React.useState<PlanLevel>(defaultPlan)

  const handlePlanSelect = (plan: PlanLevel) => {
    setSelectedPlan(plan)
    onPlanSelect?.(plan)
  }

  const getPrice = (plan: PricingPlan) => {
    if (interval === "quarterly" && plan.price.quarterly) {
      return plan.price.quarterly
    }
    if (interval === "annually") {
      return plan.price.annually
    }
    return plan.price.monthly
  }

  return (
    <section
      className={cn(
        "bg-transparent text-foreground",
        "py-12 sm:py-24 md:py-32 px-4",
        "fade-bottom overflow-hidden pb-0",
      )}
    >
      <div
        className={cn("w-full max-w-3xl mx-auto px-4", containerClassName)}
        {...props}
      >
        <div className="flex justify-end mb-4 sm:mb-8">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm">
            <button
              type="button"
              onClick={() => setInterval("monthly")}
              className={cn(
                "px-3 py-1 rounded-md transition-colors",
                interval === "monthly" ? "bg-purple-500/20 dark:bg-purple-800/30" : "text-muted-foreground",
              )}
            >
              Mensal
            </button>
            <button
              type="button"
              onClick={() => setInterval("quarterly")}
              className={cn(
                "px-3 py-1 rounded-md transition-colors",
                interval === "quarterly" ? "bg-purple-500/20 dark:bg-purple-800/30" : "text-muted-foreground",
              )}
            >
              Trimestral
            </button>
            <button
              type="button"
              onClick={() => setInterval("annually")}
              className={cn(
                "px-3 py-1 rounded-md transition-colors",
                interval === "annually" ? "bg-purple-500/20 dark:bg-purple-800/30" : "text-muted-foreground",
              )}
            >
              Anual
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {plans.map((plan) => (
            <button
              key={plan.name}
              type="button"
              onClick={() => handlePlanSelect(plan.level)}
              className={cn(
                "flex-1 p-4 rounded-xl text-left transition-all",
                "border border-border backdrop-blur-sm bg-background/30",
                selectedPlan === plan.level &&
                  "ring-2 ring-purple-500 dark:ring-purple-400 bg-purple-500/10",
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{plan.name}</span>
                {plan.popular && (
                  <span className="text-xs bg-purple-500/20 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 px-2 py-0.5 rounded-full">
                    Popular
                  </span>
                )}
              </div>
              <div className="flex items-baseline gap-1">
                {plan.price.monthly === 0 ? (
                  <span className="text-xl font-bold text-purple-600 dark:text-purple-400">
                    Sob consulta
                  </span>
                ) : (
                  <>
                    <NumberFlow
                      format={{
                        style: "currency",
                        currency: "BRL",
                      }}
                      value={getPrice(plan)}
                      className="text-2xl font-bold"
                    />
                    <span className="text-sm font-normal text-muted-foreground">
                      /mês
                    </span>
                  </>
                )}
              </div>
            </button>
          ))}
        </div>

        <div className="border border-border rounded-xl overflow-hidden backdrop-blur-sm bg-background/30">
          <div className="overflow-x-auto">
            <div className="min-w-[640px] divide-y divide-border">
              <div className="flex items-center p-4 bg-purple-500/10 dark:bg-purple-900/20">
                <div className="flex-1 text-sm font-medium">Recursos</div>
                <div className="flex items-center gap-8 text-sm">
                  {plans.map((plan) => (
                    <div
                      key={plan.level}
                      className="w-16 text-center font-medium"
                    >
                      {plan.name}
                    </div>
                  ))}
                </div>
              </div>
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className={cn(
                    "flex items-center p-4 transition-colors",
                    feature.included === selectedPlan &&
                      "bg-purple-50/50 dark:bg-purple-900/20",
                  )}
                >
                  <div className="flex-1 text-sm">{feature.name}</div>
                  <div className="flex items-center gap-8 text-sm">
                    {plans.map((plan) => (
                      <div
                        key={plan.level}
                        className={cn(
                          "w-16 flex justify-center",
                          plan.level === selectedPlan && "font-medium",
                        )}
                      >
                        {shouldShowCheck(feature.included, plan.level) ? (
                          <CheckIcon className="w-5 h-5 text-purple-500" />
                        ) : (
                          <span className="text-muted-foreground/30">
                            -
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button
            asChild
            className={cn(
              "w-full sm:w-auto bg-purple-600 hover:bg-purple-700 px-8 py-2 rounded-xl",
              buttonClassName,
            )}
          >
            <a href="/contratacao">
              Começar com {plans.find((p) => p.level === selectedPlan)?.name}
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

function shouldShowCheck(
  included: PricingFeature["included"],
  level: string,
): boolean {
  if (included === "all") return true
  if (included === "pro" && (level === "pro" || level === "all")) return true
  if (
    included === "starter" &&
    (level === "starter" || level === "pro" || level === "all")
  )
    return true
  return false
}
