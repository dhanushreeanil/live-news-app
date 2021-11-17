const articlesInitialValue = [];

const scienceArticlesReducer = (state = articlesInitialValue, action) => {
    switch(action.type) {
        case 'SET_SCINECE_ARTICLES' : {
            return [ ...action.payload  ]
        }

        default: {
            return [ ...state ]
        }
    };
};

export default scienceArticlesReducer;