const articlesInitialValue = [];

const entertainmentArticlesReducer = (state = articlesInitialValue, action) => {
    switch(action.type) {
        case 'SET_ENTERTAINMENT_ARTICLES' : {
            return [ ...action.payload  ]
        }

        default: {
            return [ ...state ]
        }
    };
};

export default entertainmentArticlesReducer;