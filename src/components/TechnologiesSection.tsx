import { motion } from "framer-motion";
import { InfiniteCarousel } from "@/components/ui/infinite-carousel";

const TechnologiesSection = () => {
  const technologies = [
    {
      name: "OpenAI",
      logo: "/logo_tecnologias/openai_logo.png",
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
      logo: "/logo_tecnologias/supabase_logo.png",
    },
    {
      name: "N8N",
      logo: "https://n8n.io/n8n-logo.png",
    },
    {
      name: "Make",
      logo: "/logo_tecnologias/make_logo.svg",
    },
    {
      name: "Manus",
      logo: "/logo_tecnologias/manus_logo.png",
    },
  ];

  const techItems = technologies.map((tech, index) => (
    <div
      key={`${tech.name}-${index}`}
      className="flex items-center justify-center px-4 sm:px-8 py-3 sm:py-4 h-20 sm:h-24 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
    >
      <img
        src={tech.logo}
        alt={tech.name}
        className="max-h-8 sm:max-h-10 w-auto object-contain transition-all opacity-50 grayscale brightness-0 invert group-hover:opacity-100"
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
