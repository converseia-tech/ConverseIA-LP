import { LINK_CTA_WHATSAPP } from '@/lib/constants';
import { Button } from './ui/button';

export const Hero = () => {
	return (
		<div className="px-4 flex base:flex-col-reverse md:flex-row">
			<div className="flex flex-col gap-4 justify-center base:items-center md:items-start base:text-center md:text-left">
			<h1 className="max-w-xl text-5xl font-bold ">
					Tenha atendimento 24h por dia com {' '} 
					<span className="text-primary">Agentes de IA</span>
			     	</h1>
				<h3 className="max-w-sm text-xl">
					Funcionários de Inteligência Artificial que trabalham por você e para você
				</h3>
				<Button
					className="base:max-w-[65%] w-full md:max-w-60 base:h-16 mt-4 !px-2"
					asChild
				>
					<a href={LINK_CTA_WHATSAPP} target="_blank" rel="noreferrer">
						Converse com a IA
					</a>
					
				</Button>
			</div>

			<div>
				<img
					src="/elements/hero-wrapper.png"
					alt="hero-wrapper"
					className="object-contain size-full"
				/>
			</div>
		</div>
	);
};
