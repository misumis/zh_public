import React from 'react';

import CTA from '@/components/sections/CTA';
import Hero from '@/components/sections/Hero';
import Map from '@/components/sections/Map';
import TextImage from '@/components/sections/TextImage';

const HomeContent = () => {
  return (
    <>
      <Hero />
      <TextImage
        alt='wizualizacja budynku dwa'
        body='Apartamenty Zielony Horyzont to kameralne osiedle w spokojnej okolicy,
      otoczonej zielenią Łódzkich Wzniesień. To doskonały wybór i wyjątkowe
      miejsce do zamieszkania. To poranna kawa na tarasie z widokiem na
      zieleń. Możesz tu cieszyć się urokami otaczającej Cię przyrody i
      korzystać z szerokich możliwości wypoczynku, rekreacji i uprawiania
      sportu na świeżym powietrzu.'
        image='/images/image_2.jpg'
        title='Apartamenty z widokiem na Zielony Horyzont'
      />
      <Map />
      <CTA />
    </>
  );
};

export default HomeContent;
