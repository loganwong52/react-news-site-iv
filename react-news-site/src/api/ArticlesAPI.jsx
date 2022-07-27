import axios from 'axios'

// given aritcle ID, return Article object with given ID
async function fetchArticleById(articleID) {
    let response = await axios.get('http://hn.algolia.com/api/v1/search?', {
        params: {
            tags: 'story_' + articleID,
            hitsPerPage: 50,
        }
    })
    console.log(response)
    return response
}


// returns a list of articles whose section attribute matches the section argument
async function fetchArticleBySection(section) {
    let response = axios.get('http://hn.algolia.com/api/v1/search_by_date?', {
        params: {
            tags: (`${section}`),
            hitsPerPage: 50,
            query: ('power', 'phone'),
        }
    })

    return response
}


// filters is optional
// so you can search for articles without filters
// returns a list of articles
// if no filters provided, array of all articles is returned
async function fetchArticles(filters = null) {
    let response = axios.get('http://hn.algolia.com/api/v1/search_by_date?', {
        params: {
            tags: ('story'),
            hitsPerPage: 50,
            query: ('power', 'phone')
        }
    })

    return response
}

// export as a batch
export {
    fetchArticleById,
    fetchArticleBySection,
    fetchArticles
}