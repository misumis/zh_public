import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import React, { useEffect, useState } from 'react';

import client from '@/lib/client';
import clsxm from '@/lib/clsxm';

import Button from '../buttons/Button';
import Skeleton from '../Skeleton';

interface PortfolioProject {
  order: number;
  title: string;
  body: { en: PortableTextBlock | PortableTextBlock[] };
  url: string;
}

const Portfolio = () => {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [showing, setShowing] = useState(3);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (projects.length === 0) {
      client
        .fetch(
          `*[_type == 'portfolio'] {
          title,
          body,
          order,
      "url": image.asset->url
    }`
        )
        .then((res) => {
          setProjects(res);
        });
    }
  }, [projects.length]);

  const handleShowMore = () => {
    setLoading(true);
    setTimeout(() => {
      setShowing((state) => state + 3);
      setLoading(false);
    }, 800);
  };

  return (
    <section>
      {projects.length === 0 && (
        <div className='my-16 grid grid-cols-1 gap-8 align-middle last-of-type:mb-0 lg:my-36 lg:grid-cols-2 lg:gap-14'>
          <Skeleton className='h-40 w-full rounded-md lg:h-80' />
          <div>
            <Skeleton className='mt-4 h-6 w-2/4 rounded-md lg:mt-8 lg:h-8' />
            <Skeleton className=' mt-6 h-4 w-full rounded-md lg:mt-8 lg:h-6' />
            <Skeleton className='mt-4 h-4 w-full rounded-md lg:h-6' />
            <Skeleton className='mt-4 h-4 w-3/5 rounded-md lg:h-6' />
          </div>
        </div>
      )}
      {projects
        .sort((a, b) => a.order - b.order)
        .slice(0, showing)
        .map((project, index) => (
          <div
            key={project.title}
            className='my-16 grid grid-cols-1 gap-8 align-middle last-of-type:mb-0 lg:my-36 lg:grid-cols-2 lg:gap-14'
          >
            <img
              alt={`${project.title} zdjęcie`}
              className={clsxm(
                'rounded-md',
                index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
              )}
              src={project.url || ''}
            />
            <div
              className={clsxm(
                'grid content-center',
                index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
              )}
            >
              <h2 className='mb-6 uppercase'>{project.title}</h2>
              <PortableText
                value={project.body.en}
                components={{
                  block: ({ children }) => (
                    <p className='mb-4 last-of-type:mb-0'>{children}</p>
                  ),
                }}
              />
            </div>
          </div>
        ))}
      {projects.length > 0 && showing < projects.length && (
        <div className='text-center'>
          <Button
            variant='outline'
            className='text-2xl'
            onClick={handleShowMore}
            isLoading={loading}
          >
            Pokaż więcej
          </Button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
