import React from 'react';

import Layout from '@/components/layout/Layout';
import News from '@/components/sections/News';
import Seo from '@/components/Seo';

const NewsPage = () => {
  return (
    <Layout>
      <Seo title='Aktualności | Zielony Horyzont' />
      <main className='container mx-auto'>
        <News />
      </main>
    </Layout>
  );
};
export default NewsPage;
