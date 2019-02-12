import React, { Component } from 'react'
import FadeIn from 'react-fade-in'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Header, Footer, Home, About, Contact } from 'pages'

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
              <Route path='/about'
                render={({ match }) => <Contact match={match} />}
              />
              <Route exact path='/services' render={() => <About />} />
              <Route exact path='/news' render={() => <About />} />
              <Route exact path='/team' render={() => <About />} />
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
