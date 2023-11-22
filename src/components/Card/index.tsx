import React, { FunctionComponent } from 'react';

const styles = {
  small: {
    gridRowEnd: 'span 26',
  },
  medium: {
    gridRowEnd: 'span 33',
  },
  large: {
    gridRowEnd: 'span 45',
  },
};

interface CardProps {
  size?: 'small' | 'medium' | 'large';
  src: string;
  label?: string;
  onClick?: () => void;
}

const Card: FunctionComponent<CardProps> = ({
  size = 'medium',
  src,
  label,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        ...styles[size],
        background: `url(${src})`,
        backgroundSize: 'cover',
      }}
      className='relative p-0 m-4 rounded-md cursor-pointer'
    >
      {label && (
        <span className='absolute bottom-4 right-4 text-orange-500 font-semibold'>
          {label}
        </span>
      )}
    </div>
  );
};

export default Card;
