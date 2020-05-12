import React from 'react';
import './App.css';
import Search from './Component/SearchBar/SearchBar';
import HomePage from './Pages/Homepage/HomePage';
import Footer from './Pages/Footer/Footer.component';
import { BrowserRouter, Switch, Route } from "react-router-dom";



class App extends React.Component {
  render(){

    return(
    <div className="body">
      
     <Search />
     <BrowserRouter>
     <Switch>
      <Route exact path='/' component={HomePage} />
     </Switch>
   </BrowserRouter>
     
     <Footer />
    </div>
    )
  }
}

export default App;