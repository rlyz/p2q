import React, {Component} from 'react';

export default class login extends Component {
  render() {
    return (
      <div>
        <form class="login" action="/quiz/home" method="post">
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <button>Login</button>
          <p class="message">
            Not Registered? <a href="../quiz/register">Register</a>
          </p>
        </form>
      </div>
    );
  }
}
