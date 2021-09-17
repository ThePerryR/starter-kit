import { useTheme, ThemeProvider, withTheme } from '@emotion/react'
import theme from '@rebass/preset'
import { SessionProvider } from 'next-auth/react'

import '../styles/globals.css'

function MyApp ({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
