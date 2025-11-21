import { TestimonialSlider } from "@/components/ui/testimonial-slider";

const TestimonialSliderDemo = () => {
  const testimonials = [
    {
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=56&h=56&fit=crop",
      quote: "EldoraUI's components make building UIs effortless great work!",
      name: "Jessie J",
      role: "Acme LTD",
    },
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=56&h=56&fit=crop",
      quote:
        "EldoraUI simplifies complex designs with ready-to-use components.",
      name: "Nick V",
      role: "Malika Inc.",
    },
    {
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=56&h=56&fit=crop",
      quote: "With EldoraUI, creating responsive UIs is a breeze.",
      name: "Amelia W",
      role: "Panda AI",
    },
  ];
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg border bg-background">
      <div className="mt-[64px] flex justify-center px-12">
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </div>
  );
};

export default TestimonialSliderDemo;
