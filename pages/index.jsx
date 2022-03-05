import { PrismicQuery } from '../cms/query'
import Products from '../components/products'
import HeadMeta from '../components/headMeta'
import Header from '../components/header'
import styles from '../pagesStyles/Home.module.css'

export default function Home({ responseQuery }) {

  return (
    <>
      <HeadMeta />
      <Header />
      <div style={{
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'url(/jewelry-black.jpg)',
      }}>
        <div className={styles.faded} />

        <div className={styles.content}>
          <h1 className={styles.left}>
            OS MELHORES ACESSÓRIOS 💎
            VOCÊ ENCONTRA AQUI!
          </h1>
          <h1 className={styles.right}>confira nosso catálogo de produtos🥰 e faça seu pedido pelo whatsapp</h1>
        </div>

        {
          responseQuery.map((item) => {
            return (
              <Products key={item} category={item} />
            )
          })
        }
      </div>
    </>
  )
}

export async function getStaticProps() {
  const responseQuery = await PrismicQuery.getTags();

  return {
    props: { responseQuery },
    revalidate: 60
  }
}