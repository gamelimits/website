import { Metadata } from 'next';
import { FunctionComponent, ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Gamelimits',
};

interface LayoutProps {
  readonly children?: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
