import { Box, Link, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context/GlobalContext'

const Profile = () => {
  const { user } = useGlobalContext()
  if (!user)
    return (
      <Box display={'flex'} gap={'10px'}>
        <Text fontWeight={'semibold'}>You are not authenticated</Text>
        <Link color={'blue.400'} href={'/'}>
          Go to home page
        </Link>
      </Box>
    )

  return (
    <Box>
      <Box>
        <Text>{user?.fullName}</Text>
      </Box>
    </Box>
  )
}

export default Profile
