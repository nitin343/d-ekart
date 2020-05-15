import React from 'react';
import './App.css';
import HomePage from './Pages/Homepage/HomePage';
import Footer from './Pages/Footer/Footer.component';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ShopPage from './Pages/ShopPage/ShopPage.component';
import SignIn from './Pages/SignIn/SignIn.component';
import SignUp from './Component/SignUp/SignUp.component';

import SearchBar from './Component/SearchBar/SearchBar';
import { auth, createUserProfileDocument } from './firebase/firebase';



class App extends React.Component  {

  constructor() {
    super();
    this.state = {
      User: null,
     
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
       this.setState({
         User:{
           id: snapShot.id,
           ...snapShot.data()
         }
       })
       console.log(this.state);
       
      });
      
    }else{
     this.setState({User: userAuth })
       }   // createUserProfileDocument(snapShot)  


      // console.log(snapShot)
    })
  }

 

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render(){

    return(
    <div className="body">
      
  
    <BrowserRouter>
    <SearchBar  User={this.state.User}/>
     <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/signIn' component={SignIn} />
      <Route exact path='/signup' component={SignUp} />
     </Switch>
     <Footer />
   </BrowserRouter>
    </div>
    )
  }
}

export default App;