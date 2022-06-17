import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <div className="main-sidebar sidebar-style-2">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <a href="index.php">
              <img alt="" src="assets/img/logo.png" className="header-logo" />
            </a>
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
              <a className="nav-link" href="availMang.php">
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
              </a>
            </li>
            <li className="">
              <a className="nav-link" href="rides.php">
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
              </a>
            </li>
            <li className="">
              <a className="nav-link" href="garage.php">
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
              </a>
            </li>
            <li className="">
              <a className="nav-link" href="driver.php">
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
              </a>
            </li>
            <li className="">
              <a className="nav-link" href="customer.php">
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
              </a>
            </li>
            <li className="dropdown">
              <a className="nav-link has-dropdown" href="Asales.php">
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
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="nav-link" href="Asales.php">
                    Sales
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="Acar_charts.php">
                    Cars
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="Acust_charts.php">
                    Customers
                  </a>
                </li>
              </ul>
            </li>
            <li className="">
              <a className="nav-link" href="payment.php">
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
              </a>
            </li>
            <li className="">
              <a className="nav-link" href="deposit.php">
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
              </a>
            </li>
            <li className="">
              <a className="nav-link" href="market.php">
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
              </a>
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
