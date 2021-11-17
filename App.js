import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'

import BusinessNews from './components/news/BusinessNews';
import TechnologNews from './components/news/TechnologyArticles'
import SportsNews from './components/news/SportsNews';
import EntertainmentNews from './components/news/EntertainmentNews';
import GeneralNews from './components/news/GeneralNews';
import HealthNews from './components/news/HealthNews';
import ScienceNews from './components/news/ScienceNews';
import Headlines from './components/news/Headlines';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="text-center">
          <h1>NEWS</h1>
          <hr/>
        </div>
        <div>
          <ul className="nav nav-tabs">
            <li className="nav-item" id="0">
              <Link className="nav-link" to="/" > Headlines </Link>
            </li>
            <li className="nav-item" id="1">
              <Link className="nav-link" to="/business" > Business </Link>
            </li>
            <li className="nav-item" id="2">
              <Link className="nav-link" to="/entertainment" > Entertainment </Link>
            </li>
            <li className="nav-item" id="3">
              <Link className="nav-link" to="/general" > General </Link>
            </li>
            <li className="nav-item" id="4">
              <Link className="nav-link" to="/health" > Health </Link>
            </li>
            <li className="nav-item" id="6">
              <Link class="nav-link" to="/science" > Science </Link>
            </li>
            <li className="nav-item" id="7">
              <Link className="nav-link" to="/sports" > Sports </Link>
            </li>
            <li className="nav-item" id="8">
              <Link className="nav-link" to="/technology" > Technology </Link>
            </li>
          </ul>

            <Route path="/" component={Headlines} exact={true} />
            <Route path="/business" component={BusinessNews} />
            <Route path="/entertainment" component={EntertainmentNews} />
            <Route path="/general" component={GeneralNews} />
            <Route path="/health" component={HealthNews} />
            <Route path="/science" component={ScienceNews} />
            <Route path="/sports" component={SportsNews} />
            <Route path="/technology" component={TechnologNews} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
