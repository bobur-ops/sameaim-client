import { getClubsRating, getNewsApi } from '../api/client'
import Home from '../containers/Home'

const Page = ({ ratingData, news }) => (
  <Home ratingData={ratingData} news={news} />
)

export default Page

export async function getServerSideProps() {
  const data = await getClubsRating()
  const news = await getNewsApi()

  return {
    props: {
      ratingData: data.data.data,
      news: news.data.data
    }
  }
}
