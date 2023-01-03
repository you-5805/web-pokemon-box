import Link from 'next/link';
import type { ReactNode } from 'react';
import type { LinkProps } from 'next/link';

type Props = LinkProps & {
  children: ReactNode;
};

export const ButtonLink = (props: Props) => {
  return (
    <Link
      className='rounded bg-blue-500 py-2 px-4 font-bold text-white transition-colors hover:bg-blue-400'
      {...props}
    />
  );
};
