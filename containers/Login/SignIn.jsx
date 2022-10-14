import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { setCookie } from 'cookies-next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { loginUser } from '../../api/client'
import { useGlobalContext } from '../../context/GlobalContext'

const SignIn = () => {
  const router = useRouter()
  const { authUser } = useGlobalContext()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const submitSignin = async () => {
    const data = {
      email,
      password
    }

    if (email && password) {
      try {
        toast('Processing...')
        const res = await loginUser(data)
        if (rememberMe) {
          setCookie('user', JSON.stringify(res.data.result))
        }
        authUser(res.data.result)
        toast.success(`Logged in as ${res.data.result.fullName}`)
        router.push('/')
      } catch (error) {
        toast.error(`${error.response.data.message}`)
      }
    }
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input onChange={e => setEmail(e.target.value)} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                onChange={e => setPassword(e.target.value)}
                type="password"
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox
                  checked={rememberMe}
                  onChange={e => setRememberMe(e.target.checked)}
                >
                  Remember me
                </Checkbox>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                size={'lg'}
                _hover={{
                  bg: 'blue.500'
                }}
                onClick={submitSignin}
              >
                Sign in
              </Button>
            </Stack>

            <Stack pt={6}>
              <Text align={'center'}>
                Do not have an account?{' '}
                <Link href="/signup" color={'blue.400'}>
                  Sign Up
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default SignIn
