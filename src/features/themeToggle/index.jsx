import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ButtonGroup, Button } from 'reactstrap';

import { FontAwesomeIcon as I } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faMoon } from '@fortawesome/free-solid-svg-icons';

import {
  setLight,
  setDark,
  setMixed,
  selectThemeMode,
  selectHeaderMode,
} from './themeToggle.Slice';

function ThemeToggle() {
  const mode = useSelector(selectThemeMode);
  const dispatch = useDispatch();

  const headClass = useSelector(selectHeaderMode);

  return (
    <ButtonGroup id="theme-mode" className="ml-2">
      <Button
        color={headClass.button}
        value="light"
        onClick={() => dispatch(setLight())}
        className={(mode === 'light') ? 'active' : ''}
      >
        <I icon={faSun} />
      </Button>
      <Button
        color={headClass.button}
        value="mixed"
        onClick={() => dispatch(setMixed())}
        className={(mode === 'mixed') ? 'active' : ''}
      >
        <I icon={faCloud} />
      </Button>
      <Button
        color={headClass.button}
        value="dark"
        onClick={() => dispatch(setDark())}
        className={(mode === 'dark') ? 'active' : ''}
      >
        <I icon={faMoon} />
      </Button>
    </ButtonGroup>
  );
}

export default ThemeToggle;
