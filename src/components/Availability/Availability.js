import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

const Availability = () => {

    const css = `
    .logo-txt 
{
	width: 100%;
	display: flex;
	margin-bottom: 30px;
}

.logo-txt img 
{
	margin-right: 15px;
	width: auto !important;
	height: 50px;
	margin-top: 5px;
}

.logo-txt .name 
{
    width: 85%;
    font-size: 15px;
    color: #161821;
    line-height: 30px;
}

.logo-txt .name span 
{
    display: block;
    font-family: 'Lab Grotesque' !important;
    font-size: 30px;
	font-weight: 600;
}

.rating 
{
    font-family: 'Lab Grotesque' !important;
    width: 15%;
    text-align: right;
    float: right;
}

.rating img 
{
    width: 20px !important;
    display: inline-block !important;
    margin-right: 0px;
    height: auto;
    vertical-align: text-bottom;
}

.card-car 
{
    position: absolute;
    bottom: 5%;
    right: -20%;
    width: 70%;
    z-index: 9;
}

.car-card ul li img 
{
    height: 20px;
    display: inline-block !important;
    width: auto !important;
    vertical-align: sub;
    margin-top: 2px;
    margin-right: 5px;	
}

.car-card ul li:last-child
{
	width:160px;
}

.bookingWrapperTT 
{
    display: flex;
}

.sidebar-menu li:nth-child(3)
{
	position: relative;
    background-color: #de3255;
}

.sidebar-menu li:nth-child(3) a img:first-child 
{
    display:none;
}

.sidebar-menu li:nth-child(3) a img:nth-child(2)
{
    display:block;
}

.sidebar-menu li:nth-child(3) a span
{
    color:#fff;
}

.sidebar-menu li.dropdown ul.dropdown-menu li:nth-child(3) 
{
	background-color: #fff;
}


@media only screen and (max-width: 1500px)
{
	.car-txt 
	{
		padding: 15px 5px;
	}
}
    `
  return (
    <div>
        <style>{css}</style>
      <Header />
      <Sidebar />
      <div class="main-content">
      <section className="section">
        <div className="section-header">
          <h1>Availability</h1>
        </div>
      </section>

      <section className="customTabSection">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <ul className="nav nav-pills" id="myTab3" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#t1"
                      role="tab"
                      aria-controls="t1"
                      aria-selected="true"
                    >
                      Ferrari
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#t2"
                      role="tab"
                      aria-controls="t2"
                      aria-selected="false"
                    >
                      Lamborghini
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#t3"
                      role="tab"
                      aria-controls="t3"
                      aria-selected="false"
                    >
                      Mercedes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#t4"
                      role="tab"
                      aria-controls="t4"
                      aria-selected="false"
                    >
                      BMW
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#t5"
                      role="tab"
                      aria-controls="t5"
                      aria-selected="false"
                    >
                      Audi
                    </a>
                  </li>
                </ul>

                <div
                  className="tab-content customCarTabList"
                  id="myTabContent2"
                >
                  <div
                    className="tab-pane fade show active"
                    id="t1"
                    role="tabpanel"
                    aria-labelledby="t1"
                  >
                    <div className="row">
                      <div className="col-md-6 mt20">
                        <div className="car-card">
                          <div className="car-txt">
                            <div className="logo-txt">
                              <img alt="" src="assets/img/ccard/ferari.png" />
                              <div className="name">
                                Ferari<span>California</span>
                              </div>
                            </div>
                          </div>
                          <ul>
                            <li>
                              <span> Plate No </span>
                              <img
                                alt="image"
                                src="assets/img/ccard/plateNum.png"
                                className=""
                              />{" "}
                              <strong>J92450</strong>
                            </li>
                            <li>
                              <span> Time </span>
                              <img
                                alt=""
                                src="assets/img/ccard/time.png"
                              />{" "}
                              <strong>12.30pm</strong>
                            </li>
                            <li>
                              <span>Day </span>
                              <div className="bookingWrapperTT">
                                <img alt="" src="assets/img/ccard/cald.png" />
                                <div className="tooltip">
                                  <strong> Fri, Dec 10, 2021 </strong>
                                  <div className="tooltiptext bookingPersonWrapper">
                                    <div className="bpWrap">
                                      <h2> Booking Person </h2>
                                      <div className="bookingPerson">
                                        {" "}
                                        David
                                      </div>
                                    </div>
                                    <div className="dpWrap">
                                      <h2> Delivering Person </h2>
                                      <div className="deliveringPerson">
                                        {" "}
                                        Haider
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="card-car">
                            <div className="caro-img">
                              <img
                                alt=""
                                src="assets/img/ccard/banner-2.png"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mt20">
                        <div className="car-card">
                          <div className="car-txt">
                            <div className="logo-txt">
                              <img alt="" src="assets/img/ccard/ferari.png" />
                              <div className="name">
                                Ferari<span>California</span>
                              </div>
                            </div>
                          </div>
                          <ul>
                            <li>
                              <span> Plate No </span>
                              <img
                                alt=""
                                src="assets/img/ccard/plateNum.png"
                                className=""
                              />{" "}
                              <strong>J92450</strong>
                            </li>
                            <li>
                              <span> Time </span>
                              <img
                                alt=""
                                src="assets/img/ccard/time.png"
                              />{" "}
                              <strong>12.30pm</strong>
                            </li>
                            <li>
                              <span>Day </span>
                              <div className="bookingWrapperTT">
                                <img alt="" src="assets/img/ccard/cald.png" />
                                <div className="tooltip">
                                  <strong> Fri, Dec 10, 2021 </strong>
                                  <div className="tooltiptext bookingPersonWrapper">
                                    <div className="bpWrap">
                                      <h2> Booking Person </h2>
                                      <div className="bookingPerson">
                                        {" "}
                                        David
                                      </div>
                                    </div>
                                    <div className="dpWrap">
                                      <h2> Delivering Person </h2>
                                      <div className="deliveringPerson">
                                        {" "}
                                        Haider
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="card-car">
                            <div className="caro-img">
                              <img
                                alt=""
                                src="assets/img/ccard/banner-2.png"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="t2"
                    role="tabpanel"
                    aria-labelledby="t2"
                  >
                    No data found
                  </div>
                  <div
                    className="tab-pane fade"
                    id="t3"
                    role="tabpanel"
                    aria-labelledby="t3"
                  >
                    No data found
                  </div>
                  <div
                    className="tab-pane fade"
                    id="t4"
                    role="tabpanel"
                    aria-labelledby="t4"
                  >
                    No data found
                  </div>
                  <div
                    className="tab-pane fade"
                    id="t5"
                    role="tabpanel"
                    aria-labelledby="t5"
                  >
                    No data found
                  </div>
                </div>

                <div
                  className="tab-content pt-2 customCarTabList"
                  id="borderedTabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="t1"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  ></div>

                  <div
                    className="tab-pane fade"
                    id="t2"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="automobile-main-content">
                      <div className="automobile-main-section automobile-car-listfull">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="carNameSideCarWrapper">
                                <div className="customRightCarWrapper">
                                  <img
                                    alt=""
                                    src="assets/img/car16.png"
                                    className="automobile-car-list-img"
                                  />
                                </div>
                                <div className="automobile-car-list">
                                  <ul>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car15.png"
                                        />
                                        2019 Ferrari F8,Red, J92450
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car16.png"
                                        />{" "}
                                        Mercedes Benz AMG GT
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car17.png"
                                        />
                                        Aston Martin Vanquish
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car18.png"
                                        />
                                        Porsche 718
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car16.png"
                                        />
                                        Alpine A110
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car15.png"
                                        />
                                        Porsche 718 Boxster
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car18.png"
                                        />
                                        McLaren 720S
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car17.png"
                                        />
                                        BMW M2 Competition
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car15.png"
                                        />
                                        Toyota GR Supra
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car18.png"
                                        />
                                        Nissan GT-R
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="t3"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="automobile-main-content">
                      <div className="automobile-main-section automobile-car-listfull">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="carNameSideCarWrapper">
                                <div className="customRightCarWrapper">
                                  <img
                                    alt=""
                                    src="assets/img/car16.png"
                                    className="automobile-car-list-img"
                                  />
                                </div>
                                <div className="automobile-car-list">
                                  <ul>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car15.png"
                                        />
                                        2019 Ferrari F8,Red, J92450
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car16.png"
                                        />{" "}
                                        Mercedes Benz AMG GT
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car17.png"
                                        />
                                        Aston Martin Vanquish
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car18.png"
                                        />
                                        Porsche 718
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car16.png"
                                        />
                                        Alpine A110
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car15.png"
                                        />
                                        Porsche 718 Boxster
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car18.png"
                                        />
                                        McLaren 720S
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car17.png"
                                        />
                                        BMW M2 Competition
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car15.png"
                                        />
                                        Toyota GR Supra
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car18.png"
                                        />
                                        Nissan GT-R
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="t4"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="automobile-main-content">
                      <div className="automobile-main-section automobile-car-listfull">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="carNameSideCarWrapper">
                                <div className="customRightCarWrapper">
                                  <img
                                    alt=""
                                    src="assets/img/car16.png"
                                    className="automobile-car-list-img"
                                  />
                                </div>
                                <div className="automobile-car-list">
                                  <ul>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car15.png"
                                        />
                                        2019 Ferrari F8,Red, J92450
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car16.png"
                                        />{" "}
                                        Mercedes Benz AMG GT
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car17.png"
                                        />
                                        Aston Martin Vanquish
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car18.png"
                                        />
                                        Porsche 718
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car16.png"
                                        />
                                        Alpine A110
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car15.png"
                                        />
                                        Porsche 718 Boxster
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car18.png"
                                        />
                                        McLaren 720S
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car17.png"
                                        />
                                        BMW M2 Competition
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car15.png"
                                        />
                                        Toyota GR Supra
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car18.png"
                                        />
                                        Nissan GT-R
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="t5"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="automobile-main-content">
                      <div className="automobile-main-section automobile-car-listfull">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="carNameSideCarWrapper">
                                <div className="customRightCarWrapper">
                                  <img
                                    alt=""
                                    src="assets/img/car16.png"
                                    className="automobile-car-list-img"
                                  />
                                </div>
                                <div className="automobile-car-list">
                                  <ul>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car15.png"
                                        />
                                        2019 Ferrari F8,Red, J92450
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car16.png"
                                        />{" "}
                                        Mercedes Benz AMG GT
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car17.png"
                                        />
                                        Aston Martin Vanquish
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car18.png"
                                        />
                                        Porsche 718
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car16.png"
                                        />
                                        Alpine A110
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car15.png"
                                        />
                                        Porsche 718 Boxster
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car18.png"
                                        />
                                        McLaren 720S
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car17.png"
                                        />
                                        BMW M2 Competition
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car15.png"
                                        />
                                        Toyota GR Supra
                                      </a>
                                    </li>
                                    <li>
                                      <a href="listing-detail.html">
                                        <img
                                          className="crList"
                                          src="assets/img/car18.png"
                                        />
                                        Nissan GT-R
                                      </a>
                                    </li>
                                  </ul>
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
      <Footer/>
    </div>
  );
};

export default Availability;
