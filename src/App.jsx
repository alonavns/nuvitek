import React, { Component } from 'react'
import FadeIn from 'react-fade-in'
import { Route, Switch, Redirect } from 'react-router-dom'

import { 
  Header, 
  Footer, 
  Home, 
  About, 
  Contact, 
  Stories, 
  Vehicles, 
  Careers, 
  Blog, 
  Article, 
  Cloud,
} from 'pages'

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
              <Route exact path='/about-us' render={() => <About />} />
              <Route exact path='/stories' render={() => <Stories />} />
              <Route exact path='/vehicles' render={() => <Vehicles />} />
              <Route exact path='/careers' render={() => <Careers />} />
              <Route exact path='/cloud' render={() => <Cloud />} />
              <Route exact path='/automation' render={() => <Cloud />} />
              <Route exact path='/transformation' render={() => <Cloud />} />
              <Route path='/contact-us'
                render={({ match }) => <Contact match={match} />}
              />
              <Route exact path='/services' render={() => <About />} />
              <Route exact path='/news' render={() => <About />} />
              <Route exact path='/blog' render={() => <Blog />} />
              <Route exact path='/blog/:id' render={() => <Article />} />
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
