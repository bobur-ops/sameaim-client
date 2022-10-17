import { Box, Button } from '@chakra-ui/react'
import { getCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import Feed from './components/Feed'
import SideBar from './components/SideBar'

const Club = ({ clubDetails }) => {
  const [isAuthor, setIsAuthor] = useState(false)
  useEffect(() => {
    const author = JSON.parse(clubDetails.author).userId === getCookie('user')
    setIsAuthor(author)
  }, [])
  return (
    <Box>
      {isAuthor && (
        <Box mb={3}>
          <Button colorScheme={'blue'}>New Post</Button>
        </Box>
      )}
      <Box display={'flex'} gap={10}>
        <Box flex={1}>
          <Feed />
        </Box>
        <Box display={{ base: 'none', md: 'block' }} minW={'25%'}>
          <SideBar members={clubDetails.members} />
        </Box>
      </Box>
    </Box>
  )
}

export default Club
