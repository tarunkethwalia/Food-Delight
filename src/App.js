import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import SignUp from './Components/SignUp/SignUp';
import LogIn from './Components/LogIn/Login';
import OrderOnline from './Components/OrderOnline/OrderOnline';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/footer';


class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="wrapper">
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/:id" component={OrderOnline} />
          <Route path="/:id" component={Cart} />
        </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
  }
}

export default App;