import * as React from "react";
import { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isAfter,
  isBefore,
} from "date-fns";
import { ptBR } from "date-fns/locale";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon, User, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface TimeSlot {
  time: string;
  available: boolean;
}

interface MeetingSchedulerProps {
  title?: string;
  description?: string;
  scheduleButtonText?: string;
  cancelButtonText?: string;
  onSchedule?: (details: {
    name: string;
    email: string;
    phone: string;
    date: Date | null;
    time: string | null;
    notes: string;
  }) => void;
  onCancel?: () => void;
}

const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  for (let hour = 9; hour < 18; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const timeString = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
      slots.push({ time: timeString, available: true });
    }
  }
  return slots;
};

export const MeetingScheduler: React.FC<MeetingSchedulerProps> = ({
  title = "Agendar Reunião de Apresentação",
  description = "Escolha a melhor data e horário para conhecer nossas soluções e serviços.",
  scheduleButtonText = "Confirmar Agendamento",
  cancelButtonText = "Cancelar",
  onSchedule,
  onCancel,
}) => {
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [timeSlots] = useState<TimeSlot[]>(generateTimeSlots());

  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentMonth)),
    end: endOfWeek(endOfMonth(currentMonth)),
  });

  const handleDateClick = (day: Date) => {
    if (isAfter(day, new Date()) || isSameDay(day, new Date())) {
      setSelectedDate(day);
      setSelectedTime(null);
    }
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const handleSchedule = () => {
    if (onSchedule && selectedDate && selectedTime) {
      onSchedule({
        name,
        email,
        phone,
        date: selectedDate,
        time: selectedTime,
        notes,
      });
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    const hour = Number.parseInt(hours);
    return `${hour.toString().padStart(2, "0")}:${minutes}`;
  };

  const isFormValid = name && email && selectedDate && selectedTime;

  return (
    <Card className="w-full max-w-6xl mx-auto overflow-hidden shadow-elegant border-border bg-card">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CardHeader className="border-b border-border">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <CalendarIcon className="w-6 h-6" />
            </div>
            <div>
              <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
              <CardDescription className="text-base mt-1">{description}</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Calendar Section */}
            <div className="lg:col-span-2 p-6 border-b lg:border-b-0 lg:border-r border-border">
              <div className="space-y-6">
                {/* Month Navigation */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-foreground">
                    {format(currentMonth, "MMMM yyyy", { locale: ptBR })}
                  </h3>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" onClick={prevMonth} aria-label="Mês anterior">
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={nextMonth} aria-label="Próximo mês">
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2">
                  {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day) => (
                    <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                      {day}
                    </div>
                  ))}

                  {days.map((day) => {
                    const isSelected = selectedDate && isSameDay(day, selectedDate);
                    const isToday = isSameDay(day, new Date());
                    const isPast = isBefore(day, new Date()) && !isToday;
                    const isCurrentMonth = isSameMonth(day, currentMonth);

                    return (
                      <motion.button
                        key={day.toString()}
                        onClick={() => handleDateClick(day)}
                        disabled={isPast}
                        whileHover={{ scale: isPast ? 1 : 1.05 }}
                        whileTap={{ scale: isPast ? 1 : 0.95 }}
                        className={cn(
                          "relative h-12 rounded-lg text-sm font-medium transition-all duration-200",
                          isSelected && "bg-primary text-primary-foreground shadow-glow scale-105",
                          !isSelected && !isPast && isCurrentMonth && "bg-secondary/50 text-foreground hover:bg-secondary",
                          !isCurrentMonth && "text-muted-foreground/30",
                          isPast && "text-muted-foreground/30 cursor-not-allowed",
                          isToday && !isSelected && "ring-2 ring-primary ring-offset-2"
                        )}
                      >
                        {format(day, "d")}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Time Slots */}
                {selectedDate && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Horários disponíveis para {format(selectedDate, "dd/MM/yyyy")}</span>
                    </div>
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 max-h-48 overflow-y-auto">
                      {timeSlots.map((slot) => (
                        <Button
                          key={slot.time}
                          variant={selectedTime === slot.time ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleTimeClick(slot.time)}
                          disabled={!slot.available}
                          className="text-xs"
                        >
                          {formatTime(slot.time)}
                        </Button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Form Section */}
            <div className="p-6 bg-muted/30">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Seus Dados</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Nome completo *
                      </Label>
                      <Input
                        id="name"
                        placeholder="Seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Telefone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Observações</Label>
                      <Textarea
                        id="notes"
                        placeholder="Conte-nos sobre suas necessidades..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                {/* Summary */}
                {selectedDate && selectedTime && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 rounded-lg bg-primary/10 border border-primary/20"
                  >
                    <p className="text-sm font-medium mb-2">Resumo do Agendamento:</p>
                    <p className="text-sm text-muted-foreground">
                      📅 {format(selectedDate, "dd/MM/yyyy")}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      🕐 {formatTime(selectedTime)}
                    </p>
                  </motion.div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 pt-4 border-t border-border">
                  <Button
                    onClick={handleSchedule}
                    disabled={!isFormValid}
                    className="w-full"
                    size="lg"
                  >
                    {scheduleButtonText}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleCancel}
                    className="w-full"
                  >
                    {cancelButtonText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </motion.div>
    </Card>
  );
};

export default MeetingScheduler;
