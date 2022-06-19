import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

const Marketing = () => {
  const css = `
    .sidebar-menu li:nth-child(11)
    {
        position: relative;
        background-color: #de3255;
    }
    
    .sidebar-menu li:nth-child(11) a img:first-child 
    {
        display:none;
    }
    
    .sidebar-menu li:nth-child(11) a img:nth-child(2)
    {
        display:block;
    }
    
    
    .sidebar-menu li:nth-child(11) a span
    {
        color:#fff;
    }
    `

  function togClass() {
    var element = document.getElementById('toggleClass')
    element.classList.toggle('chn')
  }

//   new Lightpick({
//     field: document.getElementById('demo-2'),
//     singleDate: false,
//     onSelect: function (start, end) {
//       document.getElementById('result-2').innerHTML = rangeText(start, end)
//     },
//   })

  return (
    <div>
      <style>{css}</style>
      <Header />
      <Sidebar />

      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Marketing</h1>
          </div>
        </section>
        <section>
          <div className="row mb20">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="ccBtnWrap" onClick={togClass}>
                <button className="ccBtn" type="button">
                  <img src="assets/img/lefticon/plus.png" alt="" />
                  Create Campaign
                </button>
              </div>
            </div>
          </div>
          <div id="toggleClass" className="row chn">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4>Create Campaign</h4>
                </div>
                <div className="card-body">
                  <div className="row">
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
                    <div className="col-lg-3 col-md-12 col-sm-12">
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
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Car Model</label>
                        <select className="form-control">
                          <option>Select</option>
                          <option>J92450 Red Ferari </option>
                          <option>J70111 Yellow Lamborgini</option>
                          <option>JK2114 Blue Mercedes</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12">
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
                    <div className="col-lg-3 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Discount</label>
                        <select className="form-control">
                          <option>Select</option>
                          <option>5%</option>
                          <option>10%</option>
                          <option>15%</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-right mktBtnWrap">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="customTabSection">
          <div className="row addDriver marketTable">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4>Campaign Listing</h4>
                </div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>S.no</th>
                        <th>Image</th>
                        <th>Car's Model</th>
                        <th>Campaign Start Date</th>
                        <th>Campaign End Date</th>
                        <th>Discount</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <img src="assets/img/car15.png" alt="" />
                        </td>
                        <td>Mercedes Benz AMG GT</td>
                        <td>10 Dec 2021, 12:30pm</td>
                        <td>11 Dec 2021, 12:30pm</td>
                        <td>10%</td>
                        <td>
                          <div className="customActionWrapper">
                            <a href="#" className="btn btn-icon btn-danger">
                              <i className="material-icons reject">close</i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <img src="assets/img/car16.png" alt="" />
                        </td>
                        <td>Aston Martin Vanquish</td>
                        <td>10 Dec 2021, 12:30pm</td>
                        <td>11 Dec 2021, 12:30pm</td>
                        <td>7%</td>
                        <td>
                          <div className="customActionWrapper">
                            <a href="#" className="btn btn-icon btn-danger">
                              <i className="material-icons reject">close</i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <img src="assets/img/car17.png" alt="" />
                        </td>
                        <td>Porsche 718 </td>
                        <td>10 Dec 2021, 12:30pm</td>
                        <td>11 Dec 2021, 12:30pm</td>
                        <td>10%</td>
                        <td>
                          <div className="customActionWrapper">
                            <a href="#" className="btn btn-icon btn-danger">
                              <i className="material-icons reject">close</i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <img src="assets/img/car18.png" alt="" />
                        </td>
                        <td>Alpine A110</td>
                        <td>10 Dec 2021, 12:30pm</td>
                        <td>11 Dec 2021, 12:30pm</td>
                        <td>10%</td>
                        <td>
                          <div className="customActionWrapper">
                            <a href="#" className="btn btn-icon btn-danger">
                              <i className="material-icons reject">close</i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <img src="assets/img/car16.png" alt="" />
                        </td>
                        <td>Toyota GR Supra</td>
                        <td>10 Dec 2021, 12:30pm</td>
                        <td>11 Dec 2021, 12:30pm</td>
                        <td>12%</td>
                        <td>
                          <div className="customActionWrapper">
                            <a href="#" className="btn btn-icon btn-danger">
                              <i className="material-icons reject">close</i>
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
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Marketing
