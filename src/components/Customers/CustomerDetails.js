import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

const CustomerDetails = () => {

    function openCD() {
        document.getElementById("mySideCD").style.width = "100%";
      }
      
      function closeCD() {
        document.getElementById("mySideCD").style.width = "0";
      }

      const css = `
      .sidebar-menu li:nth-child(7)
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
      }
      `

  return (
    <div>
        <style>{css}</style>
      <Header/>
      <Sidebar/>
      
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
                  <div className="driverWrapper">
                     <div className="driverImg">
                        <div className="insideDiv">
                           <img src="assets/img/dft_img.png" alt=''/>
                        </div>
                     </div>
                     <div className="driverDetailWrap">
                        <div className="detailHeader customDriveDetailEdit">
                           <div className="editImgWrap">
                              <img className="editIcon" onClick={openCD} src="assets/img/lefticon/edit.png" alt='' />
                           </div>
                        </div>
                        <div className="personalDetailWrap">
                           Personal Details
                        </div>
                        <ul className="customerPersonalDetail_ul">
                           <li>
                              <div className="subtitle"> Name </div>
                              <div className="dDetail"> Mathew  </div>
                           </li>
                           <li>
                              <div className="subtitle"> Surname </div>
                              <div className="dDetail"> Warner </div>
                           </li>
                           <li>
                              <div className="subtitle"> Email </div>
                              <div className="dDetail"> test1@gmail.com </div>
                           </li>
                           <li>
                              <div className="subtitle"> Contact </div>
                              <div className="dDetail"> 9123456789 </div>
                           </li>
                           <li>
                              <div className="subtitle"> Country </div>
                              <div className="dDetail"> Dubai </div>
                           </li>
                        </ul>
                        <div className="passportDetailWrap">
                           Passport Details
                        </div>
                        <ul className="passportDetail_ul">
                           <li>
                              <div className="subtitle"> Passport Number </div>
                              <div className="dDetail"> 
                                 421424575
                              </div>
                           </li>
                           <li>
                              <div className="subtitle"> Country </div>
                              <div className="dDetail"> 
                                 France
                              </div>
                           </li>
                           <li>
                              <div className="subtitle"> Expiry Date </div>
                              <div className="dDetail"> 
                                 25-07-2025
                              </div>
                           </li>
                           <li>
                              <div className="subtitle"> Passport </div>
                              <div className="dDetail"> 
                                 <img className="docImgIcon" src="assets/img/oth/passport.svg" alt='' />
                              </div>
                           </li>
                        </ul>
                        <div className="licenseDetailWrap">
                           License Details
                        </div>
                        <ul className="licenseDetail_ul">
                           <li>
                              <div className="subtitle"> Driving License Number </div>
                              <div className="dDetail"> 
                                 571424575
                              </div>
                           </li>
                           <li>
                              <div className="subtitle"> Expiry Date </div>
                              <div className="dDetail"> 
                                 25-07-2025
                              </div>
                           </li>
                           <li>
                              <div className="subtitle"> Country of Issue </div>
                              <div className="dDetail"> 
                                 USA
                              </div>
                           </li>
                           <li>
                              <div className="subtitle"> Category </div>
                              <div className="dDetail"> 
                                 Leight Weight
                              </div>
                           </li>
                           <li>
                              <div className="subtitle"> License </div>
                              <div className="dDetail"> 
                                 <img className="docImgIcon" src="assets/img/oth/license.svg" alt=''/>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="customTabSection">
      <div className="row">
         <div className="col-md-12">
            <div className="card">
               <div className="card-header">
                  <div className="depositHeaderWrap">
                     <h4>Ride(s) Taken</h4>
                  </div>
               </div>
               <div className="card-body">
                  <div className="tab-content no-padding" id="myTab2Content">
                     <div className="customProfileRT table-responsive">
                        <table className="table table-bordered customProfTable" id="save-stage" style={{width:"100%"}}>
                           <thead>
                              <tr>
                                 <th>
                                    <div className="">S.no</div>
                                 </th>
                                 <th>
                                    <div className="customRP_Width160">Car</div>
                                 </th>
                                 <th>
                                    <div className="customRP_Width120">Date</div>
                                 </th>
                                 <th>
                                    <div className="customRP_Width120">Duration</div>
                                 </th>
                                 <th>
                                    <div className="customRP_Width120">Money Generated</div>
                                 </th>
                                 <th>
                                    <div className="customRP_Width120">Money Deposit</div>
                                 </th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td>
                                    <div className=""> 1 </div>
                                 </td>
                                 <td>
                                    <div className="sc_imgName customRP_Width160">
                                       <span> Mercedes Benz AMG GT </span>
                                    </div>
                                 </td>
                                 <td>
                                    <div className="customRP_Width120"> 12-1-2022 </div>
                                 </td>
                                 <td>
                                    <div className="customRP_Width120"> 1w 2d 5h</div>
                                 </td>
                                 <td>
                                    <div className="customRP_Width120"> aed 1500 </div>
                                 </td>
                                 <td>
                                    <div className="customRP_Width120"> aed 200 </div>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="customTabSection">
      <div className="row">
         <div className="col-md-12">
            <div className="card">
               <div className="card-body">
                  <div className="commentWrap">
                     <div className="cmntImgNameDateWrap">
                        <div className="cmntImg">
                           <img src="assets/img/user.png" className="" alt=''/>
                        </div>
                        <div className="cNameDateSpan">
                           <span className="cmntName"> Steve Smith</span>
                        </div>
                     </div>
                     <h2 className="cmntTitle"> Mercedes Benz AMG GT - JR4120 <span className="cmntdate"> (12-1-2022) </span> </h2>
                     <p className="cmntP">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et est sollicitudin nisl suscipit imperdiet. Aenean ornare mattis eros, at faucibus erat. Praesent congue nunc vel mi pharetra, hendrerit cursus sapien ultricies. Suspendisse felis purus, volutpat sed consequat vel, aliquam pellentesque nunc.								
                     </p>
                  </div>
                  <div className="commentRplyWrap">
                     <div className="cmntImgNameDateWrap">
                        <div className="cmntImg">
                           <img src="assets/img/users/user-2.png" className="" alt='' />
                        </div>
                        <div className="cNameDateSpan">
                           <span className="cmntName"> Nathasha Doe</span>
                        </div>
                     </div>
                     <p className="cmntP">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et est sollicitudin nisl suscipit imperdiet. Aenean ornare mattis eros, at faucibus erat. Praesent congue nunc vel mi pharetra, hendrerit cursus sapien ultricies. Suspendisse felis purus, volutpat sed consequat vel, aliquam pellentesque nunc.								
                     </p>
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
                  <div className="depositHeaderWrap">
                     <h4>Referrals Detail</h4>
                  </div>
               </div>
               <div className="card-body">
                  <div className="table-responsive">
                     <table className="table table-bordered driverTableList referral" id="save-stage" style={{width:"100%"}}>
                        <thead>
                           <tr>
                              <th>S.no</th>
                              <th>Referrals Name</th>
                              <th>Email</th>
                              <th>Referrals Registration Status</th>
                              <th>Referrals Purchase Status</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>1</td>
                              <td>Thomas Mitchel</td>
                              <td>test1@gmail.com</td>
                              <td>Registered</td>
                              <td>Purchased</td>
                           </tr>
                           <tr>
                              <td>2</td>
                              <td>Richard Hallen</td>
                              <td>test2@gmail.com</td>
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

      <div id="mySideCD" className="sideOpen">
   <a href="javascript:void(0)" className="closebtn" onClick={closeCD}>&times;</a>
   <div className="container">
      <div className="row">
         <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="card">
               <div className="card-header">
                  <h4>Customer Detail</h4>
               </div>
               <div className="card-body">
                  <div className="row">
                     <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="form-group">
                           <label>Name</label>
                           <input type="text" className="form-control" />
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="form-group">
                           <label>Sur Name</label>
                           <input type="text" className="form-control" />
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="form-group">
                           <label>Email</label>
                           <input type="text" className="form-control" />
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="form-group">
                           <label>Contact</label>
                           <input type="text" className="form-control" />
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="form-group">
                           <label>Country</label>
                           <input type="text" className="form-control" />
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-lg-12 col-md-12 col-sm-12 headerSepration">
                        <div className="custom_ppWrap"> 
                           Passport 
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="form-group">
                           <label>Passport Number</label>
                           <input type="text" className="form-control" />
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="form-group">
                           <label>Country</label>
                           <select className="form-control">
                              <option>Select</option>
                              <option>Dubai</option>
                              <option>Japan</option>
                              <option>France</option>
                              <option>Germany</option>
                           </select>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="form-group">
                           <label>Expiry Date</label>
                           <input type="date" className="form-control" />
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="form-group mb-4">
                           <label className="">
                           Passport
                           </label>
                           <div className="customAddDriverIU">
                              <div id="image-preview" className="image-preview">
                                 <label for="image-upload" id="image-label">
                                 Upload Passport
                                 <img src="assets/img/lefticon/upload.png"  alt=''/>
                                 </label>
                                 <input type="file" name="image" id="image-upload" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-lg-12 col-md-12 col-sm-12 headerSepration">
                        <div className="custom_ppWrap"> 
                           License 
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="form-group">
                           <label>Driving License Number</label>
                           <input type="text" className="form-control" />
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="form-group">
                           <label>Expiry Date</label>
                           <input type="date" className="form-control" />
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="form-group">
                           <label>Country of Issue</label>
                           <select className="form-control">
                              <option>Select</option>
                              <option>Dubai</option>
                              <option>Japan</option>
                              <option>France</option>
                              <option>Germany</option>
                           </select>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="form-group mb-4">
                           <label className="">
                           Category
                           </label>
                           <select className="form-control">
                              <option>Select</option>
                              <option>Lieght Weight</option>
                              <option>Heavy Weight</option>
                           </select>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="form-group mb-4">
                           <label className="">
                           License
                           </label>
                           <div className="customAddDriverIU">
                              <div id="image-preview" className="image-preview">
                                 <label for="image-upload" id="image-label">
                                 Upload License
                                 <img src="assets/img/lefticon/upload.png" alt='' />
                                 </label>
                                 <input type="file" name="image" id="image-upload" alt=''/>
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
   </div>
</div>
<Footer/>
    </div>
  )
}

export default CustomerDetails
