const articlesInitialValue = [];

const generalArticlesReducer = (state = articlesInitialValue, action) => {
    switch(action.type) {
        case 'SET_GENERAL_ARTICLES' : {
            return [ ...action.payload  ]
        }

        default: {
            return [ ...state ]
        }
    };
};

export default generalArticlesReducer;