import { api } from '@/lib/api';
import { PokemonCard } from '@/components/molecules/PokemonCard';
import useSWR from 'swr';

export const PokemonIndexPage = () => {
  const { data, error } = useSWR('pokemons', () => api.pokemons.$get());

  if (data === undefined) return <p>loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <section title='ポケモン図鑑' className='mx-auto max-w-6xl'>
      <ul className='flex flex-wrap justify-center gap-4 px-2'>
        {data.pokemons.map(({ id, baseName, number, image }) => (
          <li key={id}>
            <PokemonCard name={baseName} number={number} imageUrl={image.sm} />
          </li>
        ))}
      </ul>
    </section>
  );
};
