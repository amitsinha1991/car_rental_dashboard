import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import $ from 'jquery'

const Customer = () => {
  $(document).ready(function() {
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 3,
            nav: false
          },
          1000: {
            items: 3,
            nav: true,
            loop: false,
            margin: 20
          }
        }
      })
    })

  const css = `.sidebar-menu li:nth-child(7)
    {
        position: relative;
        background-color: #de3255;
    }
    
    .sidebar-menu li:nth-child(7) a img:first-child 
    {
        display:none;
    }
    
    .sidebar-menu li:nth-child(7) a img:nth-child(2)
    {
        display:block;
    }
    
    
    .sidebar-menu li:nth-child(7) a span
    {
        color:#fff;
    }`;

  return (
    <div>
      <style>{css}</style>
      <Header />
      <Sidebar />

      {/* Main Content */}

      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Customer</h1>
          </div>
        </section>

        <section className="customTabSection">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive customerTableWrap">
                    <table
                      className="table table-bordered"
                      id="save-stage"
                      style={{width:"100%"}}
                    >
                      <thead>
                        <tr>
                          <th>S.no</th>
                          <th>Name</th>
                          <th>Surname</th>
                          <th>Email</th>
                          <th>Mobile</th>
                          <th>Country</th>
                          <th>Passport</th>
                          <th>License</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#"> 1 </a>
                          </td>
                          <td>
                            <a href="#"> Mattew </a>
                          </td>
                          <td>
                            <a href="#"> Wade </a>
                          </td>
                          <td>
                            <a href="#"> test@gmail.com </a>
                          </td>
                          <td>
                            <a href="#"> 9123456789 </a>
                          </td>
                          <td>
                            <a href="#"> Dubai </a>
                          </td>
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
                          <td className="actionTD actionSicon">
                            <div className="customActionWrapper dlAction">
                              <a
                                href="customer_detail.php"
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
                        <tr>
                          <td>
                            <a href="#"> 2 </a>
                          </td>
                          <td>
                            <a href="#"> Bernard </a>
                          </td>
                          <td>
                            <a href="#"> Smith </a>
                          </td>
                          <td>
                            <a href="#"> bsimth74@gmail.com </a>
                          </td>
                          <td>
                            <a href="#"> 9123456789 </a>
                          </td>
                          <td>
                            <a href="#"> Dubai </a>
                          </td>
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
                          <td className="actionTD actionSicon">
                            <div className="customActionWrapper dlAction">
                              <a
                                href="customer_detail.php"
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
                        <tr>
                          <td>
                            <a href="#"> 3 </a>
                          </td>
                          <td>
                            <a href="#"> Katene </a>
                          </td>
                          <td>
                            <a href="#"> Clarke </a>
                          </td>
                          <td>
                            <a href="#"> ktclrke74@gmail.com </a>
                          </td>
                          <td>
                            <a href="#"> 9123456789 </a>
                          </td>
                          <td>
                            <a href="#"> Dubai </a>
                          </td>
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
                          <td className="actionTD actionSicon">
                            <div className="customActionWrapper dlAction">
                              <a
                                href="customer_detail.php"
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
                        <tr>
                          <td>
                            <a href="#"> 4 </a>
                          </td>
                          <td>
                            <a href="#"> Henry </a>
                          </td>
                          <td>
                            <a href="#"> Cooper </a>
                          </td>
                          <td>
                            <a href="#"> henrycooper22@gmail.com </a>
                          </td>
                          <td>
                            <a href="#"> 9123456789 </a>
                          </td>
                          <td>
                            <a href="#"> Dubai </a>
                          </td>
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
                          <td className="actionTD actionSicon">
                            <div className="customActionWrapper dlAction">
                              <a
                                href="customer_detail.php"
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
                        <tr>
                          <td>
                            <a href="#"> 5 </a>
                          </td>
                          <td>
                            <a href="#"> Matt </a>
                          </td>
                          <td>
                            <a href="#"> Henry </a>
                          </td>
                          <td>
                            <a href="#"> matthenry521@gmail.com </a>
                          </td>
                          <td>
                            <a href="#"> 9123456789 </a>
                          </td>
                          <td>
                            <a href="#"> Dubai </a>
                          </td>
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
                          <td className="actionTD actionSicon">
                            <div className="customActionWrapper dlAction">
                              <a
                                href="customer_detail.php"
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
                        <tr>
                          <td>
                            <a href="#"> 6 </a>
                          </td>
                          <td>
                            <a href="#"> Chad </a>
                          </td>
                          <td>
                            <a href="#"> Bowes </a>
                          </td>
                          <td>
                            <a href="#"> chadbowes95@gmail.com </a>
                          </td>
                          <td>
                            <a href="#"> 9123456789 </a>
                          </td>
                          <td>
                            <a href="#"> Dubai </a>
                          </td>
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
                          <td className="actionTD actionSicon">
                            <div className="customActionWrapper dlAction">
                              <a
                                href="customer_detail.php"
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
                        <tr>
                          <td>
                            <a href="#"> 7 </a>
                          </td>
                          <td>
                            <a href="#"> Tom </a>
                          </td>
                          <td>
                            <a href="#"> Latham </a>
                          </td>
                          <td>
                            <a href="#"> tomlatham4152@gmail.com </a>
                          </td>
                          <td>
                            <a href="#"> 9123456789 </a>
                          </td>
                          <td>
                            <a href="#"> Dubai </a>
                          </td>
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
                          <td className="actionTD actionSicon">
                            <div className="customActionWrapper dlAction">
                              <a
                                href="customer_detail.php"
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
                        <tr>
                          <td>
                            <a href="#"> 8 </a>
                          </td>
                          <td>
                            <a href="#"> Leo </a>
                          </td>
                          <td>
                            <a href="#"> Carter </a>
                          </td>
                          <td>
                            <a href="#"> leo_carter147@gmail.com </a>
                          </td>
                          <td>
                            <a href="#"> 9123456789 </a>
                          </td>
                          <td>
                            <a href="#"> Dubai </a>
                          </td>
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
                          <td className="actionTD actionSicon">
                            <div className="customActionWrapper dlAction">
                              <a
                                href="customer_detail.php"
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
                        <tr>
                          <td>
                            <a href="#"> 9 </a>
                          </td>
                          <td>
                            <a href="#"> Daryl </a>
                          </td>
                          <td>
                            <a href="#"> Mitchell </a>
                          </td>
                          <td>
                            <a href="#"> daryl_mitch786@gmail.com </a>
                          </td>
                          <td>
                            <a href="#"> 9123456789 </a>
                          </td>
                          <td>
                            <a href="#"> Dubai </a>
                          </td>
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
                          <td className="actionTD actionSicon">
                            <div className="customActionWrapper dlAction">
                              <a
                                href="customer_detail.php"
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
                        <tr>
                          <td>
                            <a href="#"> 10 </a>
                          </td>
                          <td>
                            <a href="#"> Todd </a>
                          </td>
                          <td>
                            <a href="#"> Astle </a>
                          </td>
                          <td>
                            <a href="#"> todd_astle_14@gmail.com </a>
                          </td>
                          <td>
                            <a href="#"> 9123456789 </a>
                          </td>
                          <td>
                            <a href="#"> Dubai </a>
                          </td>
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
                          <td className="actionTD actionSicon">
                            <div className="customActionWrapper dlAction">
                              <a
                                href="customer_detail.php"
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

      <section id="editProfile-modal">
        <div
          className="modal fade editProfile"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6" iii>
                    <div className=" car-img">
                      <img
                        alt=""
                        src="assets/img/modal-car.jpg"
                        className="img-fluid"
                      />
                    </div>
                  </div>

                  <div className="col-md-6 cc">
                    <div className="edit-content">
                      <h5 className="modal-title" id="myLargeModalLabel">
                        Edit Car Details
                      </h5>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control datepicker"
                              placeholder="Car Mfd."
                            />
                          </div>

                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Car’s model"
                            />
                          </div>

                          <div className="form-group">
                            <select className="form-control">
                              <option>Price</option>
                              <option>$25.63 - $35.59</option>
                              <option>$25.63 - $35.59</option>
                              <option>$25.63 - $35.59</option>
                              <option>$25.63 - $35.59</option>
                              <option>$25.63 - $35.59</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <select className="form-control">
                              <option>Car Color</option>
                              <option>Red</option>
                              <option>White</option>
                              <option>Grey</option>
                              <option>Black</option>
                              <option>Yellow</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Brand"
                            />
                          </div>

                          <div className="form-group">
                            <select className="form-control">
                              <option>City</option>
                              <option>Option 1</option>
                              <option>Option 2</option>
                              <option>Option 3</option>
                              <option>Option 4</option>
                              <option>Option 5</option>
                              <option>Option 6</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              placeholder="Description"
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Upload Image</label>
                            <div className="upload-img">
                              <div className="Neon Neon-theme-dragdropbox">
                                <input
                                  name="files[]"
                                  id="filer_input2"
                                  multiple="multiple"
                                  type="file"
                                />
                                <div className="Neon-input-dragDrop">
                                  <div className="Neon-input-inner">
                                    <div className="Neon-input-icon">
                                      <i className="fa fa-file-image-o"></i>
                                    </div>
                                    <div className="Neon-input-text">
                                      <i className="fas fa-camera-retro"></i>
                                      <h3>Front View</h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="Neon Neon-theme-dragdropbox">
                                <input
                                  name="files[]"
                                  id="filer_input2"
                                  multiple="multiple"
                                  type="file"
                                />
                                <div className="Neon-input-dragDrop">
                                  <div className="Neon-input-inner">
                                    <div className="Neon-input-icon">
                                      <i className="fa fa-file-image-o"></i>
                                    </div>
                                    <div className="Neon-input-text">
                                      <i className="fas fa-camera-retro"></i>
                                      <h3>Back View</h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-left">
                        <button className="btn btn-primary">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          className="modal fade"
          id="centerModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Edit Customer Details
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
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label>Surname</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label>Mobile</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label>Country</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="form-group mb-4">
                      <label className="">Profile Pic</label>
                      <div className="">
                        <div id="image-preview" className="image-preview">
                          <label for="image-upload" id="image-label">
                            Upload Profile Pic
                          </label>
                          <input type="file" name="image" id="image-upload" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer bg-whitesmoke br">
                <button type="button" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Customer;
