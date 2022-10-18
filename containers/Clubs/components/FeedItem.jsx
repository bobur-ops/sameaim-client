import { Box, HStack, Icon, Stack, Text } from '@chakra-ui/react'
import { FaRegComment } from 'react-icons/fa'

const FeedItem = ({ data }) => {
  const toJs = value => {
    return JSON.parse(value)
  }

  return (
    <Box
      cursor={'pointer'}
      border="1px"
      borderColor="gray.200"
      mb={5}
      p={3}
      borderRadius={12}
      boxShadow={'md'}
    >
      <Box fontSize={'sm'}>
        Posted by{' '}
        <Text display={'inline-block'} color={'blue'} fontWeight={'medium'}>
          {' '}
          {toJs(data.author).fullName}{' '}
        </Text>
      </Box>
      <Box>
        <Text fontWeight={'semibold'} fontSize={'2xl'}>
          {data.title}
        </Text>
      </Box>
      <HStack mt={'10px'}>
        <Icon as={FaRegComment} />
        <Text>{data.comments.length}</Text>
      </HStack>
    </Box>
  )
}

export default FeedItem
