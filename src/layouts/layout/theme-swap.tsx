import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import React from 'react';

import { Button } from '../../components';
import { setTheme } from '../../store/actions';
import { useStore } from '../../store/store';

const ThemeSwap = () => {
  const { state, dispatch } = useStore();

  return (
    <Button color="ghost" onClick={() => dispatch(setTheme(state.theme === 'dark' ? 'light' : 'dark'))}>
      {state.theme === 'dark' ? <MoonIcon className="w-8 h-8" /> : <SunIcon className="w-8 h-8" />}
    </Button>
  );
};

export default ThemeSwap;
