import { CHARGES_AVALIABLE, TITLE } from '@/lib/constants';
import Marquee from 'react-fast-marquee';

export const TechnologyIncorporte = () => {
  return (
    <div className="flex flex-col gap-12">
      <p className="text-4xl md:text-5xl text-center font-bold max-w-3xl mx-auto text-white leading-snug">
        Se um é <span className="text-secondary">revolucionário</span>, imagina um time completo disponível para seu cliente{' '}
        <span className="text-secondary">Conversar</span> com a{' '}
        <span className="text-secondary">IA</span> a qualquer momento
      </p>

      <h4 className="text-xl md:text-1xl text-white max-w-md mx-auto text-center font-semibold leading-tight">
        Conheça os cargos que alguns Funcionários da{' '}
        <span className="text-secondary">ConverseIA</span> poderão ocupar:
      </h4>

      <div className="flex flex-col gap-16 items-center">
        <h2 className="text-4xl font-bold text-white">{TITLE}</h2>

        <div className="grid base:grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-8 bg-dark-primary rounded-lg shadow-lg">
          {CHARGES_AVALIABLE.map((avaliable) => (
            <div
              key={avaliable.title}
              className="relative p-[1px] rounded-xl overflow-hidden transition-transform transform hover:rotate-1 hover:scale-[1.05]"
              style={{
                background: 'linear-gradient(135deg, #0055fb,rgb(26, 157, 218))',
              }}
            >
              <div 
                className="flex flex-col gap-4 bg-dark-primary rounded-xl size-full p-6 min-h-[300px]"
                style={{
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
                  transition: 'transform 0.3s ease',
                }}
              >
                {/* Título em branco com fonte moderna */}
                <h3 
                  className="py-2 text-left text-blue-500 font-extrabold text-2xl mb-2 tracking-wide" 
                  style={{ fontFamily: 'quicksand, sans-serif' }} // Fonte tecnológica
                >
                  {avaliable.title}
                </h3>
                <span className="text-gray-400 text-sm mb-4">{avaliable.type}</span>
                <ul className="space-y-3 text-gray-100 leading-relaxed text-lg">
                  {avaliable.list?.map((charge, index) => (
                    <li key={`${avaliable.title}-${index}`} className="flex items-start gap-2">
                      <img src="/icons/verify.svg" alt="verify-icon" />
                      {charge}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
				<div className="flex flex-col gap-8 justify-center base:px-2 md:px-0">
  <h3 className="text-white font-bold text-4xl text-center">
    Integração com processos ATIVOS em todos os tribunais do{' '}
    <span className="text-secondary">Brasil</span>
  </h3>
  <div>
    <div className="bg-white flex items-center justify-center rounded-xl max-w-5xl mx-auto w-full flex-wrap">
      <Marquee autoFill pauseOnHover={true} speed={50}>
        <img
          src="/brands/pje.svg"
          alt="pje"
          className="base:size-16 object-contain md:size-22 mx-4" // Margem lateral
        />
        <img
          src="/brands/tjpe.svg"
          alt="tjpe"
          className="base:size-16 object-contain md:size-22 mx-4" // Margem lateral
        />
        <img
          src="/brands/tjsp.svg"
          alt="tjsp"
          className="base:size-16 object-contain md:size-22 mx-4" // Margem lateral
        />
        <img
          src="/brands/pjerj.svg"
          alt="pjerj"
          className="base:size-16 object-contain md:size-22 mx-4" // Margem lateral
        />
        <img
          src="/brands/tjam.png"
          alt="tjam"
          className="base:size-20 object-contain md:size-22 mx-4" // Margem lateral
        />
        <img
          src="/brands/tjce.png"
          alt="tjce"
          className="base:size-20 object-contain md:size-22 mx-4" // Margem lateral
        />
        <img
          src="/brands/tjmg.png"
          alt="tjmg"
          className="base:size-20 object-contain md:size-22 mx-4" // Margem lateral
        />
      </Marquee>
    </div>
  </div>
</div>
