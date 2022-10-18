import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Page = () => {
  const router = useRouter()
  const { postId } = router.query
  useEffect(() => {
    console.log(postId)
  }, [])
  return <div>{postId}</div>
}

export default Page
