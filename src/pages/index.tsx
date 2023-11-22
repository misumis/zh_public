import React from 'react';

import HomeContent from '@/components/HomeContent';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const HomePage = () => (
  <Layout>
    <Seo title='Strona główna | Zielony Horyzont' />
    <main className='container mx-auto'>
      <HomeContent />
    </main>
  </Layout>
);

export default HomePage;
