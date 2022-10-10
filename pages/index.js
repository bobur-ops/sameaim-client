import { Box, Container, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container maxW="container.xl">
      <Box
        borderRadius="lg"
        bg="purple.500"
        p={3}
        color="white"
        align="center"
        mb={5}
      >
        Hello, it is a service to gather like-minded people
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Same Aim
          </Heading>
          <p>Digital service (search for members to your club)</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
