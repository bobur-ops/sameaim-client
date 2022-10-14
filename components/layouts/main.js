import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../navbar.js'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Same Aim</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Navbar path={router.asPath} />

      <Container maxW="container.lg" p={2} pl={3}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
