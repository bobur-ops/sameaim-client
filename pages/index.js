import { getClubsRating } from '../api/client'
import Home from '../containers/Home'

const Page = ({ ratingData }) => <Home ratingData={ratingData} />

export default Page

export async function getServerSideProps() {
  const data = await getClubsRating()

  return {
    props: {
      ratingData: data.data.data
    }
  }
}
