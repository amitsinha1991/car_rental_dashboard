import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

const Referral = () => {
    useEffect(() => {
        // togclass();
        // Lightpick();
    },[])
    // function togclass() 
    // {
    //    var element = document.getElementById("toggleclassName");
    //    element.classNameNameList.toggle("chn");
    // }

    // new Lightpick({
    //     field: document.getElementById('demo-2'),
    //     singleDate: false,
    //     onSelect: function(start, end){
    //         document.getElementById('result-2').innerHTML = rangeText(start, end);
    //     }
    // });	
    const css = `
    .sidebar-menu li:nth-child(12) {
      position: relative;
      background-color: #de3255;
    }
    .sidebar-menu li:nth-child(12) a img:first-child {
      display: none;
    }
    .sidebar-menu li:nth-child(12) a img:nth-child(2) {
      display: block;
    }
    .sidebar-menu li:nth-child(12) a span {
      color: #fff;
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
            <h1>Referral</h1>
          </div>
        </section>
        <section className="customTabSection">
          <div className="row addedDriverListing">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered driverTableList referral"
                      id="save-stage"
                      style={{width: "100%"}}
                    >
                      <thead>
                        <tr>
                          <th>S.no</th>
                          <th>Customer Name</th>
                          <th>Referral Name</th>
                          <th>Email</th>
                          <th>Date of Referral</th>
                          <th>Referral Registration Status</th>
                          <th>Referral Purchase Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <Link className="refRedirect" to="/customerdetails">
                              {' '}
                              Steve Smith{' '}
                            </Link>
                          </td>
                          <td>Thomas Mitchel</td>
                          <td>test1@gmail.com</td>
                          <td>Feb 10, 2022</td>
                          <td>Registered</td>
                          <td>Purchased</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <Link className="refRedirect" to="/customerdetails">
                              Mathew Hayden
                            </Link>
                          </td>
                          <td>Richard Hallen</td>
                          <td>test2@gmail.com</td>
                          <td>Feb 17, 2022</td>
                          <td>Not Registered</td>
                          <td>Not Purchased</td>
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
      <Footer />
    </div>
  )
}

export default Referral
