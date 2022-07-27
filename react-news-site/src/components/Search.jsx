import Form from 'react-bootstrap/Form'
import { useState, useEffect } from "react"
import ArticleTeaser from "../components/ArticleTeaser"
import { fetchArticles } from '../api/ArticlesAPI'

function Search({ articles, setSearchResults, setShowArticles }) {

    const [searchTitle, setSearchTitle] = useState('')
    // const [results, setResults] = useState([])

    const handleChange = (event) => {
        const value = event.target.value
        console.log(`${value} val changed`)

        setSearchTitle(value)
    }

    useEffect(() => {
        if (searchTitle != '') {
            const filteredArticles = articles.filter(article => article.title.includes(searchTitle))
            setSearchResults(filteredArticles)
            setShowArticles(false)
        }
        else {
            setSearchResults([])
            setShowArticles(true)
        }

    }, [searchTitle])

    return (
        <div>
            <Form >
                <Form.Control
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(event) => { handleChange(event) }}
                />

            </Form>

        </div>
    )
}

export default Search