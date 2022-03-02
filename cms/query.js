import Prismic from '@prismicio/client'

const client = Prismic.client(process.env.NEXT_PUBLIC_API_URL);
//const results = async()=> await client.getTags();



export const PrismicQuery = {

    getTags: async () => {
        const results = await client.getTags();
        return results
    }
}