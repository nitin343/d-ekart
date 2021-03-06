import React from 'react';
import './SignIn.style.scss';
import FormInput from '../form-input/form-input.component';

import { Link } from 'react-router-dom';
import CButton from '../CButton/Cbotton.component';
import {auth, signInWithGoogle } from '../../firebase/firebase';


class LogIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error:''
        }
    }

    handelSubmit = async(event) => {
        event.preventDefault();

        const {email , password} = this.state;



        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '' , password: '' });
          }catch(error){
            console.log(error); 
            // alert(error.message)
            this.setState({error: error.message})
            return;
        }
    }

    handelChange = e => {
        const {value , name} = e.target;
        this.setState({[name]: value});
    };


    render() {
        return(
          <div>
          <div className="alert alert-warning" role="alert">
              {this.state.error}
          </div>
          <div className="sign-in">
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>
          
          <form onSubmit={this.handelSubmit}>
          <FormInput
          name="email"
          type="email"
          value={this.state.email}
          handelChange={this.handelChange}
          label="Email"
          
          />
          
          <FormInput
          name="password"
          type="password"
          value={this.state.password}
          handelChange={this.handelChange}
          label="Password"
          
          />
          <div className='buttons'>
          <CButton type="submit">Sign In</CButton>
          <CButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
          Google SignIn
          </CButton>
          
          </div>
          <h4 className='hlink'>Create New Account <Link to='/signup' className='haha'>   Sign Up</Link></h4>
          
          </form>
          </div>
          </div>
          )
    }
}

export default LogIn;