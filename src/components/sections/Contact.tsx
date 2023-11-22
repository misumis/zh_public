import Link from 'next/link';
import React from 'react';

import MapComponent from '@/components/MapComponent';

const Contact = () => (
  <section className='grid gap-16 align-middle xs:my-16 xs:grid-cols-1 lg:my-36 lg:grid-cols-2'>
    <MapComponent />
    <div className='grid grid-cols-1'>
      <h1 className='uppercase xs:text-center xs:text-4xl sm:text-4xl lg:text-left  xl:text-4xl'>
        Dane Kontaktowe
      </h1>

      <div className='mt-8 text-center text-lg leading-8 lg:text-left'>
        <h2 className='mb-4'>Biuro sprzedaży</h2>
        <p>Łódź, ul. Sterlinga 27</p>
        <p className='underline'>
          <Link href='tel:+48 512 476 787'>tel. 512 476 787</Link>
        </p>
        <p className='underline'>
          <Link href='mailto:akropol@progress.lodz.pl'>
            akropol@progress.lodz.pl
          </Link>
        </p>
      </div>

      <div className='mt-8 text-center text-lg leading-8 lg:text-left'>
        <h2 className='mb-4'>BMT - PROGRESS SP. Z O. O.</h2>
        <p>Łódź, ul. Legionów 93/95</p>
        <p className='underline'>
          <Link href='tel:+48 662 730 099'>tel. 662 730 099</Link>
        </p>
        <p className='underline'>
          <Link href='tel:+48 507 085 907'>tel. 507 085 907</Link>
        </p>
        <p className='underline'>
          <Link href='tel:+48 508 030 694'>tel. 508 030 694</Link>
        </p>
      </div>
    </div>
  </section>
);

export default Contact;
