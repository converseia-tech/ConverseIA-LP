import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const VivanChatSection = () => {
  const whatsappNumber = "558191085679";
  const phoneNumber = "558191085679";

  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative bg-card/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-border overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="relative p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Imagem da Vivan */}
              <motion.div
                className="relative mx-auto order-1 md:order-none"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto">
                  {/* Círculo de fundo com gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-2xl" />

                  {/* Imagem */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border">
                    <img
                      src="/imagem_vivan.png"
                      alt="Vivian - Assistente Virtual"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Indicador online */}
                  <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 flex items-center gap-2 bg-background/90 backdrop-blur-sm px-2 sm:px-3 py-1.5 sm:py-2 rounded-full border border-border">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-foreground">Online</span>
                  </div>
                </div>
              </motion.div>

              {/* Conteúdo */}
              <div className="text-center md:text-left order-2 md:order-none">
                <motion.h2
                  className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Converse com a{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Vivian
                  </span>
                </motion.h2>

                <motion.p
                  className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Nossa assistente virtual está pronta para atender você. Escolha como prefere falar conosco:
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Vivan`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>WhatsApp</span>
                  </a>

                  {/* Telefone */}
                  <a
                    href={`tel:${phoneNumber}`}
                    className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-4 rounded-xl border-2 border-border hover:border-purple-500/50 hover:bg-purple-500/10 text-foreground text-sm sm:text-base font-medium transition-all hover:scale-105"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Ligar Agora</span>
                  </a>
                </motion.div>

                {/* Informação adicional */}
                <motion.p
                  className="mt-4 sm:mt-6 text-xs sm:text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Atendimento de segunda a sexta, das 9h às 18h
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VivanChatSection;
