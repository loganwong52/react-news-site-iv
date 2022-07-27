import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'

// function ArticleTeaser (props){
function ArticleTeaser({ objectID, title, created_at, author, comment_text = '', points }) {
    return (
        <Container>
            <hr />
            <Row>
                <Col lg='8'>
                    <h2 >
                        <Link to={`/articles/${objectID}`} >{title} </Link>
                    </h2>
                    <p>{created_at}</p>

                </Col>
                <Col lg='4'>
                    {points
                        ? <p>POINTS: {points}</p>
                        : ''
                    }
                </Col>
            </Row>
            <Row>
                {author && <h2>by: {author}</h2>}
            </Row>
            <Row>
                {comment_text
                    ? <p>{comment_text}</p>
                    : ''
                }
            </Row>
        </Container>
    )
}
export default ArticleTeaser;