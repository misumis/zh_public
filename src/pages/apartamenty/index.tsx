import React from 'react';

import Layout from '@/components/layout/Layout';
import ApartmentsTable from '@/components/sections/ApartmentsTable';
import CTA from '@/components/sections/CTA';
import GaragesTable from '@/components/sections/GaragesTable';
import StoragesTable from '@/components/sections/StorageTable';
import TextImage from '@/components/sections/TextImage';
import Seo from '@/components/Seo';

const ApartmentsPage = () => {
  return (
    <Layout>
      <Seo title='Apartamenty | Zielony Horyzont' />
      <main className='container mx-auto'>
        <TextImage
          alt='wizualizacja budynku dwa'
          body='Apartamenty Zielony Horyzont to trzy kameralne budynki z windą, położone między ulicami Listopadową i Jędrowizna, na Łódzkich Stokach. W każdym z budynków znajduje się 26 nowoczesnych i funkcjonalnych apartamentów o powierzchni od 27 do 96 m2. Wszystkie apartamenty posiadają balkon lub taras z ogródkiem. Tu możesz zadbać o spokojne, bezpieczne i komfortowe życie swojej Rodziny.'
          image='/images/image_3.jpg'
          title='ŻYJ AKTYWNIE I W HARMONII Z PRZYRODĄ'
        />
        <ApartmentsTable />
        <GaragesTable />
        <StoragesTable />
        <CTA />
      </main>
    </Layout>
  );
};
export default ApartmentsPage;
