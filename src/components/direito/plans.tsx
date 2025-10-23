'use client';

import { useState } from 'react';
import { LINK_CTA_WHATSAPP, PLANS_AVALIABLE } from '@/lib/constants';
import { Button } from './ui/button';
import { Switch } from './switch'; // Importando o componente Switch
import { Label } from './ui/label';   // Importando o componente Label

export const Plans = () => {
  const [selectedPeriodIndex, setSelectedPeriodIndex] = useState(0);
  // 1. Estado para controlar o desconto de pagamento à vista
  const [isVista, setIsVista] = useState(false);

  // 2. Função para formatar números como moeda brasileira (BRL)
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <div className="space-y-6 md:space-y-8 px-4">
      <h1 className="text-white text-center font-bold text-2xl sm:text-3xl md:text-4xl px-4">
        Escolha o <span className="text-secondary">plano sob medida</span> para você:
      </h1>

      <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-6 md:mb-8">
        {PLANS_AVALIABLE[0].periods && PLANS_AVALIABLE[0].periods.map((period, index) => (
          <button
            key={period.label}
            onClick={() => {
              setSelectedPeriodIndex(index);
              // Reseta o switch de 'à vista' se voltar para o plano mensal
              if (index === 0) setIsVista(false);
            }}
            className={`py-2 px-4 md:px-6 rounded-full text-white text-sm md:text-base font-semibold transition-colors duration-300 ${
              selectedPeriodIndex === index 
                ? 'bg-blue-600'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            {period.label}
          </button>
        ))}
      </div>
      
      {/* 3. Switch para o desconto à vista, só aparece em planos semestral ou anual (índice > 0) */}
      {selectedPeriodIndex > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:space-x-2 my-4 px-4">
          <Switch 
            id="vista-switch" 
            checked={isVista}
            onCheckedChange={setIsVista}
            className="data-[state=checked]:bg-green-500"
          />
          <Label htmlFor="vista-switch" className="text-white font-bold text-sm sm:text-base md:text-lg text-center sm:text-left">
            Pagar à vista (PIX ou Boleto) e ganhar +5% de desconto
          </Label>
        </div>
      )}

      <div className="flex flex-col gap-6 md:gap-8 items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-screen-lg">
          {PLANS_AVALIABLE.map((plan, index) => {
            // 4. Lógica de cálculo atualizada
            const currentPeriod = plan.periods ? plan.periods[selectedPeriodIndex] : null;
            const vistaDiscount = isVista && currentPeriod && currentPeriod.months > 1 ? 0.05 : 0;

            let monthlyPriceWithDiscount = 0;
            let totalPrice = 0;

            if (currentPeriod && plan.monthlyPrice) {
              // Preço mensal já com o desconto do plano (3, 6, 9, 12 meses)
              monthlyPriceWithDiscount = plan.monthlyPrice * (1 - currentPeriod.discount);
              // Preço total, aplicando o desconto extra de pagamento à vista se aplicável
              totalPrice = monthlyPriceWithDiscount * currentPeriod.months * (1 - vistaDiscount);
            }

            return (
              <div
                key={plan.title}
                className="bg-gradient-to-b from-[#004bb5] to-[#003a8c] p-8 flex flex-col gap-4 rounded-xl shadow-xl transform transition-transform hover:scale-[1.05]"
              >
                <h3 className="text-center font-extrabold text-3xl text-white transition-colors duration-300 hover:text-yellow-400">
                  {plan.title}
                </h3>
                
                {/* 5. Nova forma de exibir os preços */}
                {plan.title !== 'Escritório Personalizado' && currentPeriod && (
                  <div className="text-center mt-2 transition-transform duration-300 hover:scale-[1.1]">
                    {/* Preço Mensal em destaque */}
                    <div className="flex justify-center items-baseline">
                      <span className="text-white text-4xl font-bold">{formatCurrency(monthlyPriceWithDiscount)}</span>
                      <span className="text-gray-300 text-xl font-medium">/mês</span>
                    </div>

                    {/* Informação sobre o valor total e parcelamento */}
                    {currentPeriod.months > 1 && (
                       <p className="text-gray-200 text-sm mt-2">
                         Total de {formatCurrency(totalPrice)} em até {currentPeriod.months}x no cartão
                       </p>
                    )}
                  </div>
                )}

                {plan.title === 'Escritório Personalizado' && (
                  <div className="flex justify-center items-baseline mt-2 h-[72px]">
                    <span className="text-white text-2xl font-bold">{plan.price}</span>
                  </div>
                )}

                <ul className="list-disc list-inside space-y-2 text-gray-100 custom-font leading-relaxed">
                  {plan.list?.map((charge, idx) => (
                    <li key={`${plan.title}-${idx}`} className="flex items-start gap-2">
                      <img src="/icons/verify-white.svg" alt="verify-icon" />
                      {charge}
                    </li>
                  ))}
                </ul>

                {index < 2 && (
                  <div className="mt-auto space-y-2">
                    <Button
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 px-6 rounded-full shadow-md transform transition-transform hover:scale-105"
                      asChild
                    >
                      <a href="/contratacao">
                        Contratar Agora
                      </a>
                    </Button>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 px-6 rounded-full shadow-md transform transition-transform hover:scale-105"
                      variant="outline"
                      asChild
                    >
                      <a href={LINK_CTA_WHATSAPP} target="_blank" rel="noreferrer">
                        Falar com Especialista
                      </a>
                    </Button>
                  </div>
                )}

                {index === 2 && (
                  <div className="mt-auto space-y-2">
                    <Button
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 px-6 rounded-full shadow-md transform transition-transform hover:scale-105"
                      asChild
                    >
                      <a href="/contratacao">
                        Contratar Agora
                      </a>
                    </Button>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 px-6 rounded-full shadow-md transform transition-transform hover:scale-105"
                      variant="outline"
                      asChild
                    >
                      <a href={LINK_CTA_WHATSAPP} target="_blank" rel="noreferrer">
                        Falar com Especialista
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};