import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

const Garage = () => {
    function togClass() 
    {
       var element = document.getElementById("toggleClass");
       element.classList.toggle("chn");
    }
    
    function openDD() {
      document.getElementById("mySideDD").style.width = "100%";
    }

    function closeDD() {
      document.getElementById("mySideDD").style.width = "0";
    }

    const css = `
    .sidebar-menu li:nth-child(5)
    {
        position: relative;
        background-color: #de3255;
    }
    
    .sidebar-menu li:nth-child(5) a img:first-child 
    {
        display:none;
    }
    
    .sidebar-menu li:nth-child(5) a img:nth-child(2)
    {
        display:block;
    }
    
    .sidebar-menu li:nth-child(5) a span
    {
        color:#fff;
    }
    `;
    
  return (
    <div>
      <style>{css}</style>
      <Header />
      <Sidebar />

      {/* Main Content */}

      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Garage</h1>
          </div>
        </section>

        <section>
          <div className="row mb20">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="ccBtnWrap" onClick={togClass}>
                <button className="ccBtn" type="button">
                  <img
                  alt="" src="assets/img/lefticon/plus.png" />
                  Add New Car
                </button>
              </div>
            </div>
          </div>
          <div id="toggleClass" className="row chn">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4>Top Features</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>0-60</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>1/4 mile</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Exhaust</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Power</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Speed</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Seat</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Mileage</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="form-group mb-4">
                        <label className="">Car Sound</label>
                        <div className="customAddDriverIU">
                          <div id="image-preview" className="image-preview">
                            <label for="image-upload" id="image-label">
                              Upload car sound
                              <img
                              alt="" src="assets/img/lefticon/upload.png" />
                            </label>
                            <input type="file" name="image" id="image-upload" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-header customSpecs">
                    <h4>Specifications</h4>
                  </div>

                  <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="form-group">
                        <div className="dateRangeResultWrapper customRideDateRange resHide">
                          <label> Car Mfd. </label>
                          <input
                            type="text"
                            id="demo-2"
                            className="form-control form-control-sm"
                            placeholder="dd-mm-yyyy"
                          />
                          <p id="result-2">&nbsp;</p>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Price</label>
                        <select className="form-control">
                          <option>Select</option>
                          <option>$25.63 - $35.59</option>
                          <option>$25.63 - $35.59</option>
                          <option>$25.63 - $35.59</option>
                          <option>$25.63 - $35.59</option>
                          <option>$25.63 - $35.59</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Brand</label>
                        <select className="form-control">
                          <option>Select</option>
                          <option>Ferrari F8</option>
                          <option>Mercedes Benz AMG GT</option>
                          <option>Aston Martin Vanquish</option>
                          <option>Porsche 718</option>
                          <option>Alpine A110</option>
                          <option>Porsche 718 Boxster</option>
                          <option>McLaren 720S</option>
                          <option>BMW M2 Competition</option>
                          <option>Toyota GR Supra </option>
                          <option>Nissan GT-R</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Car Color</label>
                        <select className="form-control">
                          <option>Select</option>
                          <option>Red</option>
                          <option>White</option>
                          <option>Grey</option>
                          <option>Black</option>
                          <option>Yellow</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Car’s model </label>
                        <input type="text" className="form-control" />
                      </div>

                      <div className="form-group">
                        <label>Plate No</label>
                        <select className="form-control">
                          <option>Select</option>
                          <option>J92450</option>
                          <option>J92449</option>
                          <option>J92412</option>
                          <option>J92478</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" rows="5"></textarea>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="customBrandLogo">
                        <div className="form-group">
                          <label>Brand Logo</label>
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
                                    <h3>Logo</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <label>Car Page Images</label>
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
                                    <h3>Top View</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-group mt55">
                        <label>Car Images</label>
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
                                  <h3>Image1</h3>
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
                                  <h3>Image2</h3>
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
                                  <h3>Image3</h3>
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
                                  <h3>Image4</h3>
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
                                  <h3>Image5</h3>
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
                                  <h3>Image6</h3>
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
                                  <h3>Image7</h3>
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
                                  <h3>Image8</h3>
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
                                  <h3>Image9</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-footer text-right garageSubmitBtn">
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="customTabSection customGarageListingSect">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4>View Car List</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered"
                      id="save-stage"
                      style={{width:"100%"}}
                    >
                      <thead>
                        <tr>
                          <th>Status</th>
                          <th>Brand</th>
                          <th>Car’s Model</th>
                          <th>Plate No.</th>
                          <th>Car Mfd.</th>
                          <th>Car Color</th>
                          <th>Rented Price</th>
                          <th>Mileage</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <select className="form-control">
                              <option selected>Pause</option>
                              <option>Live</option>
                              <option>Draft</option>
                              <option>Deleted</option>
                            </select>
                          </td>
                          <td>Ferrari</td>
                          <td>Ferrari F8</td>
                          <td>J92450</td>
                          <td>Dec 10, 2018</td>
                          <td>Red</td>
                          <td>aed 1300</td>
                          <td>13.4kmpl</td>
                          <td className="actionTD">
                            <Link
                              to="#"
                              onClick={openDD}
                              data-toggle="modal_stop"
                              data-target=".bd-example-modal-lg"
                            >
                              <i className="fas fa-edit"></i>
                            </Link>
                            <Link to="#">
                              <i className="far fa-pause-circle"></i>
                            </Link>
                            <Link to="#">
                              <i className="far fa-copy"></i>
                            </Link>
                            <Link to="#">
                              <i className="fas fa-trash-alt"></i>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <select className="form-control">
                              <option>Pause</option>
                              <option selected>Live</option>
                              <option>Draft</option>
                              <option>Deleted</option>
                            </select>
                          </td>
                          <td>Ferrari</td>
                          <td>Ferrari F8</td>
                          <td>J92450</td>
                          <td>Dec 10, 2018</td>
                          <td>Red</td>
                          <td>aed 1300</td>
                          <td>13.4kmpl</td>
                          <td className="actionTD">
                            <Link
                              to="#"
                              onClick={openDD}
                              data-toggle="modal_stop"
                              data-target=".bd-example-modal-lg"
                            >
                              <i className="fas fa-edit"></i>
                            </Link>
                            <Link to="#">
                              <i className="far fa-pause-circle"></i>
                            </Link>
                            <Link to="#">
                              <i className="far fa-copy"></i>
                            </Link>
                            <Link to="#">
                              <i className="fas fa-trash-alt"></i>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <select className="form-control">
                              <option>Pause</option>
                              <option>Live</option>
                              <option selected>Draft</option>
                              <option>Deleted</option>
                            </select>
                          </td>
                          <td>Ferrari</td>
                          <td>Ferrari F8</td>
                          <td>J92450</td>
                          <td>Dec 10, 2018</td>
                          <td>Red</td>
                          <td>aed 1300</td>
                          <td>13.4kmpl</td>
                          <td className="actionTD">
                            <Link
                              to="#"
                              onClick={openDD}
                              data-toggle="modal_stop"
                              data-target=".bd-example-modal-lg"
                            >
                              <i className="fas fa-edit"></i>
                            </Link>
                            <Link to="#">
                              <i className="far fa-pause-circle"></i>
                            </Link>
                            <Link to="#">
                              <i className="far fa-copy"></i>
                            </Link>
                            <Link to="#">
                              <i className="fas fa-trash-alt"></i>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <select className="form-control">
                              <option>Pause</option>
                              <option>Live</option>
                              <option>Draft</option>
                              <option selected>Deleted</option>
                            </select>
                          </td>
                          <td>Ferrari</td>
                          <td>Ferrari F8</td>
                          <td>J92450</td>
                          <td>Dec 10, 2018</td>
                          <td>Red</td>
                          <td>aed 1300</td>
                          <td>13.4kmpl</td>
                          <td className="actionTD">
                            <Link
                              to="#"
                              onClick={openDD}
                              data-toggle="modal_stop"
                              data-target=".bd-example-modal-lg"
                            >
                              <i className="fas fa-edit"></i>
                            </Link>
                            <Link to="#">
                              <i className="far fa-pause-circle"></i>
                            </Link>
                            <Link to="#">
                              <i className="far fa-copy"></i>
                            </Link>
                            <Link to="#">
                              <i className="fas fa-trash-alt"></i>
                            </Link>
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

      <section id="car-edit-modal">
        <div
          className="modal fade bd-example-modal-lg"
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

      <div id="mySideDD" className="sideOpen">
        <Link to="javascript:void(0)" className="closebtn" onClick={closeDD}>
          &times;
        </Link>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4>Edit Detail</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Status</label>
                        <select className="form-control">
                          <option>Select</option>
                          <option>Pause</option>
                          <option>Live</option>
                          <option>Draft</option>
                          <option>Deleted</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Car’s Brand</label>
                        <select className="form-control">
                          <option>Select</option>
                          <option>Ferrari</option>
                          <option>Mercedes</option>
                          <option>Aston Martin</option>
                          <option>Porsche</option>
                          <option>Alpine</option>
                          <option>Porsche</option>
                          <option>McLaren</option>
                          <option>BMW</option>
                          <option>Toyota</option>
                          <option>Nissan</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Car’s Model</label>
                        <select className="form-control">
                          <option>Select</option>
                          <option>F8</option>
                          <option>MG GT</option>
                          <option>Vanquish</option>
                          <option>718</option>
                          <option>A110</option>
                          <option>718 Boxster</option>
                          <option>720S</option>
                          <option>Competition</option>
                          <option>GR Supra </option>
                          <option>GT-R</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Plate No.</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Date</label>
                        <input type="date" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Color</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Rented Price</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Mileage</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>

                  <div className="card-footer text-right garageSubmitBtn">
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Garage;
