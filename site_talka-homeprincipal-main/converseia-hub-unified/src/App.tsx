import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';

// Pages
import Home from '@/pages/Home';
import AgentesIA from '@/pages/AgentesIA';
import Conciarge from '@/pages/Conciarge';
import Direito from '@/pages/Direito';
import Documentacao from '@/pages/Documentacao';
import Parcerias from '@/pages/Parcerias';
import Contato from '@/pages/Contato';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agentes-ia" element={<AgentesIA />} />
        <Route path="/conciarge" element={<Conciarge />} />
        <Route path="/direito" element={<Direito />} />
        <Route path="/documentacao" element={<Documentacao />} />
        <Route path="/parcerias" element={<Parcerias />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
