import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Button,Card,Form, Container, Row, Col} from "react-bootstrap";
import "./login.css"
import { Link } from 'react-router-dom'


export default function Login() {
  return (
    
    <div className="custom-background">
        <div className="measures">
        
        <Container fluid >
            <Row className="d-flex justify-content-center align-items-center">
                <Col className="col-md-3 align-items-left" >
            <Card style={{ width: '20rem', padding:'30px'}}>
                <Card.Body style={{ justify: 'start' }}>
                

                    <Card.Title>
                       <h1 > Login</h1>
                    </Card.Title>

                    <Form className="d-flex justify-content-start">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Your Email..."/>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group>

                        </Form.Group>
                    </Form>
                    
                    <Button className="mb-3 btn-md " variant="outline-secondary" >  
                       <Link to="/Dashboard"> Login
                                </Link>
                        </Button>
                    <br/>
                    <Card.Text>
                        <p>
                            <Link to="/Register" > Don't have an account? Sign Up </Link> </p>
                    </Card.Text>

                    <Card.Text>
                        <p>
                           <Link to="/"> Forgot your password? Reset </Link> </p>
                    </Card.Text>

                </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
        
        </div>
    </div>

  )
}
