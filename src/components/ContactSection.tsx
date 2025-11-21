import { format } from "date-fns";
import { motion } from "framer-motion";
import MeetingScheduler from "@/components/MeetingScheduler";

const ContactSection = () => {
  const handleSchedule = (details: {
    name: string;
    email: string;
    phone: string;
    date: Date | null;
    time: string | null;
    notes: string;
  }) => {
    // In a real application, this would send the data to a backend
    alert(
      `✅ Reunião agendada com sucesso!\n\n` +
      `👤 Nome: ${details.name}\n` +
      `📧 E-mail: ${details.email}\n` +
      `📱 Telefone: ${details.phone || "Não informado"}\n` +
      `📅 Data: ${details.date ? format(details.date, "dd/MM/yyyy") : "N/A"}\n` +
      `🕐 Horário: ${details.time}\n` +
      `📝 Observações: ${details.notes || "Nenhuma"}\n\n` +
      `Em breve entraremos em contato para confirmar!`
    );
    
    // You could also send this to your backend:
    // await fetch('/api/schedule-meeting', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(details)
    // });
  };

  const handleCancel = () => {
    // Optional: handle cancel action
    console.log("Agendamento cancelado pelo usuário");
  };

  return (
    <section id="contato" className="py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Agende uma reunião com nossos especialistas
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <MeetingScheduler
            title="Agendar Reunião de Apresentação"
            description="Escolha a melhor data e horário para conhecer nossas soluções de IA e como podemos transformar seu negócio."
            scheduleButtonText="Confirmar Agendamento"
            cancelButtonText="Limpar Formulário"
            onSchedule={handleSchedule}
            onCancel={handleCancel}
          />
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            💡 Após o agendamento, você receberá um e-mail de confirmação com todos os detalhes da reunião e um link para o Google Meet.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
