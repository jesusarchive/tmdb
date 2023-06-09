import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import React from 'react';

import { Button } from '../../components';
import { useStore } from '../../store';
import { setTheme } from '../../store/actions';
import { DARK_THEME, LIGHT_THEME } from './constants';

const ThemeSwap = () => {
  const { state, dispatch } = useStore();

  return (
    <Button color="ghost" onClick={() => dispatch(setTheme(state.theme === DARK_THEME ? LIGHT_THEME : DARK_THEME))}>
      {state.theme === DARK_THEME ? <MoonIcon className="w-8 h-8" /> : <SunIcon className="w-8 h-8" />}
    </Button>
  );
};

export default ThemeSwap;
