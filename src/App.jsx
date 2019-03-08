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
              <Route exact path='/news' render={() => <Blog />} />
              <Route exact path='/news/:id' render={() => <Article />} />
              <Redirect exact path='/' to={'home'} />
              <Route exact path='*' render={() => <h1 style={{background: '#3ab0b3', padding: '200px 0', textAlign: 'center', color: 'white', fontSize: '10vw', borderRadius: '0 0 30% 30%', boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)'}}>Page Not Found!</h1>} />
            </Switch>
          }
          <Footer />
        </div>
      </FadeIn>
    )
  }
}

export default App
