import clsx from 'clsx';
import React from 'react';

import { Size } from '../types';
import MenuItem from './menu-item';
import MenuTitle from './menu-title';

export interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {
  normal?: Size | boolean;
  compact?: Size | boolean;
  vertical?: Size | boolean;
  horizontal?: Size | boolean;
}

interface ModifierMap {
  [key: string]: {
    [key: string]: string | undefined;
  };
}

const DYNAMIC_MODIFIERS: ModifierMap = {
  compact: {
    true: 'menu-compact',
    xs: 'xs:menu-compact',
    sm: 'sm:menu-compact',
    md: 'md:menu-compact',
    lg: 'lg:menu-compact'
  },
  normal: {
    true: 'menu-normal',
    xs: 'xs:menu-normal',
    sm: 'sm:menu-normal',
    md: 'md:menu-normal',
    lg: 'lg:menu-normal'
  },
  horizontal: {
    true: 'menu-horizontal',
    xs: 'xs:menu-horizontal',
    sm: 'sm:menu-horizontal',
    md: 'md:menu-horizontal',
    lg: 'lg:menu-horizontal'
  },
  vertical: {
    true: 'menu-vertical',
    xs: 'xs:menu-vertical',
    sm: 'sm:menu-vertical',
    md: 'md:menu-vertical',
    lg: 'lg:menu-vertical'
  }
};

const Menu: React.FC<MenuProps> = ({ normal, compact, horizontal, vertical, className, ...props }) => {
  const classes = clsx('menu', className, {
    [(compact && DYNAMIC_MODIFIERS.compact[compact.toString()]) || '']: compact,
    [(normal && DYNAMIC_MODIFIERS.normal[normal.toString()]) || '']: normal,
    [(horizontal && DYNAMIC_MODIFIERS.horizontal[horizontal.toString()]) || '']: horizontal,
    [(vertical && DYNAMIC_MODIFIERS.vertical[vertical.toString()]) || '']: vertical
  });

  return <ul role="menu" className={classes} {...props} />;
};

export default Object.assign(Menu, { Title: MenuTitle, Item: MenuItem });
