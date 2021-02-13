import React, { Component } from 'react'

 class GetUser extends Component {

    state={
        Loading:true,
        person: null
    }


   async componentDidMount(){

    const url="https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({person: data.results[0] , Loading:false})

    }


    render() {

        if(this.state.Loading){
            return <div>loading..</div>
        }

        if( !this.state.person){
            return <div>didnt get person</div>
        }


        return (
            <div>
               <div>{this.state.person.name.first}</div> 
               <img src={this.state.person.picture.large } />
            </div>
        )
    }
}

export default GetUser
