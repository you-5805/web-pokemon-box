import { pagesPath } from '@/lib/$path';
import { ButtonLink } from '@/components/atoms/ButtonLink';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className='flex items-center justify-between p-4'>
      <Link href={pagesPath.$url()}>
        <p className='text-xl font-bold'>web pokemon box</p>
      </Link>
      <ButtonLink href={pagesPath.parties.new.$url()}>パーティを作成</ButtonLink>
    </header>
  );
};
