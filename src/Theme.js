import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    styles: {
      global: {
        body: {
          transitionProperty: "background-color",
          transitionDuration: "600ms"
        }
      }
    },
    config: {
      disableTransitionOnChange: false,
      initialColorMode: 'dark',
      useSystemColorMode: true
    }
  });

export default theme