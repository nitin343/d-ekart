import React, { useState } from "react";

import { connect } from "react-redux";
import CheckoutItem from "../../Component/checkout-item/checkout-item.component";
import {
  selectCartItems,
  selectCartAmount,
} from "../../redux/cart/cart.reselect";
import { createStructuredSelector } from "reselect";
import StripeCheckoutButton from "../../Payment gateways/stripebutton.component";
import { clearItem } from "../../redux/cart/cart.action";
import "./paymentPage.scss";

import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";

import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "40ch",
      height: "8ch",
    },
  },
}));

const PaymentPage = ({ cartItems, cartAmount }) => {
  const [hidden, setHidden] = useState(false);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

 
  const open = Boolean(anchorEl);

  const id = open ? "simple-popover" : undefined;

  return (
    <div className="a">
      {hidden ? (
        <div
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      ) : (
        ""
      )}
      <h2>Complete Your Payment</h2>

      <div className="ab">
        {cartAmount ? (
          <StripeCheckoutButton
            price={cartAmount}
            item={cartItems}
            onClick={() => clearItem(cartItems)}
          />
        ) : (
          ""
        )}
      </div>
      <div className="abc">
        <Button
          className="bb"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          CAsh On Delivery
        </Button>
        <Popover
          className="pop"
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <form className={classes.root} Validate autoComplete="off" style={{
            display:'grid',gridTemplateColumns:'1fr 1fr', top: '-100px',
            margin: '30px'
          }}>
            <TextField
              required
              id="standard-required"
              label="Required"
              defaultValue="Name"
              className="text2"
            />
            <TextField
              required
              id="standard-required"
              label="Required"
              defaultValue="10-digit mobile number"
              className="text2"
            />
            <TextField
              required
              id="standard-required"
              label="Required"
              defaultValue="pincode"
              className="text2"
            />
            <TextField
              required
              id="standard-required"
              label="Required"
              defaultValue="locality"
              className="text2"
            />
            <TextField
              required
              id="standard-required"
              label="Required"
              defaultValue="Address (Area and Street)"
              className="text22"
            />
          </form>

          <Link to="/tq">
            <Button
              to="/tq"
              variant="contained"
              color="secondary"
              style={{
                height: "55px",
                width: "200px",
                margin: "20px 40%",
                background: "orangered",
              }}
              
            >
              DELIVER HERE
            </Button>
          </Link>
        </Popover>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartAmount: selectCartAmount,
});

export default connect(mapStateToProps, null)(PaymentPage);
