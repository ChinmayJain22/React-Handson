import React, { useState,useEffect } from 'react'
import Header from './MenuComponents'
import {
    Card, CardText, CardBody,CardSubtitle, Row, Col, CardHeader, CardFooter
} from 'reactstrap';
import CompanyDetailsComponent from './CompanyDetailsComponent';
import axios from 'axios'

function CompaniesListComponent(props) {

    const userId = 1

    const [CompanyList , setCompanyList]= useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/companies").then((res)=>{
            setCompanyList(res.data)
        })
    },[]) 

    var CompanyDetailsList = []
    CompanyList.map((company)=>{
        CompanyDetailsList.push(<CompanyDetailsComponent loggedIn={true} watch={false}
             userId={userId} 
             companyId={company.companyId}
              companyName={company.companyName} 
             description={company.description}
              price={company.currentStockPrice} />)
    })

    return (
        <div>
        
            <Row>
               {CompanyDetailsList}             
              </Row>
        </div>
    )
}

export default CompaniesListComponent;
