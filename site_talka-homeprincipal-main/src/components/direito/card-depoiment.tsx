import { Avatar } from './ui/avatar';

interface ICardDepoiment {
  name: string;
  job: string;
  depoiment: string;
  icon: string; // Propriedade para o ícone
}

export const CardDepoiment = ({ job, depoiment, icon }: ICardDepoiment) => {
  return (
    <div className="bg-gradient-to-b from-primary-light to-primary-dark p-0.5 rounded-xl">
      <div className="flex flex-col gap-4 bg-gradient-to-b from-dark-primary to-dark-secondary rounded-xl size-full p-6 min-h-40">
        <div className="flex gap-2 items-center">
          <Avatar>
            <img src={icon} alt={`Icon`} className="w-8 h-8" /> {/* Apenas o ícone */}
          </Avatar>
          <span className="text-xl font-bold">
            {job}
          </span>
        </div>

        <div className="text-white text-xl font-light">{depoiment}</div>
      </div>
    </div>
  );
};