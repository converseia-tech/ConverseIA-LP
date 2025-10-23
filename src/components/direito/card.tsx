interface ICard {
	highlight: React.ReactNode; // Permite passar JSX
	description: string; // Texto abaixo do número
  }
  
  export const Card = ({ highlight, description }: ICard) => {
	return (
	  <div className="bg-gradient-to-b from-primary-light to-primary-dark p-0.5 rounded-xl">
		<div className="flex items-center justify-center flex-col gap-2 bg-gradient-to-b from-dark-primary to-dark-secondary rounded-xl max-w-xs p-4 min-h-20 h-full">
		  <h2 className="text-5xl font-black text-primary">{highlight}</h2>
		  <span className="text-sm text-center font-bold">{description}</span>
		</div>
	  </div>
	);
  };