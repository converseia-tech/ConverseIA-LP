import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroHub from '@/components/hub/HeroHub';
import AgentsShowcase from '@/components/hub/AgentsShowcase';
import DivisionsSection from '@/components/hub/DivisionsSection';
import InnovationSection from '@/components/hub/InnovationSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-hub-darker">
      <Header />
      <main className="pt-20">
        <HeroHub />
        <AgentsShowcase />
        <DivisionsSection />
        <InnovationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
