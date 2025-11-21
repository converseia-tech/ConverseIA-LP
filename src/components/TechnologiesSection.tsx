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
      logo: "https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png",
    },
    {
      name: "Make",
      logo: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_477db83f729d63210139ec7cd29c1351/make-formerly-integromat.png",
    },
    {
      name: "Manus",
      logo: "https://manus.com.br/wp-content/uploads/2023/03/logo-manus-300x72.png",
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
            Tecnologias incorporadas
          </h3>
          <p className="text-muted-foreground">
            Integrações com as principais plataformas de IA e automação
          </p>
        </motion.div>

        <InfiniteCarousel items={techItems} autoplayDelay={2000} />
      </div>
    </section>
  );
};

export default TechnologiesSection;
