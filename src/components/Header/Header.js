import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg main-navbar">
					<div className="form-inline mr-auto">
						<ul className="navbar-nav mr-3">
							<li>
								<a href="#" data-toggle="sidebar" className="nav-link nav-link-lg collapse-btn">
									<i className="fas fa-bars"></i>
								</a>
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
							<a href="#" data-toggle="dropdown"
							  className="nav-link notification-toggle nav-link-lg beep"><i className="far fa-bell"></i></a>
							<div className="dropdown-menu dropdown-list dropdown-menu-right">
							  <div className="dropdown-header">Notifications
								<div className="float-right">
								  <a href="#">Mark All As Read</a>
								</div>
							  </div>
							  <div className="dropdown-list-content dropdown-list-icons">
								<a href="#" className="dropdown-item dropdown-item-unread">
								  <span className="dropdown-item-icon bg-primary text-white">
									<i className="fas fa-shopping-cart"></i>
								  </span>
								  <span className="dropdown-item-desc">
									New Order
									<span className="time">3 Hours Ago</span>
								  </span>
								</a>
								<a href="#" className="dropdown-item dropdown-item-unread">
								  <span className="dropdown-item-icon bg-info text-white">
									<i className="fa fa-info-circle" aria-hidden="true"></i>
								  </span>
								  <span className="dropdown-item-desc">
									Application Error
									<span className="time">7 Hours Ago</span>
								  </span>
								</a>
								<a href="#" className="dropdown-item">
								  <span className="dropdown-item-icon bg-success text-white">
									<i className="fa fa-power-off" aria-hidden="true"></i>
								  </span>
								  <span className="dropdown-item-desc">
									Server restarted
									<span className="time">9 Hours Ago</span>
								  </span>
								</a>
								<a href="#" className="dropdown-item">
								  <span className="dropdown-item-icon bg-danger text-white">
									<i className="fa fa-server" aria-hidden="true"></i>
								  </span>
								  <span className="dropdown-item-desc">
									Your Subscription Expired
									<span className="time">10 Hours Ago</span>
								  </span>
								</a>
								<a href="#" className="dropdown-item">
								  <span className="dropdown-item-icon bg-purple text-white">
									<i className="fa fa-user-plus" aria-hidden="true"></i>
								  </span>
								  <span className="dropdown-item-desc">
									You have <b>4</b> new followers
									<span className="time">Yesterday</span>
								  </span>
								</a>
							  </div>
							  <div className="dropdown-footer text-center">
								<a href="#">View All <i className="fas fa-chevron-right"></i></a>
							  </div>
							</div>
						</li>

						<li className="dropdown"><a href="#" data-toggle="dropdown"
							  className="nav-link dropdown-toggle nav-link-lg nav-link-user">
							  <img alt="image" src="assets/img/user.png" className="user-img-radious-style" />
							  <span className="d-sm-none d-lg-inline-block"></span></a>
							<div className="dropdown-menu dropdown-menu-right">
							  <div className="dropdown-title">Hello Jessica Hill</div>
							  <a href="profile.php" className="dropdown-item has-icon">
								<i className="fa fa-user-alt"></i> Profile
							  </a>
							  <a href="manageAccess.php" className="dropdown-item has-icon">
								<i className="fa fa-pen"></i> Manage Access
							  </a>
							  <div className="dropdown-divider"></div>
							  <a href="#" className="dropdown-item has-icon text-danger">
								<i className="fas fa-sign-out-alt"></i> Logout
							  </a>
							</div>
						</li>
									
					</ul>
				</nav>
    </div>
  )
}

export default Header
