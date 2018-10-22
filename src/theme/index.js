import React from 'react'
import { injectGlobal, ThemeProvider as Root } from 'styled-components'
import config from './config'

export const theme = config

injectGlobal`
  * {
    box-sizing: border-box;
    font-weight: inherit;
    -webkit-font-smoothing: antialiased;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  html,
  body {
    min-height: 100%;
    min-width: 100%;
  }
  body {
    padding: 0;
    margin: 0;
    position: relative;
    height: 100%;
    max-height: 100%;
    width: 100%;
    overflow-x: hidden;
    font-size: ${theme.fontSizes[2]}px;
    font-family: ${config.font};
    font-weight: normal;
    line-height: 1.5;
    border-top: 12px solid ${theme.colors.brandYellow};
  }
  h1,
  h2,
  h3 {
    font-family: ${theme.fontDisplay};
  }
  h1 + h2,
  p {
    font-weight: normal;
  }
  a {
    box-shadow: none;
    text-decoration: none;
  }
  ul, ol {
    margin: 0;
    padding: 0;
  }
`

const ThemeProvider = ({ children }) => (
  <Root theme={config}>
    <>{children}</>
  </Root>
)

export default ThemeProvider
