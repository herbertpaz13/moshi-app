import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';


import './App.css';

import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import PicturePage from './pages/Picture';
import NavigationPage from './pages/Navigation';
import DeliveryPage from './pages/Delivery';
import PenPage from './pages/Pen';
import ArtPage from './pages/Art';
import GamePage from './pages/Game';
import RoomPage from './pages/Room';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/navigate"
            }}
          />
        )
      }
    />
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
				    <div className="navbar-brand">
					    <span className="navbar-item">
                <i key="user-icon" className="material-icons">face</i>
                <span key="name" className="user-name"> Moshi </span>
					    </span>
			  	  </div>
				    <div className="navbar-item item-end">
              <Link to="/navigate">
                <span  className="icon exit">
                  <i className="material-icons">exit_to_app</i>
                </span>
              </Link> 
				    </div>
			    </nav>
          <section className="hero is-fullheight">
            {/* <!-- Hero content: will be in the middle --> */}
            <div className="hero-body">
              <div className="container has-text-centered">
                <Route exact path="/(login)?"
                  component={
                    () => 
                      <LoginPage 
                        login={() => {
                        }}
                      />
                  }
                >
                </Route>
                <PrivateRoute path="/home" component={HomePage}></PrivateRoute>
                <PrivateRoute path="/picture" component={PicturePage}></PrivateRoute>
                <PrivateRoute path="/navigate" component={NavigationPage}></PrivateRoute>
                <PrivateRoute path="/delivery" component={DeliveryPage}></PrivateRoute>
                <PrivateRoute path="/pen" component={PenPage}></PrivateRoute>
                <PrivateRoute path="/art" component={ArtPage}></PrivateRoute>
                <PrivateRoute path="/game" component={GamePage}></PrivateRoute>
                <PrivateRoute path="/room" component={RoomPage}></PrivateRoute>
              </div>
            </div>
          </section>
        </div>
      </Router>
    )

  }
}

export default App;
