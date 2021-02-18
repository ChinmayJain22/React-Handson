import React, { Component, Fragment, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../StyleSheets/MyStyle.css';
import axios from 'axios'

const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",

}
class Login extends Component {

  constructor(props) {
  super(props)
 

  this.state = initialState;

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit =this.handleSubmit.bind(this);

    }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  };

  validate = () => {
    let emailError = "";
    let passwordError = "";
    

    if (!this.state.password) {
      passwordError = "password is required"
    }
    if (!this.state.email) {
      emailError = "Email is Required"
    }
    if (passwordError || emailError ) {
      this.setState({ passwordError, emailError  })
      return false;
    }
    return true;
  }

  handleSubmit = event => {
    event.preventDefault();
    
    let isValid = this.validate();
    if (isValid) {
      console.log(this.state);

      this.setState(initialState) ;

      axios.post("http://localhost:8080/users",{
        email:this.state.email,
        password: this.state.password
      }).then(res=>{
        console.log(res)
        alert("Login Successfully");
        sessionStorage.setItem("userId",res.data.id)
        this.props.history.push("/company");
      }).catch(err=>{
        console.log("hgfd")
       console.log( err.response.data)
       alert("Invalid Credentials")
        
      })

    

    }
  }

  render(
  ){
    return (
  
        <div className="container" >
          <h2 >Lets Get Started By Login!</h2>
          <h3 style={{ fontSize: 12, color: "red" }}>Fields marked with * are mandatory</h3>
          
          <div style={{ fontSize: 12, color: "red" }}>{this.state.emailError}</div>
          <div style={{ fontSize: 12, color: "red" }}>{this.state.passwordError}</div>
          {/* <div  style={{ fontSize: 12, color: "red" }}>{this.state.error}</div> */}
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <label for="exampleEmail" sm={2}>Email<span style={{color:'red'}}>*</span></label>
              <Input type="email" name="email" value={this.state.email} onChange={this.handleChange} id="exampleEmail" placeholder="Enter Email" />
            </FormGroup>
            <FormGroup>
              <label for="examplePassword" sm={2}>Password<span style={{color:'red'}}>*</span></label>
              <Input type="password" name="password" value={this.state.password} id="examplePassword" onChange={this.handleChange}  placeholder="Enter a Password" />
            </FormGroup>
            <Button className="btn bg-primary" style={{color:'white'}} onClick={this.handleSubmit}>Submit</Button>
            </Form>
        </div>
    
  
    );
  }


}

export default Login;