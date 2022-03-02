import { PrismicQuery } from '../cms/query'
import RowProducts from '../components/rowProducts'

export default function Home({ responseQuery }) {

  return (
    <>
      <h1>index</h1>

      {
        responseQuery.map((item) => {
          return (
          <RowProducts key={item} category={item} />
          )
        })
      }

    </>
  )
}


export async function getStaticProps() {
  const responseQuery = await PrismicQuery.getTags();

  return {
    props: { responseQuery }

  }
}