import clsx from 'clsx';
import React from 'react';

import { Size } from '../types';
import CardActions from './card-actions';
import CardBody from './card-body';
import CardImage from './card-image';
import CardTitle from './card-title';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  bordered?: boolean;
  imageFull?: boolean;
  normal?: Size | boolean;
  compact?: Size | boolean;
  side?: Size | boolean;
}

interface ModifierMap {
  [key: string]: {
    [key: string]: string | undefined;
  };
}

const DYNAMIC_MODIFIERS: ModifierMap = {
  compact: {
    true: 'card-compact',
    xs: 'xs:card-compact',
    sm: 'sm:card-compact',
    md: 'md:card-compact',
    lg: 'lg:card-compact'
  },
  normal: {
    true: 'card-normal',
    xs: 'xs:card-normal',
    sm: 'sm:card-normal',
    md: 'md:card-normal',
    lg: 'lg:card-normal'
  },
  side: {
    true: 'card-side',
    xs: 'xs:card-side',
    sm: 'sm:card-side',
    md: 'md:card-side',
    lg: 'lg:card-side'
  }
};

const Card: React.FC<CardProps> = ({
  children,
  bordered = true,
  imageFull,
  normal,
  compact,
  side,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={clsx('card', className, {
        'card-bordered': bordered,
        'image-full': imageFull,
        [(compact && DYNAMIC_MODIFIERS.compact[compact.toString()]) || '']: compact,
        [(normal && DYNAMIC_MODIFIERS.normal[normal.toString()]) || '']: normal,
        [(side && DYNAMIC_MODIFIERS.side[side.toString()]) || '']: side
      })}
    >
      {children}
    </div>
  );
};

export default Object.assign(Card, {
  Actions: CardActions,
  Body: CardBody,
  Title: CardTitle,
  Image: CardImage
});
