import React, { Component } from "react";
import FadeIn from "react-fade-in";
import { Route, Switch, Redirect } from "react-router-dom";
import { withFirestore } from "react-redux-firebase";

import {
  Admin,
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
  Cloud
} from "pages";

import { TabInfo } from "pages/Admin/tabs";
const collections = TabInfo.map(tab => tab.ref.collection);

import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      database: {}
    };

    props.firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const { isAnonymous, uid } = user;
        this.setState({ user: { uid, isAnonymous } });

        collections.forEach(collection => {
          this.props.firestore.collection(collection).onSnapshot(doc => {
            this.props.firestore
              .collection(collection)
              .get()
              .then(querySnapshot => {
                const data = [];
                querySnapshot.forEach(doc => {
                  data.push(doc.data());
                });
                const { database } = this.state;
                database[collection] = data;
                this.setState({ database });
              })
              .catch(function(error) {
                console.log("Error getting documents: ", error);
              });
          });

          this.props.firestore
            .collection(collection)
            .get()
            .then(querySnapshot => {
              const data = [];
              querySnapshot.forEach(doc => {
                data.push(doc.data());
              });
              const { database } = this.state;
              database[collection] = data;
              this.setState({ database });
            })
            .catch(function(error) {
              console.log("Error getting documents: ", error);
            });
        });
      } else {
        this.setState({ user: null });
      }
    });
    props.firebase.auth().signInAnonymously();
  }

  render() {
    const { database } = this.state;
    return (
      <FadeIn>
        <div className="AppWrapper">
          <Header />
          {
            <Switch>
              <Route exact path="/admin" render={() => <Admin database={database} />} />
              <Route exact path="/home" render={() => <Home />} />
              <Route exact path="/about-us" render={() => <About database={database} />} />
              <Route exact path="/stories" render={() => <Stories />} />
              <Route exact path="/vehicles" render={() => <Vehicles />} />
              <Route exact path="/careers" render={() => <Careers />} />
              <Route exact path="/cloud" render={() => <Cloud />} />
              <Route exact path="/automation" render={() => <Cloud />} />
              <Route exact path="/transformation" render={() => <Cloud />} />
              <Route
                path="/contact-us"
                render={({ match }) => <Contact match={match} />}
              />
              <Route exact path="/services" render={() => <About />} />
              <Route exact path="/news" render={() => <Blog database={database} />} />
              <Route exact path="/news/:articleId" render={(props) => <Article {...props} database={database} />} />
              <Redirect exact path="/" to={"home"} />
              <Route
                exact
                path="*"
                render={() => (
                  <h1
                    style={{
                      background: "#3ab0b3",
                      padding: "200px 0",
                      textAlign: "center",
                      color: "white",
                      fontSize: "10vw",
                      borderRadius: "0 0 30% 30%",
                      boxShadow: "0 0 20px rgba(0, 0, 0, 0.4)"
                    }}
                  >
                    Page Not Found!
                  </h1>
                )}
              />
            </Switch>
          }
          <Footer />
        </div>
      </FadeIn>
    );
  }
}

export default withFirestore(App);
