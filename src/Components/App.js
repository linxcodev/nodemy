import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import {navigate, useRoutes} from 'hookrouter';

import AppProvider from './AppProvider.js';
import {AppContext} from './AppProvider.js';

import {Nav} from './Nav.js';
import {Sidebar} from './Sidebar.js';

const StyledApp = styled.div`
color: #cccccc;
	background: rgba(1,1,1,1);
	width: 100vw;
	height: 100vh;

	#routed-component-container {
		width: calc(100vw - 32rem);
		height: calc(100vh - 5rem);
		position: absolute;
		top: 5rem;
		left: 32rem;
	}
`;

function App() {
  return (
    <AppProvider>
      <AppContext.Consumer>
        {({ }) => (
          <StyledApp>
            <Nav />
            <div id="routed-component-container">

            </div>
            <Sidebar />
          </StyledApp>
        )}
      </AppContext.Consumer>
    </AppProvider>
  );
}

if (document.getElementById('react_root')) {
  ReactDom.render(<App />, document.getElementById('react_root'));
}
