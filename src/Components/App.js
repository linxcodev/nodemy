import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import {navigate, useRoutes} from 'hookrouter';

import AppProvider from './AppProvider.js';
import {AppContext} from './AppProvider.js';

const StyledApp = styled.div``;

function App() {
  return (
    <AppProvider>
      <AppContext.Consumer>
        {({ }) => (
          <StyledApp>Heloo world</StyledApp>
        )}
      </AppContext.Consumer>
    </AppProvider>
  );
}

if (document.getElementById('react_root')) {
  ReactDom.render(<App />, document.getElementById('react_root'));
}
