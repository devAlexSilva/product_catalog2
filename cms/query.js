import Prismic from '@prismicio/client'

const client = Prismic.client(process.env.NEXT_PUBLIC_API_URL);

function formatQueryResults(resultsToFormat, resultsFormated) {
//console.log(resultsToFormat)
    resultsToFormat.map(item => {
        resultsFormated.push({
            productTitle: item.tags[0],
            productKey: item.id,
            productImg: item.data.image.url,//.replace("&w=50&h=50", ""),
            productName: item.data.name,
            productPrice: item.data.price
        })
    })
    return resultsFormated;
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
    },
    getItemById: async(itemId) => {
        const { results } = await client.query(Prismic.Predicates.at('document.id', itemId))
        return results;
    }
}
