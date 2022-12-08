import React from "react";
import './index.scss'

export default function Index() {
  return <div className="container">
    <header>
      <h1>示例的HTML</h1>
    </header>
    <nav>
      <ul className="site-nav">
        <li><a href="/">Home</a></li>
        <li><a href="/features">Features</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/support">Support</a></li>
        <li className="nav-right"><a href="/about">About</a></li>
      </ul>
    </nav>
    <main className="flex">
      <div className="column-main">
        <h1>Team collaboration done right</h1>
        <p>Team collaboration done right Team collaboration done right Team collaboration done right</p>
      </div>
      <div className="column-sidebar">
        <div className="tile">
          <form className="login-form">
            <h3>Login</h3>
            <p>
              <label htmlFor="username">Username</label><input id="username" name="username" type="text"/>
            </p>
            <p>
              <label htmlFor="password">Password</label><input id="password" name="password" type="password"/>

            </p>
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="tile centered">
          <small>Starting at</small>
          <div className="cost">
            <span className="cost-currency">$</span>
            <span className="cost-dollars">20</span>
            <span className="cost-cents">.00</span>
          </div>
          <a href="/pricing" className="cta-button">Sign up</a>
        </div>
      </div>
    </main>
  </div>
}