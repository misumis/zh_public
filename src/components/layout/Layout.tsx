import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import Trees from '~/svg/background_trees.svg';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <div className='-bottom-4/4 fixed top-0 left-auto -z-10 overflow-hidden blur-sm xs:right-3/4 md:-right-full lg:-right-3/4 xl:-right-2/4'>
        <Trees height='100%' width='80rem' />
      </div>
      <Header />
      {children}
      <Footer />
    </>
  );
}
