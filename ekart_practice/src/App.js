import React from 'react';
import './App.css';
import Search from './Component/SearchBar/SearchBar';
import HomePage from './Pages/Homepage/HomePage';
import Footer from './Pages/Footer/Footer.component';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ShopPage from './Pages/ShopPage/ShopPage.component';



class App extends React.Component {
  render(){

    return(
    <div className="body">
      
    <BrowserRouter>
    <Search />
     <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
     </Switch>
     <Footer />
   </BrowserRouter>
     
    </div>
    )
  }
}

export default App;