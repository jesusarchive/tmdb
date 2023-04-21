import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import React from 'react';

import { setTheme } from '../../store/actions';
import { useStore } from '../../store/store';

const ThemeSwap = () => {
  const { state, dispatch } = useStore();

  return (
    <label className="swap swap-rotate">
      <input type="checkbox" />
      <MoonIcon className="swap-on fill-current w-8 h-8" onClick={() => dispatch(setTheme('dark'))} />
      <SunIcon className="swap-off fill-current w-8 h-8" onClick={() => dispatch(setTheme('light'))} />
    </label>
  );
};

export default ThemeSwap;
