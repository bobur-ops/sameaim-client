import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Logo from './Logo'

const LinkItem = ({ href, children }) => {
  return (
    <NextLink href={href}>
      <Link fontFamily="Montserrat" fontWeight="600">
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  return (
    <Box as="nav" w="100%" {...props}>
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        wrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          gap={71}
          alignItems="center"
          // flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="#about">About us</LinkItem>
          <LinkItem href="#news">News</LinkItem>
          <LinkItem href="#rating">Rating</LinkItem>
          <LinkItem href="#create">Create Club</LinkItem>
        </Stack>
        <Box flex={{ base: 1, md: 0 }} mr={5} align="right">
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="#about" passHref>
                  <MenuItem as={Link}>About us</MenuItem>
                </NextLink>
                <NextLink href="#news" passHref>
                  <MenuItem as={Link}>News</MenuItem>
                </NextLink>
                <NextLink href="#rating" passHref>
                  <MenuItem as={Link}>Rating</MenuItem>
                </NextLink>
                <NextLink href="#create" passHref>
                  <MenuItem as={Link}>Create Club</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
        <Button bg="#7195E1" color="white" w="fit-content">
          Sign In
        </Button>
      </Container>
    </Box>
  )
}

export default Navbar
