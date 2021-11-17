const articlesInitialValue = []

const businessArticlesReducer = (state = articlesInitialValue, action) => {
    switch(action.type) {
        case 'SET_BUSINESS_ARTICLES' : {
            return [ ...action.payload  ]
        }

        default: {
            return [ ...state ]
        }
    };
};

export default businessArticlesReducer