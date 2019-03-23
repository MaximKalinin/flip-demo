import React, { Component } from 'react';
import styled from 'styled-components';
// import logo from './logo.svg';
// import './App.css';

import AnimatedNavbar from './AnimatedNavbar';

const AppContainer = styled.div`
  background: #53f;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  > div:first-of-type {
    flex: 1 0 70vh;
  }
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <AnimatedNavbar />
      </AppContainer>
    );
  }
}

export default App;
