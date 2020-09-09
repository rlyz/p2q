import React, {Component} from 'react';
import {Alert, Container, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default class login extends Component {
  render() {
    const test = {width: '100%', maxWidth: '330px', padding: '15px', margin: 'auto', height: '100%'};
    return (
      <html>
        <head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
        </head>
        <div>
          <Form style={test} className="login-form" action="/quiz/home" method="post">
            <h1 className="font-weight-bold">Impossible Quiz</h1>
            <FormGroup>
              <Label>Username</Label>
              <Input type="text" name="username" placeholder="Username" />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input type="password" name="password" placeholder="Password" />
            </FormGroup>
            <Button className="btn-lg btn-block btn-dark">Log In</Button>
            <div className="text-center">
              Not Registered? <a href="../quiz/register">Register</a>
            </div>
          </Form>
          <Button
            onClick={() => {
              console.log('button clicked');
            }}
          >
            hello
          </Button>
        </div>
      </html>
    );
  }
}
