import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'


const Forma = () =>
<div className="form-container">
  <Form className="form">
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
        <Form.Control className="email" type="email" placeholder="Email"/>
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"/>
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Reset password" />
    </Form.Group>
    <Button variant="info" type="submit">Submit!</Button>
  </Form>
</div>

export default Forma
