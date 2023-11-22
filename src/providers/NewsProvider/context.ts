import noop from 'lodash/noop';
import React, { Dispatch, SetStateAction } from 'react';

export interface NewsImage {
  url: string;
  date?: string;
  title?: string;
  size?: 'small' | 'medium' | 'large';
}

export interface NewsStage {
  name: string;
  isActive: boolean;
  isMain: boolean;
  id: number;
  images: NewsImage[];
  icon: string;
}

export interface NewsContextValue {
  stages: NewsStage[];
  selectedStageId: number;
  setSelectedStageId: Dispatch<SetStateAction<number>>;
  getStageImages: (stageId: number) => void;
}

export const initialValue: NewsContextValue = {
  selectedStageId: 3,
  setSelectedStageId: noop,
  stages: [],
  getStageImages: noop,
};

const NewsContext = React.createContext<NewsContextValue>(initialValue);

export default NewsContext;
