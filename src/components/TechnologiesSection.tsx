import { motion } from "framer-motion";
import { InfiniteCarousel } from "@/components/ui/infinite-carousel";

const TechnologiesSection = () => {
  const technologies = [
    {
      name: "OpenAI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/2048px-ChatGPT_logo.svg.png",
    },
    {
      name: "Gemini",
      logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
    },
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    },
    {
      name: "Anthropic",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Anthropic_logo.svg/2560px-Anthropic_logo.svg.png",
    },
    {
      name: "Supabase",
      logo: "https://avatars.githubusercontent.com/u/54469796?s=200&v=4",
    },
    {
      name: "N8N",
      logo: "https://n8n.io/n8n-logo.png",
    },
    {
      name: "Make",
      logo: "https://cdn.worldvectorlogo.com/logos/make-1.svg",
    },
    {
      name: "Manus",
      logo: "https://files.manuscdn.com/assets/image/brand/image/Manus-Icon.png",
    },
  ];

  const techItems = technologies.map((tech, index) => (
    <div
      key={`${tech.name}-${index}`}
      className="flex items-center justify-center p-6 rounded-xl bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-border hover:border-purple-500/30 transition-all duration-300 aspect-square"
    >
      <img
        src={tech.logo}
        alt={tech.name}
        className="max-h-12 max-w-full w-auto object-contain transition-all hover:scale-110"
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
            Tecnologias incorporadas
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground px-4">
            Integrações com as principais plataformas de IA e automação
          </p>
        </motion.div>

        <InfiniteCarousel items={techItems} autoplayDelay={2000} />
      </div>
    </section>
  );
};

export default TechnologiesSection;
