import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'

const Review = () => {
  useEffect(() => {
    // togReply()
    // togReply1()
  }, [])

  //     function togReply()
  //    {
  //       var element = document.getElementById("postBox");
  //       element.classList.toggle("boxOn");
  //    }

  //    function togReply1()
  //    {
  //       var element = document.getElementById("postBox1");
  //       element.classList.toggle("boxOn");
  //    }

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
      <div class="main-content">
        <section class="section">
          <div class="section-header">
            <h1>Review</h1>
          </div>
        </section>
        <section class="section customReview">
          <div class="section-body">
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="card-body">
                    <div class="commentRplyPdiv">
                      <div class="commentWrap">
                        <div class="cmntImgNameDateWrap">
                          <div class="cmntImg">
                            <a href="customer_detail.php">
                              {' '}
                              <img
                                src="assets/img/user.png"
                                class=""
                                alt=""
                              />{' '}
                            </a>
                          </div>
                          <div class="cNameDateSpan">
                            <div class="cNameStarDateTimeWrap">
                              <span class="cmntName"> Steve Smith</span>
                              <div>
                                <i class="rateIstarRpage fas fa-star"></i>
                                <i class="rateIstarRpage fas fa-star"></i>
                                <i class="rateIstarRpage fas fa-star"></i>
                                <i class="rateIstarRpage fas fa-star"></i>
                                <i class="rateIstarRpage fas fa-star"></i>
                              </div>
                              <div class="reviewProductImage">
                                <img src="assets/img/car18.png" alt="" />
                              </div>
                            </div>
                            <div class="fullCommentReplyWrap">
                              <h2 class="cmntTitle">
                                {' '}
                                Mercedes Benz AMG GT - JR4120{' '}
                                <span class="cmntdate"> (12-1-2022) </span>{' '}
                                <span> | </span>{' '}
                                <span class="cmntdate cmntTime"> 12:30pm </span>{' '}
                              </h2>
                              <p class="cmntP">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Praesent et est sollicitudin
                                nisl suscipit imperdiet. Aenean ornare mattis
                                eros, at faucibus erat. Praesent congue nunc vel
                                mi pharetra, hendrerit cursus sapien ultricies.
                                Suspendisse felis purus, volutpat sed consequat
                                vel, aliquam pellentesque nunc.
                              </p>
                              <div class="commentRplyWrap">
                                <a class="rplyBtn" onclick="togReply()">
                                  <img
                                    alt=""
                                    src="assets/img/lefticon/rply.png"
                                  />{' '}
                                  Reply
                                </a>
                                <div id="postBox" class="postDiv">
                                  <input
                                    type="search"
                                    class="form-control form-control-sm"
                                    placeholder=""
                                  />
                                  <div class="postBtnDiv">
                                    <button class="btn btn-primary postBtn">
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
                    <div class="commentRplyPdiv">
                      <div class="commentWrap">
                        <div class="cmntImgNameDateWrap">
                          <div class="cmntImg">
                            <a href="customer_detail.php">
                              {' '}
                              <img
                                src="assets/img/users/user-3.png"
                                class=""
                              />{' '}
                            </a>
                          </div>
                          <div class="cNameDateSpan">
                            <div class="cNameStarDateTimeWrap">
                              <span class="cmntName"> James Doe </span>
                              <div>
                                <i class="rateIstarRpage fas fa-star"></i>
                                <i class="rateIstarRpage fas fa-star"></i>
                                <i class="rateIstarRpage fas fa-star"></i>
                                <i class="rateIstarRpage fas fa-star"></i>
                                <i class="rateIstarRpage fas fa-star"></i>
                              </div>
                              <div class="reviewProductImage">
                                <img src="assets/img/car19.png" />
                              </div>
                            </div>
                            <div class="fullCommentReplyWrap">
                              <h2 class="cmntTitle">
                                {' '}
                                Aston Martin Vanquish - JR4227{' '}
                                <span class="cmntdate"> (12-1-2022) </span>{' '}
                                <span> | </span>{' '}
                                <span class="cmntdate cmntTime"> 12:30pm </span>{' '}
                              </h2>
                              <p class="cmntP">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Praesent et est sollicitudin
                                nisl suscipit imperdiet. Aenean ornare mattis
                                eros, at faucibus erat. Praesent congue nunc vel
                                mi pharetra, hendrerit cursus sapien ultricies.
                                Suspendisse felis purus, volutpat sed consequat
                                vel, aliquam pellentesque nunc.
                              </p>
                              <div class="commentRplyWrap">
                                <a class="rplyBtn" onclick="togReply()">
                                  <img src="assets/img/lefticon/rply.png" />{' '}
                                  Reply
                                </a>
                                <div id="postBox" class="postDiv">
                                  <input
                                    type="search"
                                    class="form-control form-control-sm"
                                    placeholder=""
                                  />
                                  <div class="postBtnDiv">
                                    <button class="btn btn-primary postBtn">
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
