import React, { Component } from 'react'
import FadeIn from 'react-fade-in'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Header, Footer, Home } from 'pages'

import './App.scss'

class App extends Component {
  render() {
    return (
      <FadeIn>
        <div className='AppWrapper'>
          <Header />
          {
            <Switch>
              <Route exact path='/home' render={() => <Home />} />
              {/* <Route path='/dashboard'
                render={({ match }) => <Dashboard match={match} />}
              /> */}
              <Redirect exact path='/' to={'home'} />
            </Switch>
          }
          <Footer />
        </div>
      </FadeIn>
    )
  }
}

export default App
