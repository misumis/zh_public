// client.js
import sanityClient from '@sanity/client';

export default sanityClient({
  dataset: 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: 'v1',
});
