const articlesInitialValue = []

const sportsArticlesReducer = (state = articlesInitialValue, action) => {
    switch(action.type) {
        case 'SET_SPORTS_ARTICLES' : {
            return [ ...action.payload  ]
        }

        default: {
            return [ ...state ]
        }
    };
};

export default sportsArticlesReducer;