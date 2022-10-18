import { Box, Button, Link } from '@chakra-ui/react'
import { getCookie } from 'cookies-next'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Feed from './components/Feed'
import SideBar from './components/SideBar'

const Club = ({ clubDetails }) => {
  const [isAuthor, setIsAuthor] = useState(false)
  const router = useRouter()
  const { id } = router.query
  useEffect(() => {
    const author = JSON.parse(clubDetails.author).userId === getCookie('user')
    setIsAuthor(author)
  }, [])
  return (
    <Box>
      {isAuthor && (
        <Box mb={3}>
          <NextLink href={`/clubs/${id}/create`}>
            <Link>
              <Button colorScheme={'blue'}>New Post</Button>
            </Link>
          </NextLink>
        </Box>
      )}
      <Box display={'flex'} gap={10}>
        <Box flex={1}>
          <Feed posts={clubDetails.posts} />
        </Box>
        <Box display={{ base: 'none', md: 'block' }} minW={'25%'}>
          <SideBar members={clubDetails.members} />
        </Box>
      </Box>
    </Box>
  )
}

export default Club
