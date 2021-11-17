import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import articlesReducer from '../reducers/BusinessArticlesReducer';
import entertainmentArticlesReducer from '../reducers/EntertainmentArticlesReducer';
import generalArticlesReducer from '../reducers/GeneralArticlesReducer';
import headlinesReducer from '../reducers/HeadlinesReducer';
import healthArticlesReducer from '../reducers/HealthArticlesReducer';
import scienceArticlesReducer from '../reducers/ScienceArticlesReducer';
import sportsArticlesReducer from '../reducers/SportsArticlesReducer';
import technologyArticlesReducer from '../reducers/TechnologyArticlesReducer';

const configureStore = () => {
    const store = createStore(combineReducers({
        headlines: headlinesReducer,
        businessArticles: articlesReducer,
        entertinemnetArticles: entertainmentArticlesReducer,
        generalArticles: generalArticlesReducer,
        healthArticles: healthArticlesReducer,
        scienceArticles: scienceArticlesReducer,
        sportsArticles: sportsArticlesReducer,
        technologyArticles: technologyArticlesReducer
    }), applyMiddleware(thunk))

    return store
}

export default configureStore
