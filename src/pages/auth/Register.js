import React from 'react'
import {Container, Col, Form} from 'react-bootstrap'
import logo  from '../../assets/images/Vector-logo.png'
import {Formik} from "formik"
import * as Yup from "yup"
import { Link } from 'react-router-dom'

const regisSchema = Yup.object().shape({
  name: Yup.string().min(6, 'Name length must be at least 6 characters').required('Required'),
  email: Yup.string().email('Invalid email address format').required('Required'),
  password: Yup.string().min(8).required('Required')
})

const AuthValid = ({errors, handleSubmit, handleChange}) => { 
  return (
    <>
    
    <Form noValidate onSubmit={handleSubmit} className="mt-5 gap-2" >
      
      <Form.Group  className ="mb-3 mx-auto w-50" controlId="formatBasicUsername">
        <Form.Control name="name" className="input-login" onChange={handleChange} type="text" placeholder="Name" isInvalid={!!errors.name} />
        <Form.Control.Feedback className="text-start" type="invalid"></Form.Control.Feedback>
      </Form.Group>
      
      <Form.Group  className ="mb-3 mx-auto w-50" controlId="formatBasicEmail">
        <Form.Control name="email" className="input-login" onChange={handleChange} type="email" placeholder="Email" isInvalid={!!errors.email} />
        <Form.Control.Feedback className="text-start" type="invalid">Invalid email format</Form.Control.Feedback>
      </Form.Group>
      
      <Form.Group className="mb-3 mx-auto w-50" controlId="formatBasicPassword">
        <Form.Control name="password" className="input-login" onChange={handleChange} type="password" placeholder="Password" isInvalid={!!errors.password} />
        <Form.Control.Feedback className="text-start" type="invalid">Password must be at least 8 characters</Form.Control.Feedback>
      </Form.Group>
    </Form>
    
    <div>
      <button className="btn btn-lg button-auth mt-5 w-50">Confirm</button>
    </div>

    <div className="text-center my-5">
        Already have a Negozio account? Let's <Link to="/login" className="fw-bold text-decoration-none text">Login</Link>
    </div>
    </>
  )
}

function Register() {
  return (
    <>
    <Container>
      <Col className="m-5 p-5 text-center justify-content-center align-items-center">
        <div className="image-fluid d-flex justify-content-center gap-3">
          <img src={logo} alt="logo" />
          <span className="my-3">Negozio</span>
        </div>

        <h4 className="my-5">Please sign up with your account</h4>

        <div>
          <button className="btn btn-lg button-role customer text-center">Customer</button>
          <Link to="/registerseller" className="text-decoration-none">
          <button className="btn btn-lg button-role text-center">Seller</button>
          </Link>
        </div>

        <Formik initialValues={{name: '', email: '', password: ''}} validationSchema={regisSchema}>
            {(props) =><AuthValid {...props} />}
        </Formik>
      </Col>
    </Container>
    </>
  )
}

export default Register