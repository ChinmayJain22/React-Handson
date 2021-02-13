import React, { Component } from 'react'

 class Booking extends Component {

     constructor(props) {
         super(props)
             this.handleloginclick=this.handleloginclick.bind(this);
             this.handlelogoutclick=this.handlelogoutclick.bind(this);
             this.state={isLoggedIn:false};        
         
     }

     handleloginclick(){
         this.setState({isLoggedIn:true})
     }

     handlelogoutclick(){
         this.setState({isLoggedIn: false})
     }
     
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if(isLoggedIn){
            button = <LogoutButton onclick={this.handlelogoutclick} />
        }else{
            button = <LoginButton onclick={this.handleloginclick} />
        }

        return (
            <div>
               <Greeting isLoggedIn={isLoggedIn} /> 
               {button}
            </div>
        )
    }
}
function UserGreeting(props) {
return(
    
        <h1>WelcomeBack</h1>
    
);
         
}

function GuestGreeting(props){
    return(
    
            <h1>Please sign up.</h1>
        
    )
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
       return <UserGreeting />
    }else{
        return <GuestGreeting />
    }

}


function LoginButton(props) {
    return(
        <button onClick={props.onclick}>
            Login
        </button>
    )
    
}
function LogoutButton(props) {
    return(
        <button onClick={props.onclick}>
            Logout
        </button>
    )
    
}
export default Booking;
