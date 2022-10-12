import { Box, Button, Container, Heading } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { dummyUsers } from '../../demo/data'
import { fetchUsers, getUsers } from '../../slices/usersSlice'
import Header from './components/Header'
import News from './components/News'
import Rating from './components/Rating'

const Home = () => {
  const users = useSelector(getUsers)
  const dispatch = useDispatch()

  return (
    <div>
      <Header />
      <News />
      <Rating />
    </div>
  )
}

export default Home
