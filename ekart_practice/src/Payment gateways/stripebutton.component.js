import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './stripebutton.style.scss';


const StripeCheckoutButton = ({price , item}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_prKxczYBqJP46E17OF25KPZU00nVdxufQS'


const OnToken = token => {
    console.log(token);
    alert('payment Succesfull');
    
    
}

    return (
        <StripeCheckout
          label='Pay Now'
          name= 'EKart'
          billingAddress
          shippingAddress
          image='https://assets.dryicons.com/uploads/icon/preview/4227/small_2x_shopping_cart.png'
          description={`your total is $${price}`}
          amount={priceForStripe}
          panelLabel='pay Now'
          token={OnToken}
          stripeKey={publishableKey}
          >

          <button className="btn">Pay with card 
          <img src='https://img.icons8.com/cotton/2x/card-in-use.png' style={{height: 30}}/> </button> 

          </StripeCheckout>
    )

}

export default StripeCheckoutButton;