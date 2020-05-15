import React from "react";

import "./SignUp.style.scss";
import FormInput from "../form-input/form-input.component";
import { createUserProfileDocument, auth } from "../../firebase/firebase";
import CButton from "../CButton/Cbotton.component";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState({ error: " Password does not match " });
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message });
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div>
        
        <div className="sign-up">
        <div className="alert alert-warning" role="alert" 
        style={{width: 500}}>
          {this.state.error}
        </div>
          <h2 className="title">I do not have a account</h2>
          <span>Sign up with your Email and Password</span>

          <form className="signup-form" onSubmit={this.handleSubmit}>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              onChange={this.handleChange}
              label="Display Name"
              required
            />

            <FormInput
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              label="Email"
              required
            />

            <FormInput
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              label="password"
              required
            />

            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              label="Confirm Password"
              required
            />
            <CButton type="submit">SignUp</CButton>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
