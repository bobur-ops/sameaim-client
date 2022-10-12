import {
  Box,
  ChakraTable,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { dummyRating } from '../../../demo/data'

const Rating = () => {
  const router = useRouter()

  return (
    <Box>
      <Text fontSize="5xl" align="center" fontWeight="semibold">
        Rating
      </Text>
      <TableContainer mt={85}>
        <Table variant="simple" size={{ base: 'sm', md: 'lg' }}>
          <TableCaption>Based on number of members</TableCaption>
          <Thead>
            <Tr>
              <Th>№</Th>
              <Th>Name of club</Th>
              <Th>Memebers</Th>
              <Th display={{ base: 'none', md: 'table-cell' }}>Created at</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dummyRating.map(item => (
              <Tr
                cursor="pointer"
                onClick={() => router.push(`/clubs/${item.index}`)}
                key={item.index}
              >
                <Td>#{item.index}</Td>
                <Td>{item.clubName}</Td>
                <Td>{item.members}</Td>
                <Td display={{ base: 'none', md: 'table-cell' }}>
                  {item.createdAt}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Rating
