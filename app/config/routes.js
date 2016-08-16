import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { MainContainer, HomeContainer, DashboardContainer } from 'containers'

const routes = (
  <Router history={hashHistory} >
    <Router path='/' component={MainContainer} >
      <Route path='/dashboard' component={DashboardContainer} />
      <IndexRoute component={HomeContainer} />
    </Router>
  </Router>
)

export default routes
