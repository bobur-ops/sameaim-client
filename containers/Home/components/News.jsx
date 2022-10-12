import { Box, Stack, Text } from '@chakra-ui/react'
import { dummyNews } from '../../../demo/data'
import NewsItem from './NewsItem'

const News = () => {
  return (
    <Box mb={174}>
      <Text mb={61} fontSize="5xl" fontWeight="bold" align="center">
        News
      </Text>
      <Box display="flex" justifyContent="center" flexWrap="wrap" gap="80px">
        {dummyNews.map(item => (
          <NewsItem key={item.id} data={item} />
        ))}
      </Box>
    </Box>
  )
}

export default News
