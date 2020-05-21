import React from 'react';
import './App.css';
import HomePage from './Pages/Homepage/HomePage';
import Footer from './Pages/Footer/Footer.component';
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import ShopPage from './Pages/ShopPage/ShopPage.component';
import SignIn from './Pages/SignIn/SignIn.component';
import SignUp from './Component/SignUp/SignUp.component';

import SearchBar from './Component/SearchBar/SearchBar';
import { auth, createUserProfileDocument } from './firebase/firebase';

import {motion, AnimatePresence} from 'framer-motion';
import Sign from './Pages/SignUp/SignUp';
import { connect } from 'react-redux';
import { setUser } from './redux/user/user.actions';
import Shop from './Pages/ShopPage/Shop.page';


class App extends React.Component  {

 
  unsubscribeFromAuth = null


  componentDidMount(){
    const {setUser} = this.props;

   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
     
        setUser({
           id: snapShot.id,
           ...snapShot.data()
         })
     
      //  console.log(this.state);
       
      });
      
    }else{
     setUser(userAuth)
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
    <SearchBar />
    <AnimatePresence exitBeforeEnter>
    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/shop' component={Shop} />
    <Route exact path='/signIn' component={SignIn} />
    <Route exact path='/signup' component={Sign} />
    </Switch>
    </AnimatePresence>
     <Footer />
   </BrowserRouter>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setUser : user => dispatch(setUser(user))
})

export default connect(null, mapDispatchToProps)(App);