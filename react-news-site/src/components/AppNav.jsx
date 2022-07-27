import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Search from './Search'
import ArticleTeaser from './ArticleTeaser'
import sections from '../data/sections.json' //data

function AppNav({ articles, setShowArticles }) {

    const [navItems, setNavItems] = useState(sections)
    const [searchResults, setSearchResults] = useState([])


    // if there are search results, then hide ALL ARTICLES
    // but if there are 0 search results, then display ALL ARTICLES
    useEffect(() => {
        if (searchResults.length > 0) {
            setShowArticles(false)
        } else {
            setShowArticles(true)
        }

    }, [searchResults])
    // you don't have to worry about whether it's been updated correctly because
    // it's inside useEffect, so it'll only run after searchResults has been updated
    // asynchronously

    return (
        <div>
            <Navbar>
                <Navbar.Brand>
                    <img src="https://www.codeplatoon.org/wp-content/uploads/2018/10/CP-logo-2018-abbrev-1.png" width="60" />
                    CP News
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href='/'>
                        STORY
                    </Nav.Link>
                    {
                        navItems.map(((navItem, index) => {
                            return (
                                <Nav.Link key={index} href={`/#/sections/${navItem.value}`} onClick={() => console.log(navItem.value)}>
                                    {navItem.label}
                                </Nav.Link>
                            )
                        }))
                    }
                </Nav>
                <Search articles={articles} setSearchResults={setSearchResults} />

            </Navbar>

            <div>
                {
                    searchResults.length > 0
                        ? <div >
                            <h2>search results</h2>
                            {searchResults.map((article) => (
                                <ArticleTeaser key={article.objectID} {...article} />
                            ))}</div>
                        : ''
                }
            </div>
        </div>

    )
}
export default AppNav;