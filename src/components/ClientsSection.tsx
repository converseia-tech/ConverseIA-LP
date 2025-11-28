import { motion } from "framer-motion";
import { InfiniteCarousel } from "@/components/ui/infinite-carousel";

const ClientsSection = () => {
  const clients = [
    {
      name: "Braspex",
      logo: "/Logos_empresas/logo_braspex.png",
    },
    {
      name: "Protogas",
      logo: "/Logos_empresas/logo_protogas.png",
    },
    {
      name: "Lucas Borges Adv",
      logo: "/Logos_empresas/logo_borges_adv.png",
    },
    {
      name: "Mapion",
      logo: "/Logos_empresas/logo_mapion.png",
    },
    {
      name: "Vemed Saúde",
      logo: "/Logos_empresas/logo_vemed_saude.png",
    },
    {
      name: "Rede Amé",
      logo: "/Logos_empresas/logo_rede_ame.png",
    },
  ];

  const clientItems = clients.map((client, index) => (
    <div
      key={`${client.name}-${index}`}
      className="flex items-center justify-center px-4 sm:px-8 py-3 sm:py-4 h-20 sm:h-24 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
    >
      <img
        src={client.logo}
        alt={client.name}
        className="max-h-8 sm:max-h-12 w-auto object-contain transition-all opacity-50 grayscale brightness-0 invert group-hover:opacity-100"
      />
    </div>
  ));

  return (
    <section className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 px-4">
            Empresas que confiam na ConverseIA
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground px-4">
            Transformando negócios em diversos setores
          </p>
        </motion.div>

        <InfiniteCarousel items={clientItems} autoplayDelay={2500} />
      </div>
    </section>
  );
};

export default ClientsSection;
