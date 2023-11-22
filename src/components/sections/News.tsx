import React from 'react';

import NewsContent from '@/components/NewsContent';
import NewsTimeline from '@/components/NewsTimeline';

import NewsContextProvider from '@/providers/NewsProvider';

const News = () => (
  <NewsContextProvider>
    <section className='grid gap-4 align-middle xs:my-16 xs:grid-cols-1 lg:my-36 lg:grid-cols-3'>
      <NewsTimeline />
      <NewsContent />
    </section>
  </NewsContextProvider>
);

export default News;
