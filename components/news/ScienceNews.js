import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { startGetNewsArticles } from '../../actions/ArticlesActions';
import ShowArticle from '../article/ShowArticle';

const ScienceNews = (props) => {

    const articles = useSelector((state) =>{
        return state.scienceArticles
    })

    const dispatch = useDispatch()

    if (articles.length === 0) {
        dispatch(startGetNewsArticles({ category: 'science' }))
    }

    return (
        <div className="container">
            {
                articles.length ?
                    articles.map(article => {
                        return (
                            <div className="row">
                                <ShowArticle article={article} />
                            </div>
                        )
                    })
                    : null
            }
        </div>
    )
}

export default ScienceNews