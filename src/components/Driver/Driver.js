import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

const Driver = () => {
  function togClass() {
    var element = document.getElementById("toggleClass");
    element.classList.toggle("chn");
  }

  const css = `
    .sidebar-menu li:nth-child(6)
    {
        position: relative;
        background-color: #de3255;
    }

    .sidebar-menu li:nth-child(6) a img:first-child 
    {
        display:none;
    }

    .sidebar-menu li:nth-child(6) a img:nth-child(2)
    {
        display:block;
    }

    .sidebar-menu li:nth-child(6) a span
    {
        color:#fff;
    }`;

  return (
    <div>
      <Header />
      <Sidebar />

      {/* Main Content */}

      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Driver</h1>
          </div>
        </section>
        <section>
          <div className="row mb20">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="ccBtnWrap" onclick="togClass()">
                <button className="ccBtn" type="button">
                  <img alt="" src="assets/img/lefticon/plus.png" />
                  Add Driver
                </button>
              </div>
            </div>
          </div>
          <div id="toggleClass" className="row chn">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4>Add Driver</h4>
                </div>

                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Surname</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Age</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Alternative Number</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12">
                      <div className="form-group mb-4">
                        <label className="">Profile Pic</label>
                        <div className="customAddDriverIU">
                          <div id="image-preview" className="image-preview">
                            <label for="image-upload" id="image-label">
                              Upload Profile Pic
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
                    <div className="col-lg-3 col-md-12 col-sm-12">
                      <div className="form-group mb-4">
                        <label className="">Passport</label>
                        <div className="customAddDriverIU">
                          <div
                            id="image-preview"
                            className="image-preview uplPP"
                          >
                            <label for="image-upload" id="image-label">
                              Upload Passport
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
                    <div className="col-lg-3 col-md-12 col-sm-12">
                      <div className="form-group mb-4">
                        <label className="">Driving License</label>
                        <div className="customAddDriverIU">
                          <div
                            id="image-preview"
                            className="image-preview uplDL"
                          >
                            <label for="image-upload" id="image-label">
                              Upload Driving License
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
                  <div className="addDriverBtnWrap">
                    <button type="button" className="btn btn-primary">
                      Add Driver
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="customTabSection">
          <div className="row addedDriverListing">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4>Drivers Listing</h4>
                </div>

                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered driverTableList"
                      id="save-stage"
                      style={{ width: "100%" }}
                    >
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Surname</th>
                          <th>Age</th>
                          <th>Number</th>
                          <th>Email</th>
                          <th>Passport</th>
                          <th>License</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Mathew</td>
                          <td>Smith</td>
                          <td>29</td>
                          <td>9123456789</td>
                          <td>test1@gmail.com</td>
                          <td>
                            <a className="passp_a_wrap" href="#">
                              <img
                                alt=""
                                className="docImgIcon"
                                src="assets/img/oth/passport.svg"
                              />
                            </a>
                          </td>
                          <td>
                            <a className="licn_a_wrap" href="#">
                              <img
                                alt=""
                                className="docImgIcon"
                                src="assets/img/oth/license.svg"
                              />
                            </a>
                          </td>
                          <td>
                            <div className="customActionWrapper dlAction">
                              <a
                                href="driver_detail.php"
                                className="btn btn-icon btn-danger"
                              >
                                <i className="far fa-eye"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-icon btn-danger"
                                data-toggle="modal"
                                data-target="#basicModal"
                              >
                                <i className="fas fa-trash-alt"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        className="modal fade bd-example-modal-lg"
        id="leaveDetail"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Release Amount
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body modalEditDriver">
              <div className="table-responsive">
                <table
                  className="table table-bordered driverTableList"
                  id="save-stage"
                  style={{width:"100%"}}
                >
                  <thead>
                    <tr>
                      <th>S.no</th>
                      <th>Name</th>
                      <th>Number</th>
                      <th>Email</th>
                      <th>Date</th>
                      <th>Leave Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mathew</td>
                      <td>9123456789</td>
                      <td>test1@gmail.com</td>
                      <td>12-01-2022</td>
                      <td>
                        <div className="sickLeave">Sick Leave</div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Mathew</td>
                      <td>9123456789</td>
                      <td>test2@gmail.com</td>
                      <td>15-01-2022</td>
                      <td>
                        <div className="paidLeave">Paid Leave</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="centerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalCenterTitle">Release Amount</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body modalEditDriver">
						<div className="row">
							<div className="col-lg-6 col-md-12 col-sm-12">
								<div className="form-group">
								  <label>Username</label>
								  <input type="text" className="form-control" />
								</div>
							</div>
							<div className="col-lg-6 col-md-12 col-sm-12">
								<div className="form-group">
								  <label>Password</label>
								  <input type="text" className="form-control"/>
								</div>
							</div>
							<div className="col-lg-6 col-md-12 col-sm-12">
								<div className="form-group">
								  <label>Name</label>
								  <input type="text" className="form-control"/>
								</div>
							</div>
							<div className="col-lg-6 col-md-12 col-sm-12">
								<div className="form-group">
									<label>Age</label>
									<input type="text" className="form-control"/>
								</div>
							</div>									
							<div className="col-lg-6 col-md-12 col-sm-12">
								<div className="form-group">
									<label>Phone Number</label>
									<input type="text" className="form-control"/>
								</div>
							</div>									
							<div className="col-lg-6 col-md-12 col-sm-12">
								<div className="form-group">
									<label>Alternative Number</label>
									<input type="text" className="form-control"/>
								</div>
							</div>
							<div className="col-lg-6 col-md-12 col-sm-12">
								<div className="form-group">
									<label>Email</label>
									<input type="text" className="form-control"/>
								</div>
							</div>
							<div className="col-lg-6 col-md-12 col-sm-12">
								<div className="form-group mb-4">
									<label className="">
										Profile Pic
									</label>
									<div className="">
										<div id="image-preview" className="image-preview">
											<label for="image-upload" id="image-label">
												Upload Profile Pic
												<img alt="" src="assets/img/lefticon/upload.png"/>
											</label>
											<input type="file" name="image" id="image-upload"/>
										</div>
									</div>
								</div>
							</div>
						</div>					
					</div>
					<div className="modal-footer bg-whitesmoke br">
						<button type="button" className="btn btn-primary">Submit</button>
					</div>
				</div>
			</div>
        </div>		

        <div className="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Confirmation</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body deleteMsg">
                Are you sure to delete this record ?
              </div>
              <div className="modal-footer bg-whitesmoke br">
                <button type="button" className="btn btn-secondary">Cancel</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal">Delete</button>
              </div>
            </div>
          </div>
        </div>


      <Footer />
    </div>
  );
};

export default Driver;
