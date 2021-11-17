const articlesInitialValue = []

const technologyArticlesReducer = (state = articlesInitialValue, action) => {
    switch(action.type) {
        case 'SET_TECHNOLOGY_ARTICLES' : {
            return [ ...action.payload ]
        }

        default: {
            return [ ...state ]
        }
    };
};

export default technologyArticlesReducer