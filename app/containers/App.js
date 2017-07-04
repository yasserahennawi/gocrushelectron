// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const AppWrapper = styled.div `
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: #F8F8F8;
`

export default class App extends Component {

  props: {
    children: Children
  };

  render() {
    return (
      <MuiThemeProvider>
        <AppWrapper>
          {this.props.children}
        </AppWrapper>
      </MuiThemeProvider>
    );
  }
}
