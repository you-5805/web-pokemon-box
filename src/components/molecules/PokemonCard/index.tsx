import Image from 'next/image';

type Props = {
  name: string;
  number: number;
  imageUrl: string;
};

export const PokemonCard = ({ name, number, imageUrl }: Props) => {
  return (
    <div className='group flex h-32 w-32 flex-col items-center justify-center gap-2 rounded-md shadow-lg'>
      <div className='text-center group-hover:hidden'>
        <p>{name}</p>
        <p className='text-xs text-gray-600'>{`図鑑No. ${number}`}</p>
      </div>
      <div className='relative h-12 w-12 transition-all group-hover:h-20 group-hover:w-20'>
        <Image src={imageUrl} fill title={name} alt='' />
      </div>
    </div>
  );
};
