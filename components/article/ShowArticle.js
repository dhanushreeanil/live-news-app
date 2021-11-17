import React from 'react';

function ShowArticle(props) {
    const { article } = props
    return (
        <div className="col mb-4 mt-4">
            <div className="card" style={{ "width":"75%" }}>
                <a href={ article.url }>
                    <img src={ article.urlToImage } class="card-img-top" height= "350"></img>
                </a>
                <div className="card-body">
                    <h5 className="card-title">{ article.title }</h5>
                    <p className="card-text">{ article.description }</p>
                    <p className="card-text">
                        <p className="text-muted">{ article.author } { article.publishedAt }</p>
                    </p>
                    <a href={ article.url }> Read.. </a>
                </div>
            </div>
        </div>
    )
}

export default ShowArticle