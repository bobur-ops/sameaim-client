import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  Textarea
} from '@chakra-ui/react'
import { useState } from 'react'

const Form = ({ create, loading }) => {
  const [clubName, setClubName] = useState('')
  const [description, setDescription] = useState('')

  return (
    <Stack spacing={6}>
      <FormControl isRequired>
        <FormLabel>Choose Name for your Club</FormLabel>
        <Input type="text" onChange={e => setClubName(e.target.value)} />
        <FormHelperText>
          Try to find out a name that shows the concept of your club
        </FormHelperText>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Describe your club</FormLabel>
        <Textarea
          minH={'200px'}
          placeholder="Write here..."
          onChange={e => setDescription(e.target.value)}
        />
      </FormControl>
      <Button
        isLoading={loading}
        loadingText="Creating..."
        onClick={() => create({ clubName, description })}
        colorScheme={'blue'}
      >
        Create
      </Button>
    </Stack>
  )
}

export default Form
