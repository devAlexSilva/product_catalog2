import Prismic from '@prismicio/client'

const client = Prismic.client(process.env.NEXT_PUBLIC_API_URL);
const results = async()=> await client.getTags();
console.log(results)

/*
async function resultsTag(){
    const results = await client.getTags();
    return results
}


export const PrismicQuery = {

    getTags: async () => {
        const results = await client.getTags();
        return results;
    },

    getProductsByTag: async(tagName) => {
        const { results } = await client.query(Prismic.Predicates.at('document.tags', [tagName]));
        const resultsFormated = []

        return formatQueryResults(results, resultsFormated);
        
    }
}
