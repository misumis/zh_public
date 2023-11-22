import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import client from '@/lib/client';

import NewsContext, {
  initialValue,
  NewsContextValue,
  NewsStage,
} from '@/providers/NewsProvider/context';

interface NewsContextProviderProps {
  children: ReactNode;
}

const NewsContextProvider: React.FC<NewsContextProviderProps> = ({
  children,
}) => {
  const [stages, setStages] = useState<Array<NewsStage>>([]);
  const [selectedStageId, setSelectedStageId] = useState(
    initialValue.selectedStageId,
  );

  const getStageImages = useCallback(
    (stageId: number) => {
      if (stages.find((stage) => stage.id === stageId)?.images) {
        return;
      }

      client
        .fetch(
          `*[_type == 'news' && order == ${stageId}] {
        'images': image[] {
          title,
          size,
          date,
          'url': image.asset->url,
          'id': image.asset->_id
        }
      }`,
        )
        .then((res) => {
          setStages((prev) =>
            prev.map((stage) => {
              if (stage.id === stageId) {
                return {
                  ...stage,
                  images: res[0].images,
                };
              }
              return stage;
            }),
          );
        });
    },
    [stages],
  );

  useEffect(() => {
    if (stages.length === 0) {
      client
        .fetch(
          `*[_type == 'news'] {
            name,
            isActive,
            isMain,
            'icon': icon.asset->url,
            'id': order,
          } | order(order asc)`,
        )
        .then((res) => {
          setStages(res);
          const mainStage = res.find((stage: NewsStage) => stage.isMain);
          if (mainStage) {
            setSelectedStageId(mainStage.id);
            getStageImages(mainStage.id);
            return;
          }
          const activeStage = res.find((stage: NewsStage) => stage.isActive);
          if (activeStage) {
            setSelectedStageId(activeStage.id);
            getStageImages(activeStage.id);
          }
        });
    }
  }, [getStageImages, stages.length]);

  const value = useMemo<NewsContextValue>(
    () => ({ selectedStageId, setSelectedStageId, stages, getStageImages }),
    [getStageImages, selectedStageId, stages],
  );

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

export default NewsContextProvider;
