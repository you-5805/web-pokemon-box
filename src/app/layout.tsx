import type { ReactNode } from 'react';
import '@/styles/global.css';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <html lang='ja'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
