import React from 'react';
import './App.css';
import { BrowserRouter as Router ,Route ,Switch } from 'react-router-dom';
import Header from './component/header/Header';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import AdminLayout from './layouts/Admin.js';

const App = (props) => {
  return (    
    <Router>
      <Switch>
        <Route path="/" exact component={Header}/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/admin" render={ (props) => <AdminLayout {...props} /> } />
      </Switch>
    </Router>
  )
}

export default App

