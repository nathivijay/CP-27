import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {userName: '', password: ''}

  setUserName = event => {
    this.setState({userName: event.target.value})
  }

  setPassword = event => {
    this.setState({password: event.target.value})
  }

  renderUserName = () => {
    const {userName} = this.state
    return (
      <>
        <label className="login-form-label" htmlFor="userName">
          USERNAME
        </label>
        <input
          id="userName"
          className="login-input"
          value={userName}
          placeholder="Username"
          onChange={this.setUserName}
        />
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <>
        <label className="login-form-label" htmlFor="password">
          USERNAME
        </label>
        <input
          id="password"
          className="login-input"
          value={password}
          placeholder="Password"
          onChange={this.setPassword}
        />
      </>
    )
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <div className="login-div">
        <div className="login-sub-div">
          <img
            className="website-login"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
          <form className="login-form" onSubmit={this.onSubmitForm}>
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
            <div className="input-div">{this.renderUserName()}</div>
            <div className="input-div">{this.renderPassword()}</div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
