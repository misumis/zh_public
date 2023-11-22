import React from 'react';

import Layout from '@/components/layout/Layout';
import Contact from '@/components/sections/Contact';
import Seo from '@/components/Seo';

const ContactPage = () => {
  return (
    <Layout>
      <Seo title='Kontakt | Zielony Horyzont' />
      <main className='container mx-auto'>
        <Contact />
      </main>
    </Layout>
  );
};
export default ContactPage;
