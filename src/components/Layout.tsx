import React, { ReactElement } from 'react';
import { Header } from './Header';

type Props = Required<{
  readonly children: ReactElement;
}>;

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
