import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import store from './store/store';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import NotFound from './components/layout/NotFound';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Posts}/>
            <Route exact path="/posts/:id" component={Post}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
