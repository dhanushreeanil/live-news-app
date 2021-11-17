const articlesInitialValue = [];

const healthArticlesReducer = (state = articlesInitialValue, action) => {
    switch(action.type) {
        case 'SET_HEALTH_ARTICLES' : {
            return [ ...action.payload  ]
        }

        default: {
            return [ ...state ]
        }
    };
};

export default healthArticlesReducer;