import React, { useState } from 'react';

import { ThemeProvider } from 'emotion-theming';

import Main from './containers/Main';
import ThemeContext from './context/ThemeContext';

const THEME_COLORS = require('./colors');

const App = () => {
  const themeHook = useState('lightTheme');

  const theme = {
    colors: THEME_COLORS[themeHook[0]],
  };

  return (
    <ThemeContext.Provider value={themeHook}>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
