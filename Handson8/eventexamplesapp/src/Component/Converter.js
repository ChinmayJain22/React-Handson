import React, { Component } from 'react'

export class Converter extends Component {

    constructor(){
        super();
        this.state={
            amount:1,
            currency:"",
            TotalAmt:1
        };
        this.handlechange=this.handlechange.bind(this);
        this.handlesubmit=this.handlesubmit.bind(this);

    }

     CurrencyChangeMethod=()=>{

        var totalamt= this.state.amount*80;
        this.setState(
            {TotalAmt:totalamt}
        )
    }
    handlechange=(event)=>{
        this.setState({[event.target.name] : event.target.value})
    }

    handlesubmit(event){
        var msg = 'converting to ' +  this.state.currency + 'Amount is ' + this.state.TotalAmt;
        alert(msg);
        event.preventdefault();
    }
    
    render() {
        return (
            <div >
                <form  onSubmit={this.handlesubmit}>
                    <h1><font color="Green">Currency Convertor!!</font></h1>
                    <table style={{ paddingLeft: "500px" }} >
                        <tr>
                            <td>Amount</td>
                            <td><input type="text" name="amount" value={this.state.amount} onChange={this.handlechange}   /></td>
                        </tr>
                        <tr>
                            <td>Currency</td>
                            <td><textarea type="text-area" name="currency" value={this.state.currency} onChange={this.handlechange}/></td>
                        </tr>
                        <tr>
                            <td colSpan="5" align="center"><input type="submit" value="submit" onClick={this.CurrencyChangeMethod} />  </td>
                        </tr>
                    </table>
                </form>
            </div>
        )
    }
}

export default Converter;
