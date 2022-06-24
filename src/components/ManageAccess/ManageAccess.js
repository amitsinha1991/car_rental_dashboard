import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'

const ManageAccess = () => {
    function togClass() 
   {
      var element = document.getElementById("toggleClass");
      element.classList.toggle("chn");
   }
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Manage Access</h1>
          </div>
        </section>
        <section>
          <div className="row mb20">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="ccBtnWrap" onClick={togClass}>
                <button className="ccBtn" type="button">
                  <img alt="" src="assets/img/lefticon/plus.png" />
                  Manage Access
                </button>
              </div>
            </div>
          </div>
          <div id="toggleClass" className="row chn">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4>Manage Access</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Access Level</label>
                        <select className="form-control">
                          <option>Select</option>
                          <option>Admin</option>
                          <option>Content Manage</option>
                          <option>Viewer</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Email</label>
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
        </section>
        <section className="customTabSection customGarageListingSect">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4>Access List</h4>
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
                          <th>S.no</th>
                          <th>Name</th>
                          <th>Access</th>
                          <th>Access Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Steve Smith</td>
                          <td>Content Manage</td>
                          <td>Dec 10, 2018</td>
                          <td className="actionTD">
                            <Link
                              to="#"
                              data-toggle="modal"
                              data-target=".bd-example-modal-lg"
                            >
                              <i className="fas fa-edit"></i>
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
      <Footer />
    </div>
  )
}

export default ManageAccess
