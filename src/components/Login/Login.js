import React from 'react'
// import './bootstrapmin.css'
import './login_custom.css'
import './login_style.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <section className="customLoginSection">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-md12">
              <div className="loginWrapper">
                <div className="logWrapCard">
                  <div className="logoTextHeaderWrap">
                    <Link to="/login">
                      {' '}
                      <img className="logImg" src="assets/img/logo.png" alt="" />{' '}
                    </Link>
                  </div>
                  <div className="loginHeadTitle">Welcome</div>
                  <div className="loginSubHeadTitle">Let’s Start</div>
                  <div className="logInputDivWrap">
                    <label> Email/Mobile </label>
                    <input type="text" className="form-control" alt="" />
                  </div>
                  <div className="logInputDivWrap">
                    <label> Password </label>
                    <input type="text" className="form-control" alt="" />
                    <div className="helpWhiteBox" style={{marginTop: "-6px"}}>
                      <Link to="/forgot">
                        <img className="" src="assets/img/question.svg" alt="" />{' '}
                      </Link>
                    </div>
                  </div>
                  <div className="customInnerRow fullWidthGrid loginSubmit">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                  <img className="tyreOne" src="assets/img/tyre.svg" alt="" />
                  <img className="tyreTwo" src="assets/img/tyre.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
