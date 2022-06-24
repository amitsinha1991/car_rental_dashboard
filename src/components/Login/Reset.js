import React from 'react'
// import './bootstrapmin.css'
import './login_custom.css'
import './login_style.css'
import { Link } from 'react-router-dom'

const Reset = () => {
  return (
    <div>
      <section class="customLoginSection">
        <div class="container">
          <div class="row">
            <div class="col-xxl-12 col-md12">
              <div class="loginWrapper">
                <div class="logWrapCard">
                  <div class="logoTextHeaderWrap">
                    <Link to="/login">
                      {' '}
                      <img
                        class="logImg"
                        src="assets/img/logo.png"
                        alt=""
                      />{' '}
                    </Link>
                  </div>
                  <div class="loginHeadTitle">Reset Password</div>
                  <div class="logInputDivWrap">
                    <label> New Password </label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="logInputDivWrap">
                    <label> Confirm Password </label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="customInnerRow fullWidthGrid loginSubmit">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </div>
                  <img class="tyreOne" src="assets/img/tyre.svg" alt="" />
                  <img class="tyreTwo" src="assets/img/tyre.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Reset
