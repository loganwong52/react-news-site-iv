import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Article from '../components/Article'
import { fetchArticleById } from '../api/ArticlesAPI'


function ArticlePage({ articles }) {

    let { articleID } = useParams()

    // a state that will hold our article
    const [article, setArticle] = useState(null)

    // when it mounts, that's when you do the api call and render the article
    // given the article ID
    // putting articleID in the [], it'll be when articleID updates
    useEffect(() => {
        fetchArticleById(articleID).then((response) => {
            console.log(response)
            setArticle(response.data.hits[0])
        })

    }, [articleID])


    // const article = articles[articleID - 1] // -1 because we added 1 in the url to make it restful

    return (
        <div>
            <Article {...article} />
        </div>
    )
}

export default ArticlePage