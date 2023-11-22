import React, { forwardRef, useContext, useMemo } from 'react';
import { Carousel } from 'react-responsive-carousel';

import urlFor from '@/lib/images';

import NewsContext from '@/providers/NewsProvider/context';

import Skeleton from '../Skeleton';

interface NewsModalCarouselProps {
  isOpen: boolean;
  onClose: () => void;
  ref: React.RefObject<Carousel>;
}

const NewsModalCarousel = forwardRef<Carousel, NewsModalCarouselProps>(
  ({ isOpen, onClose }, ref) => {
    const { stages, selectedStageId } = useContext(NewsContext);

    const currentStage = useMemo(
      () => stages.find((stage) => stage.id === selectedStageId),
      [stages, selectedStageId],
    );

    return (
      <div
        className={`fixed top-0 left-0 w-full h-full z-50 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div
          className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40'
          onClick={onClose}
        ></div>
        <div className='flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-full'>
          <div className='relative max-w-full'>
            <button
              className='absolute top-2 right-2 text-black text-3xl'
              onClick={onClose}
            >
              &times;
            </button>
            <div className='w-[800px] max-w-full bg-white p-8 rounded-md'>
              {!currentStage?.images ? (
                <div className='flex items-center justify-center h-96'>
                  <Skeleton className='h-[450px] rounded-md w-full' />
                </div>
              ) : (
                <Carousel
                  ref={ref}
                  showThumbs={true}
                  showArrows={true}
                  showIndicators={true}
                  showStatus={false}
                  swipeable={false}
                  infiniteLoop
                  className='w-auto'
                >
                  {currentStage?.images?.map((image) => (
                    <div key={image.url} className='relative'>
                      <img
                        loading='eager'
                        src={urlFor(image.url).width(800).height(500).url()}
                        alt={image.title}
                        className='rounded-md'
                      />
                      {image.date && (
                        <span className='absolute bottom-4 right-4 text-orange-500 font-semibold'>
                          {image.date}
                        </span>
                      )}
                    </div>
                  ))}
                </Carousel>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default NewsModalCarousel;
