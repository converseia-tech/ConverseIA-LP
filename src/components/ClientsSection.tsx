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
      logo: "/Logos_empresas/logo_vemed_saúde.png",
    },
    {
      name: "Rede Amé",
      logo: "/Logos_empresas/logo_rede_ame.png",
    },
  ];

  const clientItems = clients.map((client, index) => (
    <div
      key={`${client.name}-${index}`}
      className="flex items-center justify-center p-6 rounded-xl bg-black/80 dark:bg-card/50 backdrop-blur-sm border border-border hover:border-purple-500/30 transition-all duration-300 aspect-square"
    >
      <img
        src={client.logo}
        alt={client.name}
        className="max-h-14 max-w-full w-auto object-contain"
      />
    </div>
  ));

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Empresas que confiam em ConverseIA
          </h3>
          <p className="text-muted-foreground">
            Transformando negócios em diversos setores
          </p>
        </motion.div>

        <InfiniteCarousel items={clientItems} autoplayDelay={2500} />

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-muted-foreground">
            Você também pode fazer parte dessa transformação. Conheça nossas soluções.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
