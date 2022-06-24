import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg main-navbar">
					<div className="form-inline mr-auto">
						<ul className="navbar-nav mr-3">
							<li>
								<Link to="#" data-toggle="sidebar" className="nav-link nav-link-lg collapse-btn">
									<i className="fas fa-bars"></i>
								</Link>
							</li>
							<li>
								<div className="search-group">
									<span className="nav-link nav-link-lg" id="search">
										<i className="fa fa-search" aria-hidden="true"></i>
									</span>
									<input type="text" className="search-control" placeholder="Search" aria-label="search" aria-describedby="search" />
								</div>
							</li>
						</ul>
					</div>
					<ul className="navbar-nav navbar-right">
							
						<li className="dropdown dropdown-list-toggle">
							<Link to="#" data-toggle="dropdown"
							  className="nav-link notification-toggle nav-link-lg beep"><i className="far fa-bell"></i></Link>
							<div className="dropdown-menu dropdown-list dropdown-menu-right">
							  <div className="dropdown-header">Notifications
								<div className="float-right">
								  <Link to="#">Mark All As Read</Link>
								</div>
							  </div>
							  <div className="dropdown-list-content dropdown-list-icons">
								<Link to="#" className="dropdown-item dropdown-item-unread">
								  <span className="dropdown-item-icon bg-primary text-white">
									<i className="fas fa-shopping-cart"></i>
								  </span>
								  <span className="dropdown-item-desc">
									New Order
									<span className="time">3 Hours Ago</span>
								  </span>
								</Link>
								<Link to="#" className="dropdown-item dropdown-item-unread">
								  <span className="dropdown-item-icon bg-info text-white">
									<i className="fa fa-info-circle" aria-hidden="true"></i>
								  </span>
								  <span className="dropdown-item-desc">
									Application Error
									<span className="time">7 Hours Ago</span>
								  </span>
								</Link>
								<Link to="#" className="dropdown-item">
								  <span className="dropdown-item-icon bg-success text-white">
									<i className="fa fa-power-off" aria-hidden="true"></i>
								  </span>
								  <span className="dropdown-item-desc">
									Server restarted
									<span className="time">9 Hours Ago</span>
								  </span>
								</Link>
								<Link to="#" className="dropdown-item">
								  <span className="dropdown-item-icon bg-danger text-white">
									<i className="fa fa-server" aria-hidden="true"></i>
								  </span>
								  <span className="dropdown-item-desc">
									Your Subscription Expired
									<span className="time">10 Hours Ago</span>
								  </span>
								</Link>
								<Link to="#" className="dropdown-item">
								  <span className="dropdown-item-icon bg-purple text-white">
									<i className="fa fa-user-plus" aria-hidden="true"></i>
								  </span>
								  <span className="dropdown-item-desc">
									You have <b>4</b> new followers
									<span className="time">Yesterday</span>
								  </span>
								</Link>
							  </div>
							  <div className="dropdown-footer text-center">
								<Link to="#">View All <i className="fas fa-chevron-right"></i></Link>
							  </div>
							</div>
						</li>

						<li className="dropdown"><Link to="#" data-toggle="dropdown"
							  className="nav-link dropdown-toggle nav-link-lg nav-link-user">
							  <img alt="" src="assets/img/user.png" className="user-img-radious-style" />
							  <span className="d-sm-none d-lg-inline-block"></span></Link>
							<div className="dropdown-menu dropdown-menu-right">
							  <div className="dropdown-title">Hello Jessica Hill</div>
							  <Link to="/profile" className="dropdown-item has-icon">
								<i className="fa fa-user-alt"></i> Profile
							  </Link>
							  <Link to="/manage-access" className="dropdown-item has-icon">
								<i className="fa fa-pen"></i> Manage Access
							  </Link>
							  <div className="dropdown-divider"></div>
							  <Link to="#" className="dropdown-item has-icon text-danger">
								<i className="fas fa-sign-out-alt"></i> Logout
							  </Link>
							</div>
						</li>
									
					</ul>
				</nav>
    </div>
  )
}

export default Header
