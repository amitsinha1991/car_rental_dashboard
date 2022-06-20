import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <div className="main-sidebar sidebar-style-2">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <Link to="/">
              <img alt="" src="assets/img/logo.png" className="header-logo" />
            </Link>
          </div>
          <ul id="sdm" className="sidebar-menu">
            <li className="menu-header">Main</li>
            <li className="">
              <Link to="/" className="nav-link">
                <img
                  alt=""
                  src="assets/img/lefticon/dashboard.png"
                  className="leftIcons customIconWidthD"
                />
                <img
                  alt=""
                  src="assets/img/lefticon/dashboard2.png"
                  className="leftIcons customIconWidthD"
                />
                <span>Home</span>
              </Link>
            </li>
            <li className="">
              <Link className="nav-link" to="/availability">
                <img
                  alt=""
                  src="assets/img/lefticon/cald.png"
                  className="leftIcons"
                />
                <img
                  alt=""
                  src="assets/img/lefticon/cald2.png"
                  className="leftIcons"
                />
                <span>Availability</span>
              </Link>
            </li>
            <li className="">
              <Link className="nav-link" to="/rides">
                <img
                  alt=""
                  src="assets/img/lefticon/ride.png"
                  className="leftIcons"
                />
                <img
                  alt=""
                  src="assets/img/lefticon/ride2.png"
                  className="leftIcons"
                />
                <span>Rides</span>
              </Link>
            </li>
            <li className="">
              <Link className="nav-link" to="/garage">
                <img
                  alt=""
                  src="assets/img/lefticon/garage.png"
                  className="leftIcons"
                />
                <img
                  alt=""
                  src="assets/img/lefticon/garage2.png"
                  className="leftIcons"
                />
                <span>Garage</span>
              </Link>
            </li>
            <li className="">
              <Link className="nav-link" to="/driver">
                <img
                  alt=""
                  src="assets/img/lefticon/driver.png"
                  className="leftIcons"
                />
                <img
                  alt=""
                  src="assets/img/lefticon/driver2.png"
                  className="leftIcons"
                />
                <span>Drivers</span>
              </Link>
            </li>
            <li className="">
              <Link className="nav-link" to="/customer">
                <img
                  alt=""
                  src="assets/img/lefticon/customer.png"
                  className="leftIcons"
                />
                <img
                  alt=""
                  src="assets/img/lefticon/customer2.png"
                  className="leftIcons"
                />
                <span>Customers</span>
              </Link>
            </li>
            <li className="dropdown">
              <Link className="nav-link has-dropdown" to="/saleschart">
                <img
                  alt=""
                  src="assets/img/lefticon/analytics.png"
                  className="leftIcons"
                />
                <img
                  alt=""
                  src="assets/img/lefticon/analytics2.png"
                  className="leftIcons"
                />
                <span>Analytics</span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="nav-link" to="/saleschart">
                    Sales
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/carchart">
                    Cars
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/customerchart">
                    Customers
                  </Link>
                </li>
              </ul>
            </li>
            <li className="">
              <Link to="/payment" className="nav-link">
                <img
                  alt=""
                  src="assets/img/lefticon/payment.png"
                  className="leftIcons"
                />
                <img
                  alt=""
                  src="assets/img/lefticon/payment2.png"
                  className="leftIcons"
                />
                <span>Payments</span>
              </Link>
            </li>
            <li className="">
              <Link to="/deposit" className="nav-link">
                <img
                  alt=""
                  src="assets/img/lefticon/deposit.png"
                  className="leftIcons"
                />
                <img
                  alt=""
                  src="assets/img/lefticon/deposit2.png"
                  className="leftIcons"
                />
                <span>Deposits</span>
              </Link>
            </li>
            <li className="">
              <Link to="/marketing" className="nav-link">
                <img
                  alt=""
                  src="assets/img/lefticon/market.png"
                  className="leftIcons"
                />
                <img
                  alt=""
                  src="assets/img/lefticon/market2.png"
                  className="leftIcons"
                />
                <span>Marketing</span>
              </Link>
            </li>
            <li className="">
              <Link className="nav-link" to="/referral">
                <img
                  alt=""
                  src="assets/img/lefticon/refferal.png"
                  className="leftIcons"
                />
                <img
                  alt=""
                  src="assets/img/lefticon/refferal2.png"
                  className="leftIcons"
                />
                <span>Referrals</span>
              </Link>
            </li>
            <li className="">
              <Link to="/review" className="nav-link">
                <img
                  alt=""
                  src="assets/img/lefticon/review.png"
                  className="leftIcons"
                />
                <img
                  alt=""
                  src="assets/img/lefticon/review2.png"
                  className="leftIcons"
                />
                <span>Reviews</span>
              </Link>
            </li>
            <li className="">
              <Link to="/support" className="nav-link">
                <img
                  alt=""
                  src="assets/img/lefticon/support.png"
                  className="leftIcons"
                />
                <img
                  alt=""
                  src="assets/img/lefticon/support2.png"
                  className="leftIcons"
                />
                <span>Support</span>
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  )
}

export default Sidebar
