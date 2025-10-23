import { LINK_CTA_WHATSAPP } from '@/lib/constants';
import { Button } from './ui/button';

export const Hero = () => {
	return (
		<div className="px-4 py-8 md:py-12 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-4">
			<div className="flex flex-col gap-4 md:gap-6 justify-center items-center md:items-start text-center md:text-left w-full md:w-1/2">
				<h1 className="max-w-xl text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
					Tenha atendimento 24h por dia com{' '} 
					<span className="text-primary">Agentes de IA</span>
				</h1>
				<h3 className="max-w-sm text-lg sm:text-xl text-gray-200">
					Funcionários de Inteligência Artificial que trabalham por você e para você
				</h3>
				<Button
					className="w-full max-w-xs md:max-w-60 h-14 md:h-12 text-base md:text-sm mt-4"
					asChild
				>
					<a href={LINK_CTA_WHATSAPP} target="_blank" rel="noreferrer">
						Converse com a IA
					</a>
				</Button>
			</div>

			<div className="w-full md:w-1/2 flex justify-center">
				<img
					src="/elements/hero-wrapper.png"
					alt="hero-wrapper"
					className="object-contain w-full max-w-md md:max-w-full h-auto"
				/>
			</div>
		</div>
	);
};
