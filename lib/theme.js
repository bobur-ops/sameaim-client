import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: props => ({
    body: {
      fontFamily: 'Montserrat'
    }
  })
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({ config, styles })
export default theme
