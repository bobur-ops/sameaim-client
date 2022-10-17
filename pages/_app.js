import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import Router from 'next/router'
import NProgress from 'nprogress'
import { Toaster } from 'react-hot-toast'
import Layout from '../components/layouts/main'
import { GlobalContextProvider } from '../context/GlobalContext'
import Fonts from '../lib/fonts'
import theme from '../lib/theme'
import '../styles.css'

const Website = ({ Component, pageProps, router }) => {
  NProgress.configure({ showSpinner: false })

  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })

  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <GlobalContextProvider>
        <Layout router={router}>
          <Toaster />
          <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </GlobalContextProvider>
    </ChakraProvider>
  )
}

export default Website
