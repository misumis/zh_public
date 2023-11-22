import Link from 'next/link';
import React from 'react';

import Logo from '~/svg/full_logo_white.svg';

const Footer = () => {
  return (
    <footer className=' h-auto bg-footer-500 p-4 py-8'>
      <div className='container mx-auto grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4'>
        <div className='md:col-span-2 lg:col-span-1'>
          <Logo
            className='mx-auto w-3/4 sm:w-2/4 lg:mx-0 lg:w-3/4'
            height='100%'
          />
        </div>
        <div className='md:col-span-2 lg:col-span-1'></div>
        <div className='mt-4 text-center leading-7 text-white md:mt-8 lg:mt-0 lg:text-left'>
          <h3 className='mb-2 text-lg'>Biuro sprzedaży</h3>
          <p>Łódź, ul. Sterlinga 27</p>
          <p>
            <Link href='tel:+48 512 476 787'>tel. 512 476 787</Link>
          </p>
          <p>
            <Link href='mailto:akropol@progress.lodz.pl'>
              akropol@progress.lodz.pl
            </Link>
          </p>
        </div>
        <div className='mt-4 text-center leading-7 text-white md:mt-8 lg:mt-0 lg:text-left'>
          <h3 className='mb-2 text-base'>BMT - PROGRESS SP. Z O. O.</h3>
          <p>Łódź, ul. Legionów 93/95</p>
          <p>
            <Link href='tel:+48 662 730 099'>tel. 662 730 099</Link>
          </p>
          <p>
            <Link href='tel:+48 507 085 907'>tel. 507 085 907</Link>
          </p>
          <p>
            <Link href='tel:+48 508 030 694'>tel. 508 030 694</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
