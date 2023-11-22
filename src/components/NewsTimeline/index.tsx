import React, { useContext } from 'react';

import clsxm from '@/lib/clsxm';

import NewsContext, { NewsStage } from '@/providers/NewsProvider/context';

const NewsTimeline = () => {
  const { stages, selectedStageId, setSelectedStageId, getStageImages } =
    useContext(NewsContext);

  const handleSelectStage = (stage: NewsStage) => () => {
    if (!stage.isActive) {
      return;
    }
    setSelectedStageId(stage.id);
    getStageImages(stage.id);
  };

  return (
    <div className='container flex justify-center flex-col col-span-3 p-4'>
      <div className='flex flex-wrap gap-4'>
        {stages.map((stage) => (
          <div className='flex justify-center group' key={stage.id}>
            <a
              onClick={handleSelectStage(stage)}
              className={clsxm(
                'text-sm font-semibold text-neutral-950',
                'flex gap-2 items-center pr-4  cursor-pointer',
                'rounded-full bg-neutral-50 border-gray-100 border-2',
                'active:bg-green-600 active:text-white transition-all duration-200 ease-in-out',
                'group-hover:bg-green-600 group-hover:text-white',
                stage.id === selectedStageId && 'bg-green-600 text-white',
                !stage.isActive &&
                  'opacity-40 cursor-not-allowed group-hover:text-neutral-950 active:text-neutral-950 hover:cursor-not-allowed bg-gray-200 group-hover:bg-gray-200',
              )}
            >
              <div
                className={clsxm(
                  'p-3 rounded-full drop-shadow-lg transition-colors duration-200 ease-in-out ',
                  'group-hover:bg-green-600 group-hover:drop-shadow-lg',
                  stage.id === selectedStageId && 'bg-green-600 drop-shadow-lg',
                  !stage.isActive && 'bg-neutral-50 group-hover:bg-neutral-50',
                )}
              >
                <img
                  src={stage.icon}
                  alt={stage.name}
                  className={clsxm(
                    'w-6 h-6',
                    'group-hover:invert',
                    stage.id === selectedStageId && 'invert',
                    !stage.isActive && 'invert-0 group-hover:invert-0',
                  )}
                />
              </div>
              <span>{stage.name}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTimeline;
