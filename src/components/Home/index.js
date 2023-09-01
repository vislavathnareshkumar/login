import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {islogin: false}

  loginButton = () => {
    this.setState(prevState => ({
      islogin: !prevState.islogin,
    }))
  }

  render() {
    const {islogin} = this.state

    let para
    let button
    if (islogin) {
      para = 'Welcome User'
      button = 'Logout'
    } else {
      para = 'Please Login'
      button = 'Login'
    }

    return (
      <div className="main-container">
        <div className="small-container">
          <h1 className="heading">{para}</h1>
          <button className="button" onClick={this.loginButton}>
            {button}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
