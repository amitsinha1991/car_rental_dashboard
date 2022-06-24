import React from 'react'
import $ from 'jquery'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'

const Profile = () => {
  $(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 3,
          nav: false,
        },
        1000: {
          items: 3,
          nav: true,
          loop: false,
          margin: 20,
        },
      },
    })
  })

  function openCD() {
    document.getElementById('mySideCD').style.width = '100%'
  }

  function closeCD() {
    document.getElementById('mySideCD').style.width = '0'
  }

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Profile Details</h1>
          </div>
        </section>

        <section className="customTabSection">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="driverWrapper">
                    <div className="driverImg">
                      <div className="insideDiv">
                        <img alt="" src="assets/img/user-full.png" />
                      </div>
                    </div>
                    <div className="driverDetailWrap">
                      <div className="detailHeader customDriveDetailEdit">
                        <div className="editImgWrap">
                          <img
                            alt=""
                            className="editIcon"
                            onClick={openCD}
                            src="assets/img/lefticon/edit.png"
                          />
                        </div>
                      </div>
                      <div className="personalDetailWrap">Personal Details</div>
                      <ul className="customerPersonalDetail_ul">
                        <li>
                          <div className="subtitle"> Name </div>
                          <div className="dDetail"> Mathew </div>
                        </li>
                        <li>
                          <div className="subtitle"> Surname </div>
                          <div className="dDetail"> Warner </div>
                        </li>
                        <li>
                          <div className="subtitle"> Email </div>
                          <div className="dDetail"> test1@gmail.com </div>
                        </li>
                        <li>
                          <div className="subtitle"> Contact </div>
                          <div className="dDetail"> 9123456789 </div>
                        </li>
                      </ul>
                      <div className="personalDetailWrap">Brand Logo</div>
                      <ul className="customerPersonalDetail_ul">
                        <li>
                          <div className="dDetail brandLogoProfile">
                            {' '}
                            <img
                              alt=""
                              src="assets/img/logo.png"
                              className="brandLogoProfileImg"
                            />{' '}
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="mySideCD" className="sideOpen">
        <a href="javascript:void(0)" className="closebtn" onClick={closeCD}>
          &times;
        </a>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4>Edit Profile Detail</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Sur Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Contact</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="form-group mb-4">
                        <label className="">Brand Logo</label>
                        <div className="customAddDriverIU">
                          <div id="image-preview" className="image-preview">
                            <label htmlFor="image-upload" id="image-label">
                              Upload Brand Logo
                              <img
                                alt=""
                                src="assets/img/lefticon/upload.png"
                              />
                            </label>
                            <input type="file" name="image" id="image-upload" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-footer text-right garageSubmitBtn">
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Profile
