import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'Avenir Next';
  src: url('fonts/AvenirNext-Regular.otf');
  }

  @font-face {
  font-family: 'Avenir Next';
  src: url('fonts/AvenirNext-Bold.otf');
  font-weight: bold;
  }

  @font-face {
  font-family: 'Avenir Next';
  src: url('fonts/AvenirNext-It.otf');
  font-style: italic;
  }

  @font-face {
  font-family: 'Avenir Next';
  src: url('fonts/AvenirNext-Medium.ttf');
  font-weight: 500;
  }

  body {
  margin: 0;
  font-family: 'Avenir Next';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  h1 {
  color: #000;
  font-size: 24px;
  font-weight: bold;
  line-height: 22px;
  }

  h3 {
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  padding: 0;
  }

  ::-webkit-scrollbar {
  visibility: hidden;
  width: 0;
  }

  @media (max-width: 420px) {
    h1 {
    font-size: 18px;
    }

    h3 {
    font-size: 12px;
    }
  }

`
