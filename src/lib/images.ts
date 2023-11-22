import imageUrlBuilder from '@sanity/image-url';

import myConfiguredSanityClient from './client';

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source: string) {
  return builder.image(source);
}

export default urlFor;
