import React, { VFC } from 'react';

interface TextImageProps {
  image: string;
  alt: string;
  title: string;
  body: string;
}

const TextImage: VFC<TextImageProps> = ({ alt, body, image, title }) => {
  return (
    <section className='grid gap-16 align-middle xs:my-16 xs:grid-cols-1 lg:my-36 lg:grid-cols-5 '>
      <div className='flex xs:order-2 xs:flex-wrap xs:content-center xs:justify-center sm:flex-row sm:justify-between md:justify-around lg:order-1 lg:col-span-2 lg:flex-col lg:justify-center'>
        <h2 className='mb-6 uppercase xs:text-center xs:text-4xl sm:text-left sm:text-4xl xl:text-4xl'>
          {title}
        </h2>
        <p className='leading-loose xs:text-center sm:text-left'>{body}</p>
      </div>
      <img
        className='rounded-md sm:order-1 lg:order-2 lg:col-span-3 '
        alt={alt}
        src={image}
      />
    </section>
  );
};

export default TextImage;
