import React, { useState, useEffect, Component } from 'react'
import axios from 'axios';
import CompanyDetailsComponent from './CompanyDetailsComponent';

class WatchListComponent extends Component {



    // const [CompanyList, setCompanyList] = useState([])
    // useEffect(()=>axios.get("http://localhost:8080/watchList/1").then((res) => {
    //     setCompanyList(res.data)
    //     console.log(res)
    // }), [CompanyList]);


    constructor(props) {
        super(props)

        this.state = {
            CompanyList: []
        }
        this.handledelete = this.handledelete.bind(this)
    }


    componentDidMount() {
        this.handledelete()

    }

    handledelete() {
        axios.get("http://localhost:8080/watchList/1").then((res) => {
            console.log(res)
            this.setState({ CompanyList: res.data })
        })
    }


    onChange = (company) => {
        console.log("abcd");
        var userid = sessionStorage.getItem("userId");
        console.log(userid)
        console.log(company)
        axios.delete(`http://localhost:8080/watchList/${userid}/${company}`
        ).then((res) => {
            //  this.setState({ CompanyList: res.data })
            this.handledelete();
            alert("Removed from List Successfully!")
        })
    }

    render() {
        if (this.state.CompanyList.length == 0) {
                return (
                    <div className="container">
                        <h4>My Companies List</h4>
                        <h5>No Company Stock Prices added to Stock List</h5>
                    </div>
                )
            }else{
 return (
            <div>

                {

                    this.state.CompanyList.map((company) => {
                        console.log(company)
                        return (
                            <div>
                                <CompanyDetailsComponent onClick={() => this.onChange(company.company.companyId)}
                                    loggedIn={true} watch={true} companyId={company.company.companyId} companyName={company.company.companyName}
                                    description={company.company.description} price={company.company.currentStockPrice} />
                            </div>

                        )

                    }
                    )} </div>

            // if (this.state.CompanyList.length == 0) {
            //     return (
            //         <div className="container">
            //             <h4>My Companies List</h4>
            //             <h5>No Company Stock Prices added to Stock List</h5>
            //         </div>
            //     )
            // } else {
            //     return (
            //         <div>
            //             {CompanyDetailsList}
            //         </div>
            //     )

            // }
        )
                }
    }



}

export default WatchListComponent
