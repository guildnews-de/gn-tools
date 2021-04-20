import { React, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './scss/index.scss';

// eslint-disable-next-line no-unused-vars
import Header from './components/Header';
import {
  selectBodyMode,
} from './features/themeToggle/themeToggle.Slice';

function App() {
  const bodyClass = useSelector(selectBodyMode);
  useEffect(() => {
    document.body.classList.remove('bg-'.concat(bodyClass.text).concat('-sec'));
    document.body.classList.add('bg-'.concat(bodyClass.color));
  });

  return (
    <div className="App">

      <Header />

    </div>
  );
}

export default App;
