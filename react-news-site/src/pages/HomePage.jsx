import ArticleList from "../components/ArticleList"
import Search from "../components/Search"


function HomePage({ articles, showArticles }) {


    return (
        <div>
            {
                showArticles &&
                <div>
                    <hr />
                    <h2>All Articles</h2>
                    <ArticleList articles={articles} />
                </div>
            }
        </div>
    )
}

export default HomePage