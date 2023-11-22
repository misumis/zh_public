import React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

const CTA = () => {
  return (
    <section className='grid grid-cols-1 items-center gap-8 bg-slate-100 p-8 align-middle xs:my-16 lg:my-36 lg:grid-cols-3 lg:gap-16'>
      <div className='md:col-span-2'>
        <h2 className=' uppercase xs:text-center xs:text-3xl xs:leading-snug sm:text-left sm:text-4xl sm:leading-snug xl:text-4xl xl:leading-snug'>
          ODKRYJ PIĘKNO I NATURĘ WŁASNEGO APARTAMENTU
        </h2>
      </div>
      <div className='flex justify-center'>
        <ArrowLink
          as={ButtonLink}
          variant='outline'
          className='inline-flex items-center text-center text-base uppercase md:text-lg'
          href='/kontakt'
        >
          Skontaktuj sie z nami
        </ArrowLink>
      </div>
    </section>
  );
};

export default CTA;
