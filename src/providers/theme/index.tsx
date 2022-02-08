import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'

type ThemeProps = {
  children: JSX.Element
}

export function Provider({children}: ThemeProps) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}