const articlesInitialValue = [];

const headlinesReducer = (state = articlesInitialValue, action) => {
    switch(action.type) {
        case 'SET_HEADLINES' : {
            return [ ...action.payload  ]
        }

        default: {
            return [ ...state ]
        }
    };
};

export default headlinesReducer;