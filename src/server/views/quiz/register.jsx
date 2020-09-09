import React, {Component} from 'react';
import {Container, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default class login extends Component {
  render() {
    const test = {width: '100%', maxWidth: '330px', padding: '15px', margin: 'auto', height: '100%'};
    return (
      <html>
        <head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
        </head>
        <div>
          <Form style={test} class="register" action="/quiz/register" method="post">
            <h1 className="font-weight-bold">Register Here</h1>
            <FormGroup>
              <Label>Username</Label>
              <Input type="text" name="username" placeholder="username" />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input type="password" name="password" placeholder="password" />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" name="email" placeholder="email" />
            </FormGroup>
            <Button className="btn-lg btn-dark btn-block">Register</Button>
            <div class="text-center">
              Already a user?<a href="../quiz/login">Login</a>
            </div>
          </Form>
        </div>
      </html>
    );
  }
}
