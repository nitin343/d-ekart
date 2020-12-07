import React from "react";

import { Link } from "react-router-dom";
import './check.tq.style.scss';

const Tq = () => {
  return (
    <div className="tq1">
      <h2 className="tq2">Thank You For Shopping</h2>
      <h4 className="tq3">You Oder Will Be Delivered in 7 Working Days</h4>
      <Link to="/">Continue Shopping</Link>
    </div>
  );
};

export default Tq;
