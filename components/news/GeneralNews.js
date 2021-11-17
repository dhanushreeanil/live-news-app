import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { startGetNewsArticles } from '../../actions/ArticlesActions';
import ShowArticle from '../article/ShowArticle';

const GeneralNews = (props) => {

    const articles = useSelector((state) =>{
        return state.generalArticles
    })

    const dispatch = useDispatch()

    if (articles.length === 0) {
        dispatch(startGetNewsArticles({ category: 'general' }))
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

export default GeneralNews