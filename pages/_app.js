import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import Layout from '../components/layouts/main'
import Fonts from '../lib/fonts'
import theme from '../lib/theme'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Fonts />
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </Provider>
    </ChakraProvider>
  )
}

export default Website
