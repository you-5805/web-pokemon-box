import data from '@/data/pokemon.json';
import Image from 'next/image';

export default function Page() {
  return (
    <section title='ポケモン図鑑' className='mx-auto max-w-6xl'>
      <ul className='flex flex-wrap justify-center gap-4 px-2'>
        {data.map(({ name, number }) => (
          <li key={number} className='group'>
            <div className='flex h-32 w-32 flex-col items-center justify-center gap-2 rounded-md shadow-lg'>
              <div className='text-center group-hover:hidden'>
                <p>{name}</p>
                <p className='text-xs text-gray-600'>{`図鑑No. ${number}`}</p>
              </div>
              <div className='relative h-12 w-12 transition-all group-hover:h-28 group-hover:w-28'>
                <Image src={`/img/pokemon/${number}.png`} fill title={name} alt='' />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
