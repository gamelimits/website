import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { FunctionComponent, ReactNode } from 'react';
import '../styles/globals.css';
import { cls } from '../utils/cls';

export const metadata: Metadata = {
  title: 'Gamelimits',
};

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

interface LayoutProps {
  readonly children?: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <html lang="en" className={cls(inter.className)}>
      <head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
