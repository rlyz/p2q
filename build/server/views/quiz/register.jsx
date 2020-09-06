import React, {Component} from 'react';

export default class login extends Component {
  render() {
    return (
      <div>
        <form class="register" action="/quiz/register" method="post">
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <input type="email" name="email" placeholder="email" />
          <button>Register</button>
          <p class="message">
            Already a user?<a href="../quiz/login">Login</a>
          </p>
        </form>
      </div>
    );
  }
}
