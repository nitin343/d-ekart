import React from "react";
import "./App.css";
import HomePage from "./Pages/Homepage/HomePage";
import Footer from "./Pages/Footer/Footer.component";
import {  Switch, Route, useLocation } from "react-router-dom";
import ShopPage from "./Pages/ShopPage/ShopPage.component";
import SignIn from "./Pages/SignIn/SignIn.component";
import SignUp from "./Component/SignUp/SignUp.component";

import SearchBar from "./Component/SearchBar/SearchBar";
import { auth, createUserProfileDocument } from "./firebase/firebase";

import { motion, AnimatePresence } from "framer-motion";
import Sign from "./Pages/SignUp/SignUp";
import { connect } from "react-redux";
import { hidden, setUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";

import Shop from "./Pages/ShopPage/Shop.page";
import Checkout from "./Pages/checkout-page/checkout.component";
import ContactUs from "./Pages/contact-us/contact-us.component";
import Collections from "./Pages/collections/collection.routes";
import {useAlan} from "./alan ai/usealan";
import PaymentPage from "./Pages/paymentPage/payment.page";
import Tq from "./Pages/checkout231/check.tq";



class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setUser } = this.props;
  

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          });

          //  console.log(this.state);
        });
      } else {
        setUser(userAuth);
      } // createUserProfileDocument(snapShot)

      // console.log(snapShot)
    });

   
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    
    return (
    
      <div className="body">
        <SearchBar />
        <AnimatePresence>
          <Switch>
          
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={Collections} />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/signup" component={Sign} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/payments" component={PaymentPage} />
            <Route exact path="/tq" component={Tq} />
          </Switch>
        </AnimatePresence>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
  hidden: () => dispatch(hidden()),
});



export default connect(null, mapDispatchToProps)(App);
