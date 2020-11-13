import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const StyledApp = styled.div``;

function App() {
  return (
    <StyledApp>Heloo world</StyledApp>
  );
}

if (document.getElementById('react_root')) {
  ReactDom.render(<App />, document.getElementById('react_root'));
}
