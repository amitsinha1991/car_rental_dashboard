import React from 'react'
import $ from 'jquery'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const SalesChart = () => {
  const css = `
    .sidebar-menu li.dropdown
    {
    position: relative;
    background-color: #de3255;
    }
    .sidebar-menu li.dropdown ul.dropdown-menu
    {
    display: block;
    margin: 0 !important;	
    }
    .sidebar-menu li.dropdown ul.dropdown-menu li
    {
    padding-left: 34px !important;
    background-color: #fff !important;
    }
    .sidebar-menu li.dropdown ul.dropdown-menu li:nth-child(1) a
    {
    color:#de3255 !important;
    }
    .sidebar-menu li.dropdown ul.dropdown-menu li:nth-child(1) a:before
    {
    color:#de3255 !important;
    }
    .sidebar-menu li.dropdown-menu
    {
    background-color: unset;
    }
    #chartdiv 
    {
    width: 100%;
    height: 500px;
    }
    .sidebar-menu li:nth-child(8)
    {
    position: relative;
    background-color: #de3255;
    }
    .sidebar-menu li:nth-child(8) a img:first-child 
    {
    display:none;
    }
    .sidebar-menu li:nth-child(8) a img:nth-child(2)
    {
    display:block;
    }
    .sidebar-menu li:nth-child(8) a span
    {
    color:#fff;
    }
    .sidebar-menu li:nth-child(8) a::after
    {
    color:#fff;
    }	
    `
  

  const options =  {
    chart: {
      type: 'line'
    },
    title: {
      text: ''
    },
    subtitle: {
      text: 'Source: Car Rental'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    exporting: {
      enabled: true
    },
    yAxis: {
      title: {
        text: 'Sales Chart'
      }
    },
    navigation: {
      buttonOptions: {
          enabled: true
      }
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true
      },
      enableMouseTracking: true
    }
  },
    series:[{
      name: 'Ferrari F8',
      data: [1722, 1622, 1922, 1422, 1822, 1022, 1522, 2622, 2322, 1822, 1322, 922]
    }]
  }

  $(document).ready(function () {
    $('.drop1').click(function () {
      $('.d1').slideToggle()
      $('.d2').hide()
      $('.d3').hide()
      $('.d4').hide()
      $('.d5').hide()
      $('.d6').hide()
    })

    $('.drop2').click(function () {
      $('.d2').slideToggle()
      $('.d1').hide()
      $('.d3').hide()
      $('.d4').hide()
      $('.d5').hide()
      $('.d6').hide()
    })

    $('.drop3').click(function () {
      $('.d3').slideToggle()
      $('.d1').hide()
      $('.d2').hide()
      $('.d4').hide()
      $('.d5').hide()
      $('.d6').hide()
    })

    $('.drop4').click(function () {
      $('.d4').slideToggle()
      $('.d1').hide()
      $('.d2').hide()
      $('.d3').hide()
      $('.d5').hide()
      $('.d6').hide()
    })

    $('.drop5').click(function () {
      $('.d5').slideToggle()
      $('.d1').hide()
      $('.d2').hide()
      $('.d3').hide()
      $('.d4').hide()
      $('.d6').hide()
    })

    $('.drop6').click(function () {
      $('.d6').slideToggle()
      $('.d1').hide()
      $('.d2').hide()
      $('.d3').hide()
      $('.d4').hide()
      $('.d5').hide()
    })
  })

  $(document).click(function (e) {
    if ($(e.target).parents('.dropDownWrap').length === 0) {
      $('.commonDrop').hide()
    }
  })

  return (
    <div>
      <style>{css}</style>
      <Header />
      <Sidebar />
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Sale Analytics</h1>
          </div>
        </section>
        <div className="section-body">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="topCardAsaleWrapper">
                <div className="">
                  <div className="card TopBoxCard">
                    <div className="card-body">
                      <h5 className="card-title">
                        <div className="ctLeft">
                          <span className="ctLightHead"> Average </span>
                          <span className="ctBoldHead"> Booking </span>
                        </div>
                        <div className="ctRight">
                          <span> This month </span>
                        </div>
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center customGraphDisp">
                          <img
                            className="tBookingIcon"
                            src="assets/img/lefticon/tb1.png"
                            alt=""
                          />
                        </div>
                        <div className="ps-3">
                          <h6 className="tbAmount"> 244</h6>
                          <span className="arrowWrapper text-success small pt-1 fw-bold">
                            <img
                              className="arrowTop"
                              src="assets/img/lefticon/at1.png"
                              alt=""
                            />
                            12%increase
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="card TopBoxCard">
                    <div className="card-body">
                      <h5 className="card-title">
                        <div className="ctLeft">
                          <span className="ctLightHead"> Average </span>
                          <span className="ctBoldHead"> Sales </span>
                        </div>
                        <div className="ctRight">
                          <span> This month </span>
                        </div>
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center customGraphDisp">
                          <img
                            className="tBookingIcon"
                            src="assets/img/lefticon/tb2.png"
                            alt=""
                          />
                        </div>
                        <div className="ps-3">
                          <h6 className="tbAmount">146</h6>
                          <span className="arrowWrapper text-success small pt-1 fw-bold">
                            <img
                              className="arrowTop"
                              src="assets/img/lefticon/ab1.png"
                              alt=""
                            />
                            12%decrease
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="card TopBoxCard">
                    <div className="card-body">
                      <h5 className="card-title">
                        <div className="ctLeft">
                          <span className="ctLightHead"> Average </span>
                          <span className="ctBoldHead"> Cheque </span>
                        </div>
                        <div className="ctRight">
                          <span> This month </span>
                        </div>
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center customGraphDisp">
                          <img
                            className="tBookingIcon"
                            src="assets/img/lefticon/tb3.png"
                            alt=""
                          />
                        </div>
                        <div className="ps-3">
                          <h6 className="tbAmount"> 35</h6>
                          <span className="arrowWrapper text-success small pt-1 fw-bold">
                            <img
                              className="arrowTop"
                              src="assets/img/lefticon/ab1.png"
                              alt=""
                            />
                            12%decrease
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="card TopBoxCard">
                    <div className="card-body">
                      <h5 className="card-title">
                        <div className="ctLeft">
                          <span className="ctLightHead"> Average </span>
                          <span className="ctBoldHead"> Days </span>
                        </div>
                        <div className="ctRight">
                          <span> This month </span>
                        </div>
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center customGraphDisp">
                          <img
                            className="tBookingIcon"
                            src="assets/img/lefticon/tb3.png"
                            alt=""
                          />
                        </div>
                        <div className="ps-3">
                          <h6 className="tbAmount"> 27</h6>
                          <span className="arrowWrapper text-success small pt-1 fw-bold">
                            <img
                              className="arrowTop"
                              src="assets/img/lefticon/ab1.png"
                              alt=""
                            />
                            12%decrease
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="customTabSection">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header graphHeader">
                    <h4>Sales Chart (aed)</h4>
                    <div className="form-group">
                      <div className="prd_stnd_cust_wrap">
                        <div className="dateRangeResultWrapper customRideDateRange resHide">
                          <label> Custom Date </label>
                          <input
                            type="text"
                            id="demo-1"
                            className="form-control form-control-sm"
                            placeholder="dd-mm-yyyy"
                          />
                          <p id="result-1">&nbsp;</p>
                        </div>
                        <div className="commonDropGroup dropDownWrap">
                          <div className="drop5">
                            <button type="button">
                              Period
                              <i className="fas fa-chevron-down"></i>
                            </button>
                          </div>
                          <div className="d5 commonDrop">
                            <div className="form-group">
                              <input
                                type="radio"
                                id="cnty1"
                                name="country"
                                value="australia"
                              />
                              <label htmlFor="australia"> 7 days</label>
                            </div>
                            <div className="form-group">
                              <input
                                type="radio"
                                id="cnty2"
                                name="country"
                                value="canada"
                              />
                              <label htmlFor="canada"> 1 month</label>
                            </div>
                            <div className="form-group">
                              <input
                                type="radio"
                                id="cnty2"
                                name="country"
                                value="canada"
                              />
                              <label htmlFor="canada"> 6 month</label>
                            </div>
                            <div className="form-group">
                              <input
                                type="radio"
                                id="cnty2"
                                name="country"
                                value="canada"
                              />
                              <label htmlFor="canada"> 1 year</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                          Total Bookings{' '}
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
                          Total Sales
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
                          Total Cars
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
                          Total Days
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
                          Cancellations
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
                        <div className="recent-report__chart">
                          <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                          />
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="t2"
                        role="tabpanel"
                        aria-labelledby="t2"
                      >
                        <HighchartsReact
                          highcharts={Highcharts}
                          options={options}
                        />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="t3"
                        role="tabpanel"
                        aria-labelledby="t3"
                      >
                        <HighchartsReact
                          highcharts={Highcharts}
                          options={options}
                        />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="t4"
                        role="tabpanel"
                        aria-labelledby="t4"
                      >
                        <HighchartsReact
                          highcharts={Highcharts}
                          options={options}
                        />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="t5"
                        role="tabpanel"
                        aria-labelledby="t5"
                      >
                        <HighchartsReact
                          highcharts={Highcharts}
                          options={options}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="customTabSection">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header graphHeader">
                    <h4>Sales Chart (number)</h4>
                    <div className="form-group">
                      <div className="prd_stnd_cust_wrap">
                        <div className="dateRangeResultWrapper customRideDateRange resHide">
                          <label> Custom Date </label>
                          <input
                            type="text"
                            id="demo-2"
                            className="form-control form-control-sm"
                            placeholder="dd-mm-yyyy"
                          />
                          <p id="result-2">&nbsp;</p>
                        </div>
                        <div className="commonDropGroup dropDownWrap">
                          <div className="drop6">
                            <button type="button">
                              Period
                              <i className="fas fa-chevron-down"></i>
                            </button>
                          </div>
                          <div className="d6 commonDrop">
                            <div className="form-group">
                              <input
                                type="radio"
                                id="cnty1"
                                name="country"
                                value="australia"
                              />
                              <label htmlFor="australia"> 7 days</label>
                            </div>
                            <div className="form-group">
                              <input
                                type="radio"
                                id="cnty2"
                                name="country"
                                value="canada"
                              />
                              <label htmlFor="canada"> 1 month</label>
                            </div>
                            <div className="form-group">
                              <input
                                type="radio"
                                id="cnty2"
                                name="country"
                                value="canada"
                              />
                              <label htmlFor="canada"> 6 month</label>
                            </div>
                            <div className="form-group">
                              <input
                                type="radio"
                                id="cnty2"
                                name="country"
                                value="canada"
                              />
                              <label htmlFor="canada"> 1 year</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                          Total Bookings{' '}
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
                          Total Sales
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
                          Total Cars
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
                          Total Days
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
                          Cancellations
                        </a>
                      </li>
                    </ul>
                    <div
                      className="tab-content customCarTabList"
                      id="myTabContent3"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="t6"
                        role="tabpanel"
                        aria-labelledby="t1"
                      >
                        <div className="recent-report__chart">
                          <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                          />
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="t7"
                        role="tabpanel"
                        aria-labelledby="t2"
                      >
                        <HighchartsReact
                          highcharts={Highcharts}
                          options={options}
                        />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="t8"
                        role="tabpanel"
                        aria-labelledby="t3"
                      >
                        <HighchartsReact
                          highcharts={Highcharts}
                          options={options}
                        />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="t9"
                        role="tabpanel"
                        aria-labelledby="t4"
                      >
                        <HighchartsReact
                          highcharts={Highcharts}
                          options={options}
                        />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="t10"
                        role="tabpanel"
                        aria-labelledby="t5"
                      >
                        <HighchartsReact
                          highcharts={Highcharts}
                          options={options}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SalesChart
