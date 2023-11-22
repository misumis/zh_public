import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import urlFor from '@/lib/images';

import NewsContext from '@/providers/NewsProvider/context';

import Card from '../Card';
import NewsModalCarousel from '../NewsModalCarousel';
import PinterestLayout from '../PinterestLayout';

const NewsContent = () => {
  const { stages, selectedStageId } = useContext(NewsContext);
  const [isOpen, setIsOpen] = useState(false);

  const currentStage = useMemo(
    () => stages.find((stage) => stage.id === selectedStageId),
    [stages, selectedStageId],
  );

  const carouselRef = React.useRef<Carousel>(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.selectItem({ selectedItem: 0 });
    }
  }, [selectedStageId]);

  const handleOpenModal = (index: number) => () => {
    setIsOpen(true);
    if (carouselRef.current) {
      carouselRef.current.selectItem({ selectedItem: index });
    }
  };

  const handleOnClose = () => {
    setIsOpen(false);
  };

  return (
    <div className='col-span-3'>
      <PinterestLayout>
        {currentStage?.images?.map((image, index) => (
          <Card
            key={image.url}
            size={image.size}
            src={urlFor(image.url).width(480).height(480).url()}
            label={image.date}
            onClick={handleOpenModal(index)}
          />
        ))}
      </PinterestLayout>
      <NewsModalCarousel
        onClose={handleOnClose}
        isOpen={isOpen}
        ref={carouselRef}
      />
    </div>
  );
};

export default NewsContent;
