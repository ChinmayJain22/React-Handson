import React, { Component } from 'react'
import { Card, CardText, CardBody, Row, Col, CardHeader, CardFooter } from 'reactstrap';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function CompanyDetailsComponent(props) {

    console.log(props, "hi")
        if (props.loggedIn) {
            if (props.watch) {
                return (     
                    <div className="container">
                        
                        <Col sm={6} >
                            <Card className="my-3">
                                <CardHeader>{props.companyName}</CardHeader>
                                <CardBody>
    
                                    <CardText>{props.description}</CardText>
                                </CardBody>
                                <CardFooter className="text-muted">Today's Price : ${props.price}
                                    <button className="btn bg-danger" onClick={()=>props.onClick(props.companyId)}>Remove</button>
                                </CardFooter>
                            </Card>
                        </Col>
    
                    </div>
                )
            } else {
                return (
    
                    <Row>
                        <Col sm={6} >
                            <Card className="my-3">
                                <CardHeader>{props.companyName}</CardHeader>
                                <CardBody>
                                    <CardText>{props.description}</CardText>
                                </CardBody>
                                <CardFooter className="text-muted">Today's Price : ${props.price}
                                    <button  className="ml-auto btn bg-danger text-white" onClick={()=>{
                                axios.post("http://localhost:8080/watchList",{
                                    userId: props.userId,
                                    companyId: props.companyId
                                }).then((res)=>{
                                    alert("Successfully added to the watchlist")
                                })
                                }}>Watch</button>
    
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                )
            }
        }
    
        else {
            return (
                <div>
                    <header>{props.companyName}</header>
                    <p>{props.description}</p>
                    <footer>Today's Price : ${props.price}</footer>
                </div>
            )
        }


}

export default CompanyDetailsComponent;
