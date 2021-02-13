import React, { Component } from 'react'

const initialState={
    ename: "",
    email: "",
    password: "",
    enameError: "",
    emailError: "",
    passwordError:""

}

class Registers extends Component {

    constructor(props){
        super(props);
       this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

        
        
    

    handleChange=(event)=>{
        const isCheckbox = event.target.type === "Checkbox"
                this.setState({ [event.target.name] : isCheckbox
                    ?event.target.checked
                       :  event.target.value });
    };


    validate = () => {
        let enameError = "";
        let emailError = "";
         let passwordError = "";

        if(this.state.ename.length<5){
            enameError="Name should have atleast 5 characters";
        }
        if(this.state.password.length<8){
            passwordError="Password should have atleast 8 characters";
            alert(passwordError);
        }

        if (!this.state.email.includes("@")) {
            emailError = "invalid email";
        }
        if (emailError || enameError || passwordError) {
            this.setState({ emailError,enameError, passwordError })
            return false;
        }
        
        return true;
    };

    handleSubmit=event=> {
        event.preventDefault();
        const isValid = this.validate();
        if  (isValid) {
            console.log(this.state);


            this.setState(initialState);
        }
    };



    render() {
        return (
        
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h1><font color="Red">Register Here!!</font></h1> 
                    </div>
                    <div> 
                        <input  name="ename" placeholder="ename" value={this.state.ename} onChange={this.handleChange} />
                        <div style={{ fontSize: 12, color: "red" }}>{this.state.enameError}</div>

                    </div>
                    <div>
                        <input type="password"  name="password" placeholder="password" value={this.state.password} onChange={this.handleChange}  />
                        <div style={{ fontSize: 12, color: "red" }}>{this.state.passwordError}</div>

                    </div>
                    <div>
                        <input  name="email" placeholder="email" value={this.state.email} onChange={this.handleChange}  />
                        <div style={{ fontSize: 12, color: "red" }}>{this.state.emailError}</div>

                    </div>

                    <button type="submit">submit</button>
                </form>
            
        )
    }

}
export default Registers;
