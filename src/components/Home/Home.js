import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'

const Home = () => {
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
   .car-card ul li.seDateLi
   {
   width:200px;
   }
   .sidebar-menu li:nth-child(2)
   {
   position: relative;
   background-color: #de3255;
   }
   .sidebar-menu li:nth-child(2) a img:first-child 
   {
   display:none;
   }
   .sidebar-menu li:nth-child(2) a img:nth-child(2)
   {
   display:block;
   }
   .sidebar-menu li:nth-child(2) a span
   {
   color:#fff;
   }
   .sidebar-menu li.dropdown ul.dropdown-menu li:nth-child(2) 
   {
   background-color: #fff;
   }
   @media only screen and (max-width: 1500px)
   {
   .car-txt 
   {
   padding: 0px 25px;
   }
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
            <h1>
              Mission <span> Control </span>
            </h1>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="topCardWrapper">
                <div className="">
                  <div className="card TopBoxCard">
                    <div className="card-body">
                      <h5 className="card-title">
                        <div className="ctLeft">
                          <span className="ctLightHead"> Total </span>
                          <span className="ctBoldHead"> Bookings </span>
                        </div>
                        <div className="ctRight">
                          <span> This month </span>
                        </div>
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center customGraphDisp">
                          <img alt=''
                            className="tBookingIcon"
                            src="assets/img/lefticon/tb1.png"
                          />
                        </div>
                        <div className="ps-3">
                          <h6 className="tbAmount">
                            {' '}
                            <span> aed </span> 114
                          </h6>
                          <span className="arrowWrapper text-success small pt-1 fw-bold">
                            <img alt=''
                              className="arrowTop"
                              src="assets/img/lefticon/at1.png"
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
                          <span className="ctLightHead"> Total </span>
                          <span className="ctBoldHead"> Sales </span>
                        </div>
                        <div className="ctRight">
                          <span> This month </span>
                        </div>
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center customGraphDisp">
                          <img alt=''
                            className="tBookingIcon"
                            src="assets/img/lefticon/tb2.png"
                          />
                        </div>
                        <div className="ps-3">
                          <h6 className="tbAmount">
                            {' '}
                            <span> aed </span> 346
                          </h6>
                          <span className="arrowWrapper text-success small pt-1 fw-bold">
                            <img alt=''
                              className="arrowTop"
                              src="assets/img/lefticon/ab1.png"
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
                          <span className="ctBoldHead"> Cancellations </span>
                        </div>
                        <div className="ctRight">
                          <span> This month </span>
                        </div>
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center customGraphDisp">
                          <img alt=''
                            className="tBookingIcon"
                            src="assets/img/lefticon/tb3.png"
                          />
                        </div>
                        <div className="ps-3">
                          <h6 className="tbAmount"> 35</h6>
                          <span className="arrowWrapper text-success small pt-1 fw-bold">
                            <img alt=''
                              className="arrowTop"
                              src="assets/img/lefticon/ab1.png"
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
                          <span className="ctLightHead"> Cancellations </span>
                          <span className="ctBoldHead"> Share </span>
                        </div>
                        <div className="ctRight">
                          <span> This month </span>
                        </div>
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center customGraphDisp">
                          <img alt=''
                            className="tBookingIcon"
                            src="assets/img/lefticon/tb3.png"
                          />
                        </div>
                        <div className="ps-3">
                          <h6 className="tbAmount"> 10%</h6>
                          <span className="arrowWrapper text-success small pt-1 fw-bold">
                            <img alt=''
                              className="arrowTop"
                              src="assets/img/lefticon/ab1.png"
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
                          <span className="ctLightHead"> Cars </span>
                          <span className="ctBoldHead"> Booked </span>
                        </div>
                        <div className="ctRight">
                          <span> This month </span>
                        </div>
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center customGraphDisp">
                          <img alt=''
                            className="tBookingIcon"
                            src="assets/img/lefticon/tb4.png"
                          />
                        </div>
                        <div className="ps-3">
                          <h6 className="tbAmount">78</h6>
                          <span className="arrowWrapper text-success small pt-1 fw-bold">
                            <img alt=''
                              className="arrowTop"
                              src="assets/img/lefticon/at1.png"
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
                          <span className="ctLightHead"> Cars </span>
                          <span className="ctBoldHead"> Delivered </span>
                        </div>
                        <div className="ctRight">
                          <span> This month </span>
                        </div>
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center customGraphDisp">
                          <img alt=''
                            className="tBookingIcon"
                            src="assets/img/lefticon/tb5.png"
                          />
                        </div>
                        <div className="ps-3">
                          <h6 className="tbAmount">145</h6>
                          <span className="arrowWrapper text-success small pt-1 fw-bold">
                            <img alt=''
                              className="arrowTop"
                              src="assets/img/lefticon/ab1.png"
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
                          <span className="ctLightHead"> Utilization </span>
                        </div>
                        <div className="ctRight">
                          <span> This month </span>
                        </div>
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center customGraphDisp">
                          <img alt=''
                            className="tBookingIcon"
                            src="assets/img/lefticon/tb6.png"
                          />
                        </div>
                        <div className="ps-3">
                          <h6 className="tbAmount"> 24%</h6>
                          <span className="arrowWrapper text-success small pt-1 fw-bold">
                            <img alt=''
                              className="arrowTop"
                              src="assets/img/lefticon/at1.png"
                            />
                            12%increase
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 customRowMT40">
              <div className="boxHeading">Most Demand</div>
              <div className="leftCardBoxV1 CustomHomeRanking">
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1">Ferrari F8</div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">80% (Utilization)</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #1 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Mercedes Benz AMG</div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">70% (Utilization)</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #2 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Aston Martin Vanquish </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">60% (Utilization)</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #3 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Porsche 718 </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">55% (Utilization)</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #4 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Alpine A110 </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">50% (Utilization)</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #5 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Porsche 718 Boxster </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">45% (Utilization)</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #6 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> McLaren 720S </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">40% (Utilization)</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #7 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> BMW M2 Competition </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">38% (Utilization)</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #8 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Toyota GR Supra </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">35% (Utilization)</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #9 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Nissan GT-R </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">30% (Utilization)</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #10 </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 customRowMT40">
              <div className="boxHeading">Most Sales</div>
              <div className="leftCardBoxV1 CustomHomeRanking">
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/audi.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1">Ferrari F8</div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">usd 2,721</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #1 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/audi.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Mercedes Benz AMG </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">usd 2,311</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #2 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/audi.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Aston Martin Vanquish </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">usd 2,299</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #3 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/audi.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Porsche 718 </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">usd 2,281</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #4 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/audi.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Alpine A110 </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">usd 2,211</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #5 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/audi.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Porsche 718 Boxster </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">usd 2,201</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #6 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/audi.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> McLaren 720S </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">usd 1,190</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #7 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/audi.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> BMW M2 Competition </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">usd 1,120</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #8 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/audi.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Toyota GR Supra </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">usd 1,089</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #9 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/audi.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Nissan GT-R </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">usd 1,021</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #10 </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 customRowMT40">
              <div className="boxHeading">Highest Views</div>
              <div className="leftCardBoxV1 CustomHomeRanking">
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1">Ferrari F8</div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">
                      <i className="far fa-eye"></i> 2,721
                    </div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #1 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Mercedes Benz AMG</div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">
                      <i className="far fa-eye"></i> 2,711
                    </div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #2 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Aston Martin Vanquish </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">
                      <i className="far fa-eye"></i> 2,701
                    </div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #3 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Porsche 718 </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">
                      <i className="far fa-eye"></i> 2,691
                    </div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #4 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Alpine A110 </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">
                      <i className="far fa-eye"></i> 2,675
                    </div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #5 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Porsche 718 Boxster </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">
                      <i className="far fa-eye"></i> 2,627
                    </div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #6 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> McLaren 720S </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">
                      <i className="far fa-eye"></i> 2,611
                    </div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #7 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> BMW M2 Competition </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">
                      <i className="far fa-eye"></i> 2,545
                    </div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #8 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Toyota GR Supra </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">
                      <i className="far fa-eye"></i> 2,525
                    </div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #9 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Nissan GT-R </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">
                      <i className="far fa-eye"></i> 2,171
                    </div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #10 </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 customRowMT40">
              <div className="boxHeading">Most Cancellations</div>
              <div className="leftCardBoxV1 CustomHomeRanking">
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/audi.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1">Ferrari F8</div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">
                      <i className="far fa-times-circle"></i> 20
                    </div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #1 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/audi.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Mercedes Benz AMG</div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">
                      <i className="far fa-times-circle"></i> 17
                    </div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #2 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/audi.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Aston Martin Vanquish </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">
                      <i className="far fa-times-circle"></i> 17
                    </div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #3 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/audi.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Porsche 718 </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">
                      <i className="far fa-times-circle"></i> 15
                    </div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #4 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/audi.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Alpine A110 </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">
                      <i className="far fa-times-circle"></i> 14
                    </div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #5 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/audi.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Porsche 718 Boxster </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">
                      <i className="far fa-times-circle"></i> 13
                    </div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #6 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/audi.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> McLaren 720S </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">
                      <i className="far fa-times-circle"></i> 11
                    </div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #7 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/audi.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> BMW M2 Competition </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">
                      <i className="far fa-eye"></i> 2,545
                    </div>
                    <div className="rankWrapBoxV1">
                      <i className="far fa-times-circle"></i> 9
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/audi.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Toyota GR Supra </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">
                      <i className="far fa-times-circle"></i> 5
                    </div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #9 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/audi.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Nissan GT-R </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">
                      <i className="far fa-times-circle"></i> 2
                    </div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #10 </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 customRowMT40">
              <div className="boxHeading">Highest Conversions</div>
              <div className="leftCardBoxV1 CustomHomeRanking">
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1">Ferrari F8</div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">80% (Conversion)</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #1 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Mercedes Benz AMG</div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">70% (Conversion)</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #2 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Aston Martin Vanquish </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">60% (Conversion)</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #3 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Porsche 718 </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">55% (Conversion)</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #4 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Alpine A110 </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">50% (Conversion)</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #5 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Porsche 718 Boxster </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">45% (Conversion)</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #6 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> McLaren 720S </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">40% (Conversion)</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #7 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> BMW M2 Competition </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">38% (Conversion)</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #8 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Toyota GR Supra </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">35% (Conversion)</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #9 </span>
                    </div>
                  </div>
                </div>
                <div className="lineBoxV1">
                  <div className="userImgV1">
                    {' '}
                    <img alt='' className="" src="assets/img/ccard/ferari.png" />{' '}
                  </div>
                  <div className="nameRideWrapV1">
                    <div className="nameWrapperV1"> Nissan GT-R </div>
                    <span className="plateNumSpan"> J92450 </span>
                    <div className="ridesTakenV1">30% (Conversion)</div>
                    <div className="rankWrapBoxV1">
                      <span className="rankNumV1"> #10 </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="automobile-main-content topCarsCard mt40 latestReviewW">
                <h5 className="card-title">
                  <div className="ctLeft">
                    <span className="ctLightHead"> Latest </span>
                    <span className="ctBoldHead"> Reviews </span>
                  </div>
                </h5>
                <div className="automobile-main-section automobile-car-listfull">
                  <div className="carNameSideCarWrapper">
                    <div className="automobile-car-list latsRevWrapper">
                      <ul>
                        <li>
                          <span className="latestRevListCar">
                            <div className="userNameFlex">
                              <img alt=''
                                className="userCarImage"
                                src="assets/img/users/user-1.png"
                              />
                              <div className="userDetailWrap">
                                <span className="userName"> John Doe </span>
                                <span className="userBookDate">
                                  {' '}
                                  15-02-2022{' '}
                                </span>
                                <span className="userBookTime"> 12:25pm </span>
                              </div>
                            </div>
                            <div className="rantingWrap">
                              <span className="ratingNum"> 4.7 </span>
                              <span className="ratingIcon">
                                {' '}
                                <i className="rateIstar fas fa-star"></i>{' '}
                              </span>
                            </div>
                          </span>
                          <div className="latestRevWrap">
                            <span>
                              {' '}
                              <img alt=''
                                className="crList"
                                src="assets/img/car15.png"
                              />{' '}
                            </span>
                            <div className="carNameRevWRap">
                              <span className="carName"> Ferrari F8 </span>
                              <span>
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur
                                <a className="reviewBtn" href="review.php">
                                  read more{' '}
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <span className="latestRevListCar">
                            <div className="userNameFlex">
                              <img alt=''
                                className="userCarImage"
                                src="assets/img/users/user-2.png"
                              />
                              <div className="userDetailWrap">
                                <span className="userName"> John Doe </span>
                                <span className="userBookDate">
                                  {' '}
                                  15-02-2022{' '}
                                </span>
                                <span className="userBookTime"> 12:25pm </span>
                              </div>
                            </div>
                            <div className="rantingWrap">
                              <span className="ratingNum"> 4.6 </span>
                              <span className="ratingIcon">
                                {' '}
                                <i className="rateIstar fas fa-star"></i>{' '}
                              </span>
                            </div>
                          </span>
                          <div className="latestRevWrap">
                            <span>
                              {' '}
                              <img alt=''
                                className="crList"
                                src="assets/img/car16.png"
                              />{' '}
                            </span>
                            <div className="carNameRevWRap">
                              <span className="carName"> Ferrari F8 </span>
                              <span>
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur
                                <a className="reviewBtn" href="review.php">
                                  read more{' '}
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <span className="latestRevListCar">
                            <div className="userNameFlex">
                              <img alt=''
                                className="userCarImage"
                                src="assets/img/users/user-3.png"
                              />
                              <div className="userDetailWrap">
                                <span className="userName"> John Doe </span>
                                <span className="userBookDate">
                                  {' '}
                                  15-02-2022{' '}
                                </span>
                                <span className="userBookTime"> 12:25pm </span>
                              </div>
                            </div>
                            <div className="rantingWrap">
                              <span className="ratingNum"> 4.4 </span>
                              <span className="ratingIcon">
                                {' '}
                                <i className="rateIstar fas fa-star"></i>{' '}
                              </span>
                            </div>
                          </span>
                          <div className="latestRevWrap">
                            <span>
                              {' '}
                              <img alt=''
                                className="crList"
                                src="assets/img/car17.png"
                              />{' '}
                            </span>
                            <div className="carNameRevWRap">
                              <span className="carName"> Ferrari F8 </span>
                              <span>
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur
                                <a className="reviewBtn" href="review.php">
                                  read more{' '}
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <span className="latestRevListCar">
                            <div className="userNameFlex">
                              <img alt=''
                                className="userCarImage"
                                src="assets/img/users/user-4.png"
                              />
                              <div className="userDetailWrap">
                                <span className="userName"> John Doe </span>
                                <span className="userBookDate">
                                  {' '}
                                  15-02-2022{' '}
                                </span>
                                <span className="userBookTime"> 12:25pm </span>
                              </div>
                            </div>
                            <div className="rantingWrap">
                              <span className="ratingNum"> 4.4 </span>
                              <span className="ratingIcon">
                                {' '}
                                <i className="rateIstar fas fa-star"></i>{' '}
                              </span>
                            </div>
                          </span>
                          <div className="latestRevWrap">
                            <span>
                              {' '}
                              <img alt=''
                                className="crList"
                                src="assets/img/car16.png"
                              />{' '}
                            </span>
                            <div className="carNameRevWRap">
                              <span className="carName"> Ferrari F8 </span>
                              <span>
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur
                                <a className="reviewBtn" href="review.php">
                                  read more{' '}
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <span className="latestRevListCar">
                            <div className="userNameFlex">
                              <img alt=''
                                className="userCarImage"
                                src="assets/img/users/user-5.png"
                              />
                              <div className="userDetailWrap">
                                <span className="userName"> John Doe </span>
                                <span className="userBookDate">
                                  {' '}
                                  15-02-2022{' '}
                                </span>
                                <span className="userBookTime"> 12:25pm </span>
                              </div>
                            </div>
                            <div className="rantingWrap">
                              <span className="ratingNum"> 4.2 </span>
                              <span className="ratingIcon">
                                {' '}
                                <i className="rateIstar fas fa-star"></i>{' '}
                              </span>
                            </div>
                          </span>
                          <div className="latestRevWrap">
                            <span>
                              {' '}
                              <img alt=''
                                className="crList"
                                src="assets/img/car15.png"
                              />{' '}
                            </span>
                            <div className="carNameRevWRap">
                              <span className="carName"> Ferrari F8 </span>
                              <span>
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur
                                <a className="reviewBtn" href="review.php">
                                  read more{' '}
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <span className="latestRevListCar">
                            <div className="userNameFlex">
                              <img alt=''
                                className="userCarImage"
                                src="assets/img/users/user-6.png"
                              />
                              <div className="userDetailWrap">
                                <span className="userName"> John Doe </span>
                                <span className="userBookDate">
                                  {' '}
                                  15-02-2022{' '}
                                </span>
                                <span className="userBookTime"> 12:25pm </span>
                              </div>
                            </div>
                            <div className="rantingWrap">
                              <span className="ratingNum"> 4.1 </span>
                              <span className="ratingIcon">
                                {' '}
                                <i className="rateIstar fas fa-star"></i>{' '}
                              </span>
                            </div>
                          </span>
                          <div className="latestRevWrap">
                            <span>
                              {' '}
                              <img alt=''
                                className="crList"
                                src="assets/img/car17.png"
                              />{' '}
                            </span>
                            <div className="carNameRevWRap">
                              <span className="carName"> Ferrari F8 </span>
                              <span>
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur
                                <a className="reviewBtn" href="review.php">
                                  read more{' '}
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <span className="latestRevListCar">
                            <div className="userNameFlex">
                              <img alt=''
                                className="userCarImage"
                                src="assets/img/users/user-7.png"
                              />
                              <div className="userDetailWrap">
                                <span className="userName"> John Doe </span>
                                <span className="userBookDate">
                                  {' '}
                                  15-02-2022{' '}
                                </span>
                                <span className="userBookTime"> 12:25pm </span>
                              </div>
                            </div>
                            <div className="rantingWrap">
                              <span className="ratingNum"> 4.0 </span>
                              <span className="ratingIcon">
                                {' '}
                                <i className="rateIstar fas fa-star"></i>{' '}
                              </span>
                            </div>
                          </span>
                          <div className="latestRevWrap">
                            <span>
                              {' '}
                              <img alt=''
                                className="crList"
                                src="assets/img/car15.png"
                              />{' '}
                            </span>
                            <div className="carNameRevWRap">
                              <span className="carName"> Ferrari F8 </span>
                              <span>
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur
                                <a className="reviewBtn" href="review.php">
                                  read more{' '}
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <span className="latestRevListCar">
                            <div className="userNameFlex">
                              <img alt=''
                                className="userCarImage"
                                src="assets/img/users/user-8.png"
                              />
                              <div className="userDetailWrap">
                                <span className="userName"> John Doe </span>
                                <span className="userBookDate">
                                  {' '}
                                  15-02-2022{' '}
                                </span>
                                <span className="userBookTime"> 12:25pm </span>
                              </div>
                            </div>
                            <div className="rantingWrap">
                              <span className="ratingNum"> 3.9 </span>
                              <span className="ratingIcon">
                                {' '}
                                <i className="rateIstar fas fa-star"></i>{' '}
                              </span>
                            </div>
                          </span>
                          <div className="latestRevWrap">
                            <span>
                              {' '}
                              <img alt=''
                                className="crList"
                                src="assets/img/car17.png"
                              />{' '}
                            </span>
                            <div className="carNameRevWRap">
                              <span className="carName"> Ferrari F8 </span>
                              <span>
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur
                                <a className="reviewBtn" href="review.php">
                                  read more{' '}
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <span className="latestRevListCar">
                            <div className="userNameFlex">
                              <img alt=''
                                className="userCarImage"
                                src="assets/img/users/user-9.png"
                              />
                              <div className="userDetailWrap">
                                <span className="userName"> John Doe </span>
                                <span className="userBookDate">
                                  {' '}
                                  15-02-2022{' '}
                                </span>
                                <span className="userBookTime"> 12:25pm </span>
                              </div>
                            </div>
                            <div className="rantingWrap">
                              <span className="ratingNum"> 3.7 </span>
                              <span className="ratingIcon">
                                {' '}
                                <i className="rateIstar fas fa-star"></i>{' '}
                              </span>
                            </div>
                          </span>
                          <div className="latestRevWrap">
                            <span>
                              {' '}
                              <img alt=''
                                className="crList"
                                src="assets/img/car16.png"
                              />{' '}
                            </span>
                            <div className="carNameRevWRap">
                              <span className="carName"> Ferrari F8 </span>
                              <span>
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur
                                <a className="reviewBtn" href="review.php">
                                  read more{' '}
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="upcomingRidesWrapper customOwlCaroCardBody mt40">
                <h5 className="card-title">
                  <div className="ctLeft">
                    <span className="ctLightHead"> Upcoming </span>
                    <span className="ctBoldHead"> Rides </span>
                  </div>
                </h5>
                <div className="owl-carousel owl-theme cstD5">
                  <div className="car-card">
                    <div className="car-txt">
                      <div className="logo-txt">
                        <img alt='' src="assets/img/ccard/ferari.png" />
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
                        />{' '}
                        <strong>J92450</strong>
                      </li>
                      <li>
                        <span> Time </span>
                        <img alt='' src="assets/img/ccard/time.png" />{' '}
                        <strong>12.30pm</strong>
                      </li>
                      <li className="seDateLi">
                        <span>Start Date </span>
                        <img alt='' src="assets/img/ccard/cald.png" />{' '}
                        <strong>10 Dec 2022, 12:30pm</strong>
                      </li>
                      <li className="seDateLi">
                        <span>Duration </span>
                        <img alt='' src="assets/img/ccard/duration.png" />{' '}
                        <strong>1day 2hours</strong>
                      </li>
                    </ul>
                    <div className="card-car">
                      <div className="caro-img">
                        <img alt=''
                          src="assets/img/ccard/banner-2.png"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="car-card">
                    <div className="car-txt">
                      <div className="logo-txt">
                        <img alt='' src="assets/img/ccard/audi.png" />
                        <div className="name">
                          Audi r8<span>Vantage</span>
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
                        />{' '}
                        <strong>J92450</strong>
                      </li>
                      <li>
                        <span> Time </span>
                        <img alt='' src="assets/img/ccard/time.png" />{' '}
                        <strong>12.30pm</strong>
                      </li>
                      <li className="seDateLi">
                        <span>Start Date </span>
                        <img alt='' src="assets/img/ccard/cald.png" />{' '}
                        <strong>10 Dec 2022, 12:30pm</strong>
                      </li>
                      <li className="seDateLi">
                        <span>Duration </span>
                        <img alt='' src="assets/img/ccard/duration.png" />{' '}
                        <strong>1day 2hours</strong>
                      </li>
                    </ul>
                    <div className="card-car">
                      <div className="caro-img">
                        <img alt=''
                          src="assets/img/ccard/audi-r8.png"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="car-card">
                    <div className="car-txt">
                      <div className="logo-txt">
                        <img alt='' src="assets/img/ccard/ferari.png" />
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
                        />{' '}
                        <strong>J92450</strong>
                      </li>
                      <li>
                        <span> Time </span>
                        <img alt='' src="assets/img/ccard/time.png" />{' '}
                        <strong>12.30pm</strong>
                      </li>
                      <li className="seDateLi">
                        <span>Start Date </span>
                        <img alt='' src="assets/img/ccard/cald.png" />{' '}
                        <strong>10 Dec 2022, 12:30pm</strong>
                      </li>
                      <li className="seDateLi">
                        <span>Duration </span>
                        <img alt='' src="assets/img/ccard/duration.png" />{' '}
                        <strong>1day 2hours</strong>
                      </li>
                    </ul>
                    <div className="card-car">
                      <div className="caro-img">
                        <img alt=''
                          src="assets/img/ccard/banner-2.png"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="car-card">
                    <div className="car-txt">
                      <div className="logo-txt">
                        <img alt='' src="assets/img/ccard/ferari.png" />
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
                        />{' '}
                        <strong>J92450</strong>
                      </li>
                      <li>
                        <span> Time </span>
                        <img alt='' src="assets/img/ccard/time.png" />{' '}
                        <strong>12.30pm</strong>
                      </li>
                      <li className="seDateLi">
                        <span>Start Date </span>
                        <img alt='' src="assets/img/ccard/cald.png" />{' '}
                        <strong>10 Dec 2022, 12:30pm</strong>
                      </li>
                      <li className="seDateLi">
                        <span>Duration </span>
                        <img alt='' src="assets/img/ccard/duration.png" />{' '}
                        <strong>1day 2hours</strong>
                      </li>
                    </ul>
                    <div className="card-car">
                      <div className="caro-img">
                        <img alt=''
                          src="assets/img/ccard/banner-2.png"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="upcomingRidesWrapper customOwlCaroCardBody mt40">
                <h5 className="card-title">
                  <div className="ctLeft">
                    <span className="ctLightHead"> Ending </span>
                    <span className="ctBoldHead"> Rides </span>
                  </div>
                </h5>
                <div className="owl-carousel owl-theme cstD5">
                  <div className="car-card">
                    <div className="car-txt">
                      <div className="logo-txt">
                        <img alt='' src="assets/img/ccard/ferari.png" />
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
                        />{' '}
                        <strong>J92450</strong>
                      </li>
                      <li>
                        <span> Time </span>
                        <img alt='' src="assets/img/ccard/time.png" />{' '}
                        <strong>12.30pm</strong>
                      </li>
                      <li className="seDateLi">
                        <span>End Date </span>
                        <img alt='' src="assets/img/ccard/cald.png" />{' '}
                        <strong>10 Dec 2022, 12:30pm</strong>
                      </li>
                      <li className="seDateLi">
                        <span>Duration </span>
                        <img alt='' src="assets/img/ccard/duration.png" />{' '}
                        <strong>1day 2hours</strong>
                      </li>
                    </ul>
                    <div className="card-car">
                      <div className="caro-img">
                        <img alt=''
                          src="assets/img/ccard/banner-2.png"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="car-card">
                    <div className="car-txt">
                      <div className="logo-txt">
                        <img alt='' src="assets/img/ccard/audi.png" />
                        <div className="name">
                          Audi r8<span>Vantage</span>
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
                        />{' '}
                        <strong>J92450</strong>
                      </li>
                      <li>
                        <span> Time </span>
                        <img alt='' src="assets/img/ccard/time.png" />{' '}
                        <strong>12.30pm</strong>
                      </li>
                      <li className="seDateLi">
                        <span>End Date </span>
                        <img alt='' src="assets/img/ccard/cald.png" />{' '}
                        <strong>10 Dec 2022, 12:30pm</strong>
                      </li>
                      <li className="seDateLi">
                        <span>Duration </span>
                        <img alt='' src="assets/img/ccard/duration.png" />{' '}
                        <strong>1day 2hours</strong>
                      </li>
                    </ul>
                    <div className="card-car">
                      <div className="caro-img">
                        <img alt=''
                          src="assets/img/ccard/audi-r8.png"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="car-card">
                    <div className="car-txt">
                      <div className="logo-txt">
                        <img alt='' src="assets/img/ccard/ferari.png" />
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
                        />{' '}
                        <strong>J92450</strong>
                      </li>
                      <li>
                        <span> Time </span>
                        <img alt='' src="assets/img/ccard/time.png" />{' '}
                        <strong>12.30pm</strong>
                      </li>
                      <li className="seDateLi">
                        <span>End Date </span>
                        <img alt='' src="assets/img/ccard/cald.png" />{' '}
                        <strong>10 Dec 2022, 12:30pm</strong>
                      </li>
                      <li className="seDateLi">
                        <span>Duration </span>
                        <img alt='' src="assets/img/ccard/duration.png" />{' '}
                        <strong>1day 2hours</strong>
                      </li>
                    </ul>
                    <div className="card-car">
                      <div className="caro-img">
                        <img alt=''
                          src="assets/img/ccard/banner-2.png"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="car-card">
                    <div className="car-txt">
                      <div className="logo-txt">
                        <img alt='' src="assets/img/ccard/ferari.png" />
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
                        />{' '}
                        <strong>J92450</strong>
                      </li>
                      <li>
                        <span> Time </span>
                        <img alt='' src="assets/img/ccard/time.png" />{' '}
                        <strong>12.30pm</strong>
                      </li>
                      <li className="seDateLi">
                        <span>End Date </span>
                        <img alt='' src="assets/img/ccard/cald.png" />{' '}
                        <strong>10 Dec 2022, 12:30pm</strong>
                      </li>
                      <li className="seDateLi">
                        <span>Duration </span>
                        <img alt='' src="assets/img/ccard/duration.png" />{' '}
                        <strong>1day 2hours</strong>
                      </li>
                    </ul>
                    <div className="card-car">
                      <div className="caro-img">
                        <img alt=''
                          src="assets/img/ccard/banner-2.png"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="upcomingRidesWrapper customOwlCaroCardBody endedRidesWrapper mt40">
                <h5 className="card-title">
                  <div className="ctLeft">
                    <span className="ctLightHead"> Ended </span>
                    <span className="ctBoldHead"> Rides </span>
                  </div>
                </h5>
                <div className="owl-carousel owl-theme cstD5">
                  <div className="car-card">
                    <div className="car-txt">
                      <div className="logo-txt">
                        <img alt='' src="assets/img/ccard/ferari.png" />
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
                        />{' '}
                        <strong>J92450</strong>
                      </li>
                      <li>
                        <span> Time </span>
                        <img alt='' src="assets/img/ccard/time.png" />{' '}
                        <strong>12.30pm</strong>
                      </li>
                      <li className="seDateLi">
                        <span>Ended Date </span>
                        <img alt='' src="assets/img/ccard/cald.png" />{' '}
                        <strong>10 Dec 2022, 12:30pm</strong>
                      </li>
                    </ul>
                    <div className="card-car">
                      <div className="caro-img">
                        <img alt=''
                          src="assets/img/ccard/banner-2.png"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  )
}

export default Home
