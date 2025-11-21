import { motion } from "framer-motion";
import { TestimonialSlider } from "@/components/ui/testimonial-slider";

const TestimonialsSection = () => {
  const testimonials = [
    {
      img: "/Fotos_comentários_pessoas/Dr_André_Buarque.jpg",
      quote: "A Conciarge mudou a forma de trabalho da minha equipe! gerou mais economia e resultado rápido!",
      name: "Dr. André Buarque",
      role: "Clínica Elevare",
    },
    {
      img: "/Fotos_comentários_pessoas/Dr.Lucas_Borges.jpg",
      quote: "Estou a um bom tempo com eles e o serviço é incrível!",
      name: "Dr. Lucas Borges",
      role: "Borges Advogados",
    },
    {
      img: "/Fotos_comentários_pessoas/dr.maykom_carvalho.jpg",
      quote: "Tecnologia absurda de boa. Meu escritório mudou da água pro vinho em pouquíssimo tempo.",
      name: "Maykom",
      role: "Maykom Carvalho Advogados",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Depoimentos reais de empresas que transformaram seus negócios com a ConverseIA
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <TestimonialSlider testimonials={testimonials} />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
