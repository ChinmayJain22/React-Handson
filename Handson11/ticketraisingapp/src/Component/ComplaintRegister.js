
import React, { Component } from 'react'

class ComplaintRegister extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ename: '',
            complaint: ''
        };
        this.handlechange = this.handlechange.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
    }


    GenerateRandomnumber = () => {
        var RandomNumber = Math.floor(Math.random() * 100) + 1;
        this.setState({
            NumberHolder: RandomNumber

        }
        )
    }

    handlechange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handlesubmit(event) {
        var msg = 'Thanks' + this.state.ename + '\n Your Complaint was Submitted' + '\n The Transaction id :' + this.state.NumberHolder;
        alert(msg);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                    <table>
                        <tr>
                            <td colSpan="2" align="center">
                                <h1><font color="Red">Register Your Complaints Here!!</font></h1>
                            </td>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td><input type="text" name="ename" value={this.state.ename} onChange={this.handlechange}></input>  </td>
                        </tr>
                        <tr>
                            <td>Complaints:</td>
                            <td><textarea type="text" name="complaint" value={this.state.complaint} onChange={this.handlechange}  ></textarea></td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="center"><input type="submit" value="submit" onClick={this.GenerateRandomnumber} /></td>
                        </tr>
                    </table>
                </form>
            </div>
        )
    }
}

export default ComplaintRegister
