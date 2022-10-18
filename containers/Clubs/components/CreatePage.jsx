import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { createPostApi } from '../../../api/client'
import TextEditor from '../../../components/TextEditor'

import { useGlobalContext } from '../../../context/GlobalContext'
import { uniqueId } from '../../../utils/uniqueId'

const CreatePage = ({ clubID, authorId }) => {
  const { user } = useGlobalContext()
  const [title, setTitle] = useState('')
  const [contentValue, setContentValue] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const { id } = router.query

  const isDisabled = () => {
    if (title && contentValue) {
      return false
    } else {
      return true
    }
  }

  const submitNewPost = async () => {
    const data = {
      title,
      content: contentValue,
      postId: uniqueId('post')
    }

    try {
      setLoading(true)
      if (user.userId === authorId) {
        const res = await createPostApi(clubID, data)
        setLoading(false)
        router.push(`/clubs/${id}`)
      } else {
        toast.error('You are not the creator of this club')
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
      toast.error(`${error.response.data.message}`)
    }
  }

  return (
    <Box>
      <Heading mb={10}>New Post</Heading>
      <Stack spacing={5}>
        <FormControl isRequired>
          <FormLabel>Title of your post </FormLabel>
          <Input
            value={title}
            type="text"
            onChange={e => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Content</FormLabel>
          <TextEditor value={contentValue} setContentValue={setContentValue} />
        </FormControl>
        {/* <div className="ql-snow">
          <div
            dangerouslySetInnerHTML={{ __html: contentValue }}
            className="ql-editor"
          ></div>
        </div> */}
        <Button
          onClick={submitNewPost}
          colorScheme={'blue'}
          disabled={isDisabled()}
          isLoading={loading}
          loadingText="Creating post..."
        >
          Create Post
        </Button>
      </Stack>
    </Box>
  )
}

export default CreatePage
