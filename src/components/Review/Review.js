import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

const Review = () => {
  useEffect(() => {
    togReply()
    togReply1()
  }, [])

      function togReply()
     {
        var element = document.getElementById("postBox");
        element.classList.toggle("boxOn");
     }

     function togReply1()
     {
        var element = document.getElementById("postBox1");
        element.classList.toggle("boxOn");
     }

  const css = `
  .sidebar-menu li:nth-child(13)
  {
  position: relative;
  background-color: #de3255;
  }
  .sidebar-menu li:nth-child(13) a img:first-child 
  {
  display:none;
  }
  .sidebar-menu li:nth-child(13) a img:nth-child(2)
  {
  display:block;
  }
  .sidebar-menu li:nth-child(13) a span
  {
  color:#fff;
  }
  `

  return (
    <div>
      <style>{css}</style>
      <Header />
      <Sidebar />
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Review</h1>
          </div>
        </section>
        <section className="section customReview">
          <div className="section-body">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="commentRplyPdiv">
                      <div className="commentWrap">
                        <div className="cmntImgNameDateWrap">
                          <div className="cmntImg">
                            <Link to="/customerdetails">
                              {' '}
                              <img
                                src="assets/img/user.png"
                                className=""
                                alt=""
                              />{' '}
                            </Link>
                          </div>
                          <div className="cNameDateSpan">
                            <div className="cNameStarDateTimeWrap">
                              <span className="cmntName"> Steve Smith</span>
                              <div>
                                <i className="rateIstarRpage fas fa-star"></i>
                                <i className="rateIstarRpage fas fa-star"></i>
                                <i className="rateIstarRpage fas fa-star"></i>
                                <i className="rateIstarRpage fas fa-star"></i>
                                <i className="rateIstarRpage fas fa-star"></i>
                              </div>
                              <div className="reviewProductImage">
                                <img src="assets/img/car18.png" alt="" />
                              </div>
                            </div>
                            <div className="fullCommentReplyWrap">
                              <h2 className="cmntTitle">
                                {' '}
                                Mercedes Benz AMG GT - JR4120{' '}
                                <span className="cmntdate"> (12-1-2022) </span>{' '}
                                <span> | </span>{' '}
                                <span className="cmntdate cmntTime"> 12:30pm </span>{' '}
                              </h2>
                              <p className="cmntP">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Praesent et est sollicitudin
                                nisl suscipit imperdiet. Aenean ornare mattis
                                eros, at faucibus erat. Praesent congue nunc vel
                                mi pharetra, hendrerit cursus sapien ultricies.
                                Suspendisse felis purus, volutpat sed consequat
                                vel, aliquam pellentesque nunc.
                              </p>
                              <div className="commentRplyWrap">
                                <Link to="" className="rplyBtn" onClick={togReply}>
                                  <img
                                    alt=""
                                    src="assets/img/lefticon/rply.png"
                                  />{' '}
                                  Reply
                                </Link>
                                <div id="postBox" className="postDiv">
                                  <input
                                    type="search"
                                    className="form-control form-control-sm"
                                    placeholder=""
                                  />
                                  <div className="postBtnDiv">
                                    <button className="btn btn-primary postBtn">
                                      Submit
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="commentRplyPdiv">
                      <div className="commentWrap">
                        <div className="cmntImgNameDateWrap">
                          <div className="cmntImg">
                            <Link to="/customerdetails">
                              {' '}
                              <img
                                src="assets/img/users/user-3.png"
                                className=""
                                alt=''
                              />{' '}
                            </Link>
                          </div>
                          <div className="cNameDateSpan">
                            <div className="cNameStarDateTimeWrap">
                              <span className="cmntName"> James Doe </span>
                              <div>
                                <i className="rateIstarRpage fas fa-star"></i>
                                <i className="rateIstarRpage fas fa-star"></i>
                                <i className="rateIstarRpage fas fa-star"></i>
                                <i className="rateIstarRpage fas fa-star"></i>
                                <i className="rateIstarRpage fas fa-star"></i>
                              </div>
                              <div className="reviewProductImage">
                                <img src="assets/img/car19.png" alt='' />
                              </div>
                            </div>
                            <div className="fullCommentReplyWrap">
                              <h2 className="cmntTitle">
                                {' '}
                                Aston Martin Vanquish - JR4227{' '}
                                <span className="cmntdate"> (12-1-2022) </span>{' '}
                                <span> | </span>{' '}
                                <span className="cmntdate cmntTime"> 12:30pm </span>{' '}
                              </h2>
                              <p className="cmntP">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Praesent et est sollicitudin
                                nisl suscipit imperdiet. Aenean ornare mattis
                                eros, at faucibus erat. Praesent congue nunc vel
                                mi pharetra, hendrerit cursus sapien ultricies.
                                Suspendisse felis purus, volutpat sed consequat
                                vel, aliquam pellentesque nunc.
                              </p>
                              <div className="commentRplyWrap">
                                <Link className="rplyBtn" onClick={togReply}>
                                  <img src="assets/img/lefticon/rply.png" alt=''/>{' '}
                                  Reply
                                </Link>
                                <div id="postBox" className="postDiv">
                                  <input
                                    type="search"
                                    className="form-control form-control-sm"
                                    placeholder=""
                                  />
                                  <div className="postBtnDiv">
                                    <button className="btn btn-primary postBtn">
                                      Submit
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Review
