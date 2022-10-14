import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { createUser } from '../../api/client'
import { uniqueId } from '../../utils/uniqueId'

const SignUp = () => {
  const router = useRouter()

  const [showPassword, setShowPassword] = useState(false)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitSignUp = async () => {
    const data = {
      fullName,
      email,
      password,
      userId: uniqueId()
    }

    try {
      toast('Processing...')
      const res = await createUser(data)
      localStorage.setItem('user', JSON.stringify(res.data.result))
      // dispatch(signup(res.data.result))
      toast.success(`Logged in as ${res.data.result.fullName}`)
      router.push('/')
    } catch (error) {
      toast.error(`${error.response.data.message}`)
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
          <Heading fontSize={'4xl'}>Sign up to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="fullName" isRequired>
              <FormLabel>Full name</FormLabel>
              <Input type="text" onChange={e => setFullName(e.target.value)} />
            </FormControl>
            <FormControl
              id="email"
              onChange={e => setEmail(e.target.value)}
              isRequired
            >
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  onChange={e => setPassword(e.target.value)}
                  type={showPassword ? 'text' : 'password'}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword(showPassword => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={'blue.400'}
                color={'white'}
                size={'lg'}
                _hover={{
                  bg: 'blue.500'
                }}
                onClick={submitSignUp}
              >
                Sign up
              </Button>
            </Stack>

            <Stack pt={6}>
              <Text align={'center'}>
                Already a user?{' '}
                <Link href="/signin" color={'blue.400'}>
                  Log In
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default SignUp
