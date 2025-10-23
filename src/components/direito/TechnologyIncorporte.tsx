import { CHARGES_AVALIABLE, TITLE } from '@/lib/constants';
import Marquee from 'react-fast-marquee';

export const TechnologyIncorporte = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-12 px-4">
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold max-w-3xl mx-auto text-white leading-snug px-4">
        Se um é <span className="text-secondary">revolucionário</span>, imagina um time completo disponível para seu cliente{' '}
        <span className="text-secondary">Conversar</span> com a{' '}
        <span className="text-secondary">IA</span> a qualquer momento
      </p>

      <h4 className="text-lg sm:text-xl md:text-2xl text-white max-w-md mx-auto text-center font-semibold leading-tight px-4">
        Conheça os cargos que alguns Funcionários da{' '}
        <span className="text-secondary">ConverseIA</span> poderão ocupar:
      </h4>

      <div className="flex flex-col gap-8 md:gap-16 items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center px-4">{TITLE}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-4 md:p-8 bg-dark-primary rounded-lg shadow-lg w-full max-w-6xl">
          {CHARGES_AVALIABLE.map((avaliable) => (
            <div
              key={avaliable.title}
              className="relative p-[2px] rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group"
              style={{
                background: 'linear-gradient(135deg, #0055fb, #1a9dda)',
              }}
            >
              <div 
                className="flex flex-col gap-4 rounded-xl size-full p-6 min-h-[300px] relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 20, 60, 0.95), rgba(0, 40, 100, 0.90))',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(0, 85, 251, 0.15)',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Efeito de brilho sutil no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Conteúdo */}
                <div className="relative z-10">
                  {/* Badge do tipo */}
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-white bg-blue-600/80 rounded-full backdrop-blur-sm border border-blue-400/30">
                    {avaliable.type}
                  </span>
                  
                  {/* Título com melhor contraste */}
                  <h3 
                    className="text-left text-white font-extrabold text-2xl mb-4 tracking-wide drop-shadow-lg" 
                    style={{ 
                      fontFamily: 'quicksand, sans-serif',
                      textShadow: '0 2px 10px rgba(0, 85, 251, 0.5)'
                    }}
                  >
                    {avaliable.title}
                  </h3>
                  
                  {/* Lista com ícones e melhor legibilidade */}
                  <ul className="space-y-3 leading-relaxed">
                    {avaliable.list?.map((charge, index) => (
                      <li key={`${avaliable.title}-${index}`} className="flex items-start gap-3 text-gray-100 text-base">
                        <span className="flex-shrink-0 w-5 h-5 mt-0.5">
                          <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="flex-1">{charge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
