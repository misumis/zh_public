import React from 'react';

import Layout from '@/components/layout/Layout';
import CTA from '@/components/sections/CTA';
import Portfolio from '@/components/sections/Portfolio';
import Seo from '@/components/Seo';

const PorfolioPage = () => {
  return (
    <Layout>
      <Seo title='Nasze realizacje | Zielony Horyzont' />
      <main className='container mx-auto'>
        <Portfolio />
        <CTA />
      </main>
    </Layout>
  );
};
export default PorfolioPage;
