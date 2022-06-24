import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

const Rides = () => {

    function togClass() 
    {
       var element = document.getElementById("toggleClass");
       element.classList.toggle("chn");
    }

    const css = `
    .sidebar-menu li:nth-child(4)
    {
        position: relative;
        background-color: #de3255;
    }
    
    .sidebar-menu li:nth-child(4) a img:first-child 
    {
        display:none;
    }
    
    .sidebar-menu li:nth-child(4) a img:nth-child(2)
    {
        display:block;
    }
    
    
    .sidebar-menu li:nth-child(4) a span
    {
        color:#fff;
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
            <h1>Rides</h1>
          </div>
        </section>

        <section>
          <div className="row mb20">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="ccBtnWrap" >
                <button className="ccBtn" type="button" onClick={togClass}>
                  <img alt="" src="assets/img/lefticon/plus.png" />
                  Add Ride
                </button>
              </div>
            </div>
          </div>
          <div id="toggleClass" className="row chn">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4>Add Ride</h4>
                </div>
                <div className="card-body customCB_rides">
                  <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12 mb20">
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

                    <div className="col-lg-3 col-md-12 col-sm-12 mb20">
                      <div className="form-group">
                        <label>Car's model</label>
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

                    <div className="col-lg-3 col-md-12 col-sm-12 mb20">
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

                    <div className="col-lg-3 col-md-12 col-sm-12 mb20">
                      <div className="form-group">
                        <label> Start Date </label>
                        <input
                          type="date"
                          className="form-control form-control-sm customInputHeight"
                          placeholder="dd-mm-yyyy"
                        />
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-12 col-sm-12 mb20">
                      <div className="form-group">
                        <label>Start Time</label>
                        <input
                          type="time"
                          className="form-control datepicker"
                          placeholder="dd-mm-yy"
                        />
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-12 col-sm-12 mb20">
                      <div className="form-group">
                        <label> End Date </label>
                        <input
                          type="date"
                          className="form-control form-control-sm customInputHeight"
                          placeholder="dd-mm-yyyy"
                        />
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-12 col-sm-12 mb20">
                      <div className="form-group">
                        <label>End Time</label>
                        <input
                          type="time"
                          className="form-control datepicker"
                          placeholder="dd-mm-yy"
                        />
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-12 col-sm-12 mb20">
                      <div className="form-group">
                        <label>Assigned Driver</label>
                        <select className="form-control">
                          <option>Select</option>
                          <option>Haider</option>
                          <option>Mitchell</option>
                          <option>Jevento</option>
                          <option>Pathishon</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-12 col-sm-12 mb20">
                      <div className="form-group">
                        <label>Location</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-right customCB_ridesFooter">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="customTabSection">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="ridesHides">Upcoming Rides </h4>
                  <span className="ridesNumber"> (2,123) </span>
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
                          <th>Car's Brand</th>
                          <th>Car's Model</th>
                          <th>Plate No</th>
                          <th>Start Date</th>
                          <th>End Date</th>
                          <th>Duration</th>
                          <th>Registration Type</th>
                          <th>Email Id</th>
                          <th>Assigned Driver</th>
                          <th>Change Driver</th>
                          <th>Location</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Ferrari</td>
                          <td>F8</td>
                          <td>J92450</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td>On Platform</td>
                          <td>test1@gmail.com</td>
                          <td>Haider</td>
                          <td>
                            <select className="form-control">
                              <option selected>Haider</option>
                              <option>Mattew</option>
                              <option>Pattrick</option>
                              <option>Andrew</option>
                            </select>
                          </td>
                          <td>
                            <Link to="map.php">
                              Villa 6, The Terraces, Jumeirah, Dubai
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Mercedes</td>
                          <td>Benz AMG GT</td>
                          <td>J92449</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td>Off Platform</td>
                          <td>test2@gmail.com</td>
                          <td>Haider</td>
                          <td>
                            <select className="form-control customSelectRborder">
                              <option selected>Haider</option>
                              <option>Mattew</option>
                              <option>Pattrick</option>
                              <option>Andrew</option>
                            </select>
                          </td>
                          <td>
                            <Link to="map.php">
                              Villa 6, The Terraces, Jumeirah, Dubai
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Aston Martin</td>
                          <td>Vanquish</td>
                          <td>J92445</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td>On Platform</td>
                          <td>test3@gmail.com</td>
                          <td>Haider</td>
                          <td>
                            <select className="form-control customSelectRborder">
                              <option selected>Haider</option>
                              <option>Mattew</option>
                              <option>Pattrick</option>
                              <option>Andrew</option>
                            </select>
                          </td>
                          <td>
                            <Link to="map.php">
                              Villa 6, The Terraces, Jumeirah, Dubai
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Porsche</td>
                          <td>718</td>
                          <td>J92412</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td>Haider</td>
                          <td>On Platform</td>
                          <td>test4@gmail.com</td>
                          <td>
                            <select className="form-control customSelectRborder">
                              <option selected>Haider</option>
                              <option>Mattew</option>
                              <option>Pattrick</option>
                              <option>Andrew</option>
                            </select>
                          </td>
                          <td>
                            <Link to="map.php">
                              Villa 6, The Terraces, Jumeirah, Dubai
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Alpine</td>
                          <td>A110</td>
                          <td>J92478</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td>Off Platform</td>
                          <td>test5@gmail.com</td>
                          <td>Haider</td>
                          <td>
                            <select className="form-control customSelectRborder">
                              <option selected>Haider</option>
                              <option>Mattew</option>
                              <option>Pattrick</option>
                              <option>Andrew</option>
                            </select>
                          </td>
                          <td>
                            <Link to="map.php">
                              Villa 6, The Terraces, Jumeirah, Dubai
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>McLaren</td>
                          <td>720S</td>
                          <td>J92567</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td>Off Platform</td>
                          <td>test5@gmail.com</td>
                          <td>Haider</td>
                          <td>
                            <select className="form-control customSelectRborder">
                              <option selected>Haider</option>
                              <option>Mattew</option>
                              <option>Pattrick</option>
                              <option>Andrew</option>
                            </select>
                          </td>
                          <td>
                            <Link to="map.php">
                              Villa 6, The Terraces, Jumeirah, Dubai
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>BMW</td>
                          <td>M2 Competition</td>
                          <td>J97825</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td>Off Platform</td>
                          <td>test5@gmail.com</td>
                          <td>Haider</td>
                          <td>
                            <select className="form-control customSelectRborder">
                              <option selected>Haider</option>
                              <option>Mattew</option>
                              <option>Pattrick</option>
                              <option>Andrew</option>
                            </select>
                          </td>
                          <td>
                            <Link to="map.php">
                              Villa 6, The Terraces, Jumeirah, Dubai
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Toyota</td>
                          <td>GR Supra</td>
                          <td>J92449</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td>Off Platform</td>
                          <td>test5@gmail.com</td>
                          <td>Haider</td>
                          <td>
                            <select className="form-control customSelectRborder">
                              <option selected>Haider</option>
                              <option>Mattew</option>
                              <option>Pattrick</option>
                              <option>Andrew</option>
                            </select>
                          </td>
                          <td>
                            <Link to="map.php">
                              Villa 6, The Terraces, Jumeirah, Dubai
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Nissan</td>
                          <td>GT-R</td>
                          <td>J91575</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td>Off Platform</td>
                          <td>test5@gmail.com</td>
                          <td>Haider</td>
                          <td>
                            <select className="form-control customSelectRborder">
                              <option selected>Haider</option>
                              <option>Mattew</option>
                              <option>Pattrick</option>
                              <option>Andrew</option>
                            </select>
                          </td>
                          <td>
                            <Link to="map.php">
                              Villa 6, The Terraces, Jumeirah, Dubai
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

        <section className="customTabSection">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="ridesHides">Ending Rides</h4>
                  <span className="ridesNumber"> (2,123) </span>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered"
                      id="table-2"
                      style={{width:"100%"}}
                    >
                      <thead>
                        <tr>
                          <th>Car's Brand</th>
                          <th>Car's Model</th>
                          <th>Plate No</th>
                          <th>Start Date</th>
                          <th>End Date</th>
                          <th>Duration</th>
                          <th>Assigned Driver</th>
                          <th>Change Driver</th>
                          <th>Location</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Ferrari</td>
                          <td>F8</td>
                          <td>J92450</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td>Haider</td>
                          <td>
                            <select className="form-control customSelectRborder">
                              <option selected>Haider</option>
                              <option>Mattew</option>
                              <option>Pattrick</option>
                              <option>Andrew</option>
                            </select>
                          </td>
                          <td>
                            <Link to="map.php">
                              Villa 6, The Terraces, Jumeirah, Dubai
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Mercedes Benz</td>
                          <td>AMG GT</td>
                          <td>J92449</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td>Haider</td>
                          <td>
                            <select className="form-control customSelectRborder">
                              <option selected>Haider</option>
                              <option>Mattew</option>
                              <option>Pattrick</option>
                              <option>Andrew</option>
                            </select>
                          </td>
                          <td>
                            <Link to="map.php">
                              Villa 6, The Terraces, Jumeirah, Dubai
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Aston Martin</td>
                          <td>Vanquish</td>
                          <td>J92445</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td>Haider</td>
                          <td>
                            <select className="form-control customSelectRborder">
                              <option selected>Haider</option>
                              <option>Mattew</option>
                              <option>Pattrick</option>
                              <option>Andrew</option>
                            </select>
                          </td>
                          <td>
                            <Link to="map.php">
                              Villa 6, The Terraces, Jumeirah, Dubai
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Porsche</td>
                          <td>718</td>
                          <td>J92412</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td>Haider</td>
                          <td>
                            <select className="form-control customSelectRborder">
                              <option selected>Haider</option>
                              <option>Mattew</option>
                              <option>Pattrick</option>
                              <option>Andrew</option>
                            </select>
                          </td>
                          <td>
                            <Link to="map.php">
                              Villa 6, The Terraces, Jumeirah, Dubai
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Alpine</td>
                          <td>A110</td>
                          <td>J92478</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td>Haider</td>
                          <td>
                            <select className="form-control customSelectRborder">
                              <option selected>Haider</option>
                              <option>Mattew</option>
                              <option>Pattrick</option>
                              <option>Andrew</option>
                            </select>
                          </td>
                          <td>
                            <Link to="map.php">
                              Villa 6, The Terraces, Jumeirah, Dubai
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Porsche</td>
                          <td>718 Boxster</td>
                          <td>J91449</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td>Haider</td>
                          <td>
                            <select className="form-control customSelectRborder">
                              <option selected>Haider</option>
                              <option>Mattew</option>
                              <option>Pattrick</option>
                              <option>Andrew</option>
                            </select>
                          </td>
                          <td>
                            <Link to="map.php">
                              Villa 6, The Terraces, Jumeirah, Dubai
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>McLaren</td>
                          <td>720S</td>
                          <td>J92567</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td>Haider</td>
                          <td>
                            <select className="form-control customSelectRborder">
                              <option selected>Haider</option>
                              <option>Mattew</option>
                              <option>Pattrick</option>
                              <option>Andrew</option>
                            </select>
                          </td>
                          <td>
                            <Link to="map.php">
                              Villa 6, The Terraces, Jumeirah, Dubai
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>BMW</td>
                          <td>M2 Competition</td>
                          <td>J97825</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td>Haider</td>
                          <td>
                            <select className="form-control customSelectRborder">
                              <option selected>Haider</option>
                              <option>Mattew</option>
                              <option>Pattrick</option>
                              <option>Andrew</option>
                            </select>
                          </td>
                          <td>
                            <Link to="map.php">
                              Villa 6, The Terraces, Jumeirah, Dubai
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Toyota</td>
                          <td>GR Supra</td>
                          <td>J92449</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td>Haider</td>
                          <td>
                            <select className="form-control customSelectRborder">
                              <option selected>Haider</option>
                              <option>Mattew</option>
                              <option>Pattrick</option>
                              <option>Andrew</option>
                            </select>
                          </td>
                          <td>
                            <Link to="map.php">
                              Villa 6, The Terraces, Jumeirah, Dubai
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Nissan</td>
                          <td>GT-R</td>
                          <td>J91575</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td>Haider</td>
                          <td>
                            <select className="form-control customSelectRborder">
                              <option selected>Haider</option>
                              <option>Mattew</option>
                              <option>Pattrick</option>
                              <option>Andrew</option>
                            </select>
                          </td>
                          <td>
                            <Link to="map.php">
                              Villa 6, The Terraces, Jumeirah, Dubai
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

        <section className="customTabSection endedRideSection">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="ridesHides">Ended Rides</h4>
                  <span className="ridesNumber"> (2,123) </span>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered"
                      id="table-1"
                      style={{ width: "100%" }}
                    >
                      <thead>
                        <tr>
                          <th>Car’s Brand</th>
                          <th>Car’s Model</th>
                          <th>Plate No</th>
                          <th>Start Date</th>
                          <th>End Date</th>
                          <th>Duration</th>
                          <th>Deposit Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Ferrari</td>
                          <td>F8</td>
                          <td>J92450</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td className="actionWrap">
                            <Link to="#" className="btn btn-warning wrnLine">
                              Claim
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-warning hOutline"
                              data-toggle="modal"
                              data-target="#centerModal"
                            >
                              Release
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Mercedes Benz</td>
                          <td>AMG GT</td>
                          <td>J92449</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td className="actionWrap">
                            <Link to="#" className="btn btn-warning wrnLine">
                              Claim
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-warning hOutline"
                              data-toggle="modal"
                              data-target="#centerModal"
                            >
                              Release
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Aston Martin</td>
                          <td>Vanquish</td>
                          <td>J92445</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td className="actionWrap">
                            <Link to="#" className="btn btn-warning wrnLine">
                              Claim
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-warning hOutline"
                              data-toggle="modal"
                              data-target="#centerModal"
                            >
                              Release
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Porsche</td>
                          <td>718</td>
                          <td>J92412</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td className="actionWrap">
                            <Link to="#" className="btn btn-warning wrnLine">
                              Claim
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-warning hOutline"
                              data-toggle="modal"
                              data-target="#centerModal"
                            >
                              Release
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Alpine</td>
                          <td>A110</td>
                          <td>J92478</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td className="actionWrap">
                            <Link to="#" className="btn btn-warning wrnLine">
                              Claim
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-warning hOutline"
                              data-toggle="modal"
                              data-target="#centerModal"
                            >
                              Release
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Porsche</td>
                          <td>718 Boxster</td>
                          <td>J91449</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td className="actionWrap">
                            <Link to="#" className="btn btn-warning wrnLine">
                              Claim
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-warning hOutline"
                              data-toggle="modal"
                              data-target="#centerModal"
                            >
                              Release
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>McLaren</td>
                          <td>720S</td>
                          <td>J92567</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td className="actionWrap">
                            <Link to="#" className="btn btn-warning wrnLine">
                              Claim
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-warning hOutline"
                              data-toggle="modal"
                              data-target="#centerModal"
                            >
                              Release
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>BMW</td>
                          <td>M2 Competition</td>
                          <td>J97825</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td className="actionWrap">
                            <Link to="#" className="btn btn-warning wrnLine">
                              Claim
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-warning hOutline"
                              data-toggle="modal"
                              data-target="#centerModal"
                            >
                              Release
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Toyota</td>
                          <td>GR Supra</td>
                          <td>J92449</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td className="actionWrap">
                            <Link to="#" className="btn btn-warning wrnLine">
                              Claim
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-warning hOutline"
                              data-toggle="modal"
                              data-target="#centerModal"
                            >
                              Release
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Nissan</td>
                          <td>GT-R</td>
                          <td>J91575</td>
                          <td>10 Dec 2021, 12:30pm</td>
                          <td>11 Dec 2021, 12:30pm</td>
                          <td>1w 2d 5h</td>
                          <td className="actionWrap">
                            <Link to="#" className="btn btn-warning wrnLine">
                              Claim
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-warning hOutline"
                              data-toggle="modal"
                              data-target="#centerModal"
                            >
                              Release
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
      <Footer />
    </div>
  );
};

export default Rides;
