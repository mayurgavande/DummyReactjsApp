//import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import { ActionCreators } from './actions/profile';
import { getStore } from './utils';
import { connect } from 'react-redux';

function App(props) {
  // var add = (function(){  // closures function  
  //   var a=0;
  //   return function(){
  //   a += 1;
  //   return console.log("time",a);
    
  //   }
  //   })();
  //   add();
  //   add();
  useEffect(()=>{
    const user = getStore('user')
    if (user) {
      props.dispatch(ActionCreators.login(user));
    }
  },[])

  return (
    <div>
      <Router>
        <Header />
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register} />
            <Route path="*" component={Login} />
        </Switch>
        <Footer />
      </Router>
    </div>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

const mapStateToProps = (state) => {
  return {
    profile: state.user
  }
  
}
export default connect(mapStateToProps)(App);
