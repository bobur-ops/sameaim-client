import { ChakraProvider } from '@chakra-ui/react'
import { Toaster } from 'react-hot-toast'
import Layout from '../components/layouts/main'
import { GlobalContextProvider } from '../context/GlobalContext'
import Fonts from '../lib/fonts'
import theme from '../lib/theme'
import '../styles.css'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <GlobalContextProvider>
        <Layout router={router}>
          <Toaster />
          <Component {...pageProps} key={router.route} />
        </Layout>
      </GlobalContextProvider>
    </ChakraProvider>
  )
}

export default Website
