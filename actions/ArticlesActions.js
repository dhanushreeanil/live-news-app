import axios from 'axios';

export const setHedlines = (articles) => {
    return {
        type: 'SET_HEADLINES',
        payload: articles
    }
}

export const setBusinessArticles = (articles) => {
    return {
        type: 'SET_BUSINESS_ARTICLES',
        payload: articles
    };
};

export const setEntertainmentArticles = (articles) => {
    return {
        type: 'SET_ENTERTAINMENT_ARTICLES',
        payload: articles
    }
};

export const setGeneralArticles = (articles) => {
    return {
        type: 'SET_GENERAL_ARTICLES',
        payload: articles
    }
}

export const setHealthArticles = (articles) => {
    return {
        type: 'SET_HEALTH_ARTICLES',
        payload: articles
    }
};

export const setScienceArticles = (articles) => {
    return {
        type: 'SET_SCINECE_ARTICLES',
        payload: articles
    }
};

export const setSportsArticles = (articles) => {
    return {
        type: 'SET_SPORTS_ARTICLES',
        payload: articles
    }
};

export const setTechnologyArticles = (articles) => {
    return {
        type: 'SET_TECHNOLOGY_ARTICLES',
        payload: articles
    }
};

export const startGetNewsArticles = params => {
    const { category } = params
    return (dispatch) => {
        const { url, options } = getRequestDetails({ category });
        axios.get(url, options)
            .then(response => {
                const { articles } = response.data
                switch (category) {
                    case 'headlines' : {
                        (response.data.totalResults > 0) ?
                            dispatch(setHedlines(articles)) :
                            dispatch(setHedlines([])) // empty array when no articles found
                        break;
                    }

                    case 'business': {
                        (response.data.totalResults > 0) ?
                            dispatch(setBusinessArticles(articles)) :
                            dispatch(setBusinessArticles([])) // empty array when no articles found
                        break;
                    }

                    case 'entertainment': {
                        (response.data.totalResults > 0) ?
                            dispatch(setEntertainmentArticles(articles)) :
                            dispatch(setEntertainmentArticles([])) // empty array when no articles found
                        break;
                    }

                    case 'general': {
                        (response.data.totalResults > 0) ?
                            dispatch(setGeneralArticles(articles)) :
                            dispatch(setGeneralArticles([])) // empty array when no articles found
                        break;
                    }

                    case 'health': {
                        (response.data.totalResults > 0) ?
                            dispatch(setHealthArticles(articles)) :
                            dispatch(setHealthArticles([])) // empty array when no articles found
                        break;
                    }

                    case 'science': {
                        (response.data.totalResults > 0) ?
                            dispatch(setScienceArticles(articles)) :
                            dispatch(setScienceArticles([])) // empty array when no articles found
                        break;
                    }

                    case 'sports': {
                        (response.data.totalResults > 0) ?
                            dispatch(setSportsArticles(articles)) :
                            dispatch(setSportsArticles([])) // empty array when no articles found
                        break;
                    }

                    case 'technology': {
                        (response.data.totalResults > 0) ? 
                            dispatch(setTechnologyArticles(articles)) :
                            dispatch(setTechnologyArticles([]))
                        break;
                    }

                    default: {
                        break;
                    }
                };
            })
            .catch(error => {
                alert(error)
            });
    };

}

const getRequestDetails = params => {
    const { category } = params
    const apiKey = "ef4f4ef865e247598037dd86672c01e7"
    let url
    (category !== 'headlines') ?
        url = `http://newsapi.org/v2/top-headlines?country=us&category=${category}` :
        url = `http://newsapi.org/v2/top-headlines?country=us`
    
    const options = {
        headers: {
            'X-Api-Key': apiKey
        }
    }

    return {
        url,
        options
    }
}