import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'

const Deposit = () => {
  const css = `
    .sidebar-menu li:nth-child(10)
    {
        position: relative;
        background-color: #de3255;
    }
    
    .sidebar-menu li:nth-child(10) a img:first-child 
    {
        display:none;
    }
    
    .sidebar-menu li:nth-child(10) a img:nth-child(2)
    {
        display:block;
    }
    
    
    .sidebar-menu li:nth-child(10) a span
    {
        color:#fff;
    }`
  return (
    <div>
        <style>{css}</style>
      <Header />
      <Sidebar />
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Deposit</h1>
          </div>
        </section>
        <section className="customTabSection">
          <div className="row addedDriverListing">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <div className="depositHeaderWrap">
                    <h4>Actions</h4>
                  </div>
                </div>
                <div className="card-body customTableTDdesg">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered driverTableList deposit"
                      id="save-stage"
                      style={{width:"100%"}}
                    >
                      <thead>
                        <tr>
                          <th>S.no</th>
                          <th>Who</th>
                          <th>Brand</th>
                          <th>Which Car</th>
                          <th>Dates</th>
                          <th>Amount</th>
                          <th>Deposit Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mathew</td>
                          <td>Ferrari</td>
                          <td>
                            <span className="dpt_cName">F8 </span>
                            <span className="dpt_sept"> - </span>
                            <span className="dpt_pName"> J92450 </span>
                          </td>
                          <td>12-01-2022</td>
                          <td>
                            <div className="ms_aed">
                              {' '}
                              <span className="aedTxt">usd</span>2,251{' '}
                            </div>
                          </td>
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
          <div className="row addedDriverListing">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <div className="depositHeaderWrap">
                    <h4>Claimed</h4>
                  </div>
                </div>
                <div className="card-body customTableTDdesg">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered driverTableList deposit"
                      id="save-stage1"
                      style={{width:"100%"}}
                    >
                      <thead>
                        <tr>
                          <th>S.no</th>
                          <th>Who</th>
                          <th>Brand</th>
                          <th>Which Car</th>
                          <th>Dates</th>
                          <th>Amount</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mathew</td>
                          <td>Ferrari</td>
                          <td>
                            <span className="dpt_cName">F8 </span>
                            <span className="dpt_sept"> - </span>
                            <span className="dpt_pName"> J92450 </span>
                          </td>
                          <td>12-01-2022</td>
                          <td>
                            <div className="ms_aed">
                              {' '}
                              <span className="aedTxt">usd</span>2,251{' '}
                            </div>
                          </td>
                          <td>
                            <select className="form-control customSelectRborder">
                              <option select="">Pending</option>
                              <option>Released</option>
                            </select>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      <div
                        className="dataTables_info"
                        id="save-stage_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 to 1 of 1 entries
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                      <div
                        className="dataTables_paginate paging_simple_numbers customPaginationRight"
                        id="save-stage_paginate"
                      >
                        <ul className="pagination">
                          <li
                            className="paginate_button page-item previous disabled"
                            id="save-stage_previous"
                          >
                            <Link
                              to="#"
                              aria-controls="save-stage"
                              data-dt-idx="0"
                              tabIndex="0"
                              className="page-link"
                            >
                              Previous
                            </Link>
                          </li>
                          <li className="paginate_button page-item active">
                            <Link
                              to="#"
                              aria-controls="save-stage"
                              data-dt-idx="1"
                              tabIndex="0"
                              className="page-link"
                            >
                              1
                            </Link>
                          </li>
                          <li
                            className="paginate_button page-item next disabled"
                            id="save-stage_next"
                          >
                            <Link
                              to="#"
                              aria-controls="save-stage"
                              data-dt-idx="2"
                              tabIndex="0"
                              className="page-link"
                            >
                              Next
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row addedDriverListing">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <div className="depositHeaderWrap">
                    <h4>All</h4>
                  </div>
                </div>
                <div className="card-body customTableTDdesg">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered driverTableList deposit"
                      id="save-stage"
                      style={{width:"100%"}}
                    >
                      <thead>
                        <tr>
                          <th>S.no</th>
                          <th>Who</th>
                          <th>Brand</th>
                          <th>Which Car</th>
                          <th>Dates</th>
                          <th>Amount</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mathew</td>
                          <td>Ferrari</td>
                          <td>
                            <span className="dpt_cName">F8 </span>
                            <span className="dpt_sept"> - </span>
                            <span className="dpt_pName"> J92450 </span>
                          </td>
                          <td>12-01-2022</td>
                          <td>
                            <div className="ms_aed">
                              {' '}
                              <span className="aedTxt">usd</span>2,251{' '}
                            </div>
                          </td>
                          <td>Released</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      <div
                        className="dataTables_info"
                        id="save-stage_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 to 1 of 1 entries
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                      <div
                        className="dataTables_paginate paging_simple_numbers customPaginationRight"
                        id="save-stage_paginate"
                      >
                        <ul className="pagination">
                          <li
                            className="paginate_button page-item previous disabled"
                            id="save-stage_previous"
                          >
                            <Link
                              to="#"
                              aria-controls="save-stage"
                              data-dt-idx="0"
                              tabIndex="0"
                              className="page-link"
                            >
                              Previous
                            </Link>
                          </li>
                          <li className="paginate_button page-item active">
                            <Link
                              to="#"
                              aria-controls="save-stage"
                              data-dt-idx="1"
                              tabIndex="0"
                              className="page-link"
                            >
                              1
                            </Link>
                          </li>
                          <li
                            className="paginate_button page-item next disabled"
                            id="save-stage_next"
                          >
                            <Link
                              to="#"
                              aria-controls="save-stage"
                              data-dt-idx="2"
                              tabIndex="0"
                              className="page-link"
                            >
                              Next
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        className="modal fade"
        id="centerModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
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
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>Age</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>Alternative Number</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="form-group mb-4">
                    <label className="">Profile Pic</label>
                    <div className="">
                      <div id="image-preview" className="image-preview">
                        <label htmlFor="image-upload" id="image-label">
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
      <div
        className="modal fade"
        id="basicModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Confirmation
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
            <div className="modal-body deleteMsg">
              Are you sure to delete this record ?
            </div>
            <div className="modal-footer bg-whitesmoke br">
              <button type="button" className="btn btn-secondary">
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Deposit
