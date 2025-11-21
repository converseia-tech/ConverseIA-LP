import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import * as React from "react";
import { 
  Sparkles, 
  Database, 
  Globe, 
  Code, 
  Zap, 
  Shield 
} from "lucide-react";

interface ProductsMenuProps {
  isMobile?: boolean;
}

export function ProductsMenu({ isMobile = false }: ProductsMenuProps) {
  const products = [
    {
      title: "Plataforma Chat & CRM & BI",
      description: "Solução completa de gestão e inteligência de dados",
      href: "/plataforma",
      icon: Database,
    },
    {
      title: "Landing Pages",
      description: "Páginas otimizadas para conversão",
      href: "/landing-pages",
      icon: Globe,
    },
    {
      title: "Agentes de IA",
      description: "Assistentes inteligentes personalizados",
      href: "/agentes-ia",
      icon: Sparkles,
    },
    {
      title: "Projetos Personalizados",
      description: "Desenvolvimento sob medida para seu negócio",
      href: "/projetos-personalizados",
      icon: Code,
    },
    {
      title: "Automação Inteligente",
      description: "Otimize processos com IA avançada",
      href: "#automacao",
      icon: Zap,
    },
    {
      title: "Segurança & Compliance",
      description: "Proteção de dados e conformidade",
      href: "#seguranca",
      icon: Shield,
    },
  ];

  // Versão Mobile - Accordion Style
  if (isMobile) {
    return (
      <div className="w-full">
        <details className="group">
          <summary className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-300 hover:text-white cursor-pointer list-none">
            <span>Soluções</span>
            <svg 
              className="w-5 h-5 transition-transform group-open:rotate-180" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="mt-2 space-y-1 px-2">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Link
                  key={product.title}
                  to={product.href}
                  className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-white/5 transition-colors group/item"
                >
                  <div className="p-2 bg-purple-500/10 rounded-lg mt-0.5">
                    <Icon className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-gray-200 group-hover/item:text-white">
                      {product.title}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {product.description}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </details>
      </div>
    );
  }

  // Versão Desktop - NavigationMenu
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent border-none text-gray-300 hover:text-white data-[state=open]:text-white data-[active]:text-white">
            Soluções
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-500/20 to-purple-600/10 p-6 no-underline outline-none focus:shadow-md hover:shadow-lg transition-shadow border border-purple-500/20"
                    to="/sobre"
                  >
                    <Sparkles className="h-8 w-8 text-purple-400 mb-3" />
                    <div className="mb-2 mt-4 text-lg font-medium text-white">
                      Ecossistema ConverseIA
                    </div>
                    <p className="text-sm leading-tight text-gray-300">
                      Conheça todas as nossas soluções de IA e automação para transformar seu negócio
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {products.slice(0, 3).map((product) => {
                const Icon = product.icon;
                return (
                  <ListItem 
                    key={product.title} 
                    href={product.href} 
                    title={product.title}
                    icon={<Icon className="w-4 h-4 text-purple-400" />}
                  >
                    {product.description}
                  </ListItem>
                );
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link to="/sobre">
            <NavigationMenuLink className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent border-none text-gray-300 hover:text-white"
            )}>
              Sobre
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link to="/#contato">
            <NavigationMenuLink className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent border-none text-gray-300 hover:text-white"
            )}>
              Contato
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  icon?: React.ReactNode;
  href: string;
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  ListItemProps
>(({ className, title, children, icon, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          ref={ref as any}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 hover:text-white focus:bg-white/5 focus:text-white border border-transparent hover:border-purple-500/20",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none text-gray-200">
            {icon}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
