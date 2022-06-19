import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

const Payment = () => {
  const css = `
    .sidebar-menu li:nth-child(9)
    {
        position: relative;
        background-color: #de3255;
    }
    .sidebar-menu li:nth-child(9) a img:first-child 
    {
        display:none;
    }
    .sidebar-menu li:nth-child(9) a img:nth-child(2)
    {
        display:block;
    }
    .sidebar-menu li:nth-child(9) a span
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
            <h1>Payment</h1>
          </div>
        </section>
        <section className="customTabSection">
          <div className="row addedDriverListing">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <div className="depositHeaderWrap">
                    <h4>Payment Detail</h4>
                    <div className="form-group">
                      <div className="dateRangeResultWrapper customDepositDateRange">
                        <label> Select Date </label>
                        <input
                          type="text"
                          id="demo-2"
                          className="form-control form-control-sm"
                          placeholder="dd-mm-yyyy"
                        />
                        <p id="result-2">&nbsp;</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered driverTableList payment"
                      id="save-stage"
                      style={{width:"100%"}}
                    >
                      <thead>
                        <tr>
                          <th>Ref ID</th>
                          <th>Payment Mode</th>
                          <th>Amount</th>
                          <th>Date</th>
                          <th>Who</th>
                          <th>Brand</th>
                          <th>Which Car</th>
                          <th>Incoming</th>
                          <th>Deposit</th>
                          <th>Total Receivables</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#231</td>
                          <td>Cash</td>
                          <td>usd 2,110</td>
                          <td>12-01-2022</td>
                          <td>Mathew</td>
                          <td>Ferrari</td>
                          <td>F8 - J92450</td>
                          <td>usd 2,210</td>
                          <td>
                            <div className="ms_aed">
                              {' '}
                              <span className="aedTxt">usd</span>2,210{' '}
                            </div>
                          </td>
                          <td>
                            <div className="ms_aed">
                              {' '}
                              <span className="aedTxt">usd</span>1,110{' '}
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
                    <label>Name</label>
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
                    <label>Date</label>
                    <input type="date" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>Received Amount</label>
                    <input type="text" className="form-control" />
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
        tabindex="-1"
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
      <Footer />
    </div>
  )
}

export default Payment
