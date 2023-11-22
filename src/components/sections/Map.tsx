import React from 'react';

import MapComponent from '@/components/MapComponent';

const Map = () => (
  <section className='grid gap-16 align-middle xs:my-16 xs:grid-cols-1 lg:my-36 lg:grid-cols-2'>
    <MapComponent />
    <div className='flex xs:flex-wrap xs:content-center xs:justify-center sm:flex-row sm:justify-between md:justify-around lg:flex-col lg:justify-center'>
      <h2 className='mb-6 uppercase xs:text-center xs:text-4xl sm:text-left sm:text-4xl xl:text-4xl'>
        DOSKONAŁA LOKALIZACJA
      </h2>
      <p className='leading-loose xs:text-center sm:text-left'>
        Spokojne sąsiedztwo domów jednorodzinnych, szybki dojazd do centrum
        miasta, a także wygodny dostęp do węzłów autostradowych sprawia ze to
        idealne miejsce do zamieszkania.
      </p>
    </div>
  </section>
);

export default Map;
