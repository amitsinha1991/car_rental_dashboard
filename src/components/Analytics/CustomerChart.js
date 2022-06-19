import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import $ from 'jquery'

const CustomerChart = () => {
    const css = `
    .sidebar-menu li.dropdown
    {
        position: relative;
        background-color: #de3255;
    }
    
    .sidebar-menu li.dropdown ul.dropdown-menu
    {
        display: block;
        margin: 0 !important;	
    }
    
    .sidebar-menu li.dropdown ul.dropdown-menu li
    {
        padding-left: 34px !important;
        background-color: #fff !important;
    }
    
    .sidebar-menu li.dropdown ul.dropdown-menu li:nth-child(3) a
    {
        color:#de3255 !important;
    }
    
    .sidebar-menu li.dropdown ul.dropdown-menu li:nth-child(3) a:before
    {
        color:#de3255 !important;
    }
    
    .sidebar-menu li.dropdown-menu
    {
        background-color: unset;
    }
    
    .sidebar-menu li:nth-child(8) a img:first-child 
    {
        display:none;
    }
    
    .sidebar-menu li:nth-child(8) a img:nth-child(2)
    {
        display:block;
    }
    
    
    .sidebar-menu li:nth-child(8) a span
    {
        color:#fff;
    }
    
    .sidebar-menu li:nth-child(8) a::after
    {
        color:#fff;
    }
    
    #chartdiv 
    {
        width: 100%;
        height: 500px;
    }
    `

    $(document).ready(function () {
   
   	 $(".drop1").click(function(){
   		$(".d1").slideToggle();
   	})
   	
   });
   
   $(document).click(function (e) {
   	if ($(e.target).parents(".dropDownWrap").length === 0) {
   		$(".commonDrop").hide();
   	}
   }); 
   
   function togAdvSrcClass() 
   {
      var element = document.getElementById("advsrcFG");
      element.classList.toggle("advSrchHide");
   }

  return (
    <div>
        <style>{css}</style>
        <Header/>
        <Sidebar/>


        <div className="main-content">
   <section className="section">
      <div className="section-header customCustAnalyticsHeader">
         <div className="graphHeader">
            <h1>Customer Analytics</h1>
            <div className="form-group advSrchGroup">
               <div id="advsrcFG" className="cah_wrap advSrchHide">
                  <input type="text" placeholder="Search Here..." />
               </div>
               <span className="advSrcBtn" onClick={togAdvSrcClass}> Advance Search </span>
            </div>
         </div>
      </div>
      <div className="prd_stnd_cust_wrap">
         <div className="dateRangeResultWrapper customRideDateRange resHide">
            <label> Custom Date </label>
            <input type="text" id="demo-1" className="form-control form-control-sm" placeholder="dd-mm-yyyy" />
            <p id="result-1">&nbsp;</p>
         </div>
         <div className="commonDropGroup dropDownWrap">
            <div className="drop1">
               <button type="button">Period 
               <i className="fas fa-chevron-down"></i>
               </button>
            </div>
            <div className="d1 commonDrop">
               <div className="form-group">
                  <input type="radio" id="cnty1" name="country" value="australia" />
                  <label htmlFor="australia"> 7 days</label>
               </div>
               <div className="form-group">
                  <input type="radio" id="cnty2" name="country" value="canada" />
                  <label htmlFor="canada"> 1 month</label>
               </div>
               <div className="form-group">
                  <input type="radio" id="cnty2" name="country" value="canada" />
                  <label htmlFor="canada"> 6 month</label>
               </div>
               <div className="form-group">
                  <input type="radio" id="cnty2" name="country" value="canada" />
                  <label htmlFor="canada"> 1 year</label>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="section customCustomerSection">
      <div className="row">
         <div className="col-md-4 customRowMb40">
            <div className="boxHeading">
               Most Loyal Customers
            </div>
            <div className="leftCardBoxV1">
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-1.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">John Doe</div>
                     <div className="ridesTakenV1">
                        15 rides taken
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #1 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-2.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Natasha Smith</div>
                     <div className="ridesTakenV1">
                        15 rides taken
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #2 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-3.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Michle Bevan</div>
                     <div className="ridesTakenV1">
                        15 rides taken
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #3 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-4.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Sam Anis</div>
                     <div className="ridesTakenV1">
                        15 rides taken
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #4 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-5.png"  alt=''/>	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Jullian Guliya</div>
                     <div className="ridesTakenV1">
                        15 rides taken
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #5 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-6.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Jeniffer Dermick</div>
                     <div className="ridesTakenV1">
                        15 rides taken
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #6 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-7.png" alt=''/>	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Jenny Jinx</div>
                     <div className="ridesTakenV1">
                        15 rides taken
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #7 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-8.png" alt=''/>	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Steve Smith</div>
                     <div className="ridesTakenV1">
                        15 rides taken
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #8 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-9.png"  alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Antonio Dukes</div>
                     <div className="ridesTakenV1">
                        15 rides taken
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #9 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-2.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Fumio Hugu</div>
                     <div className="ridesTakenV1">
                        15 rides taken
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #10 </span>	 
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-md-4 customRowMb40">
            <div className="boxHeading">
               Most Sales by Customer
            </div>
            <div className="leftCardBoxV1">
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-1.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">John Doe</div>
                     <div className="ridesTakenV1">
                        15 sales
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #1 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-2.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Natasha Smith</div>
                     <div className="ridesTakenV1">
                        15 sales
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #2 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-3.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Michle Bevan</div>
                     <div className="ridesTakenV1">
                        15 sales
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #3 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-4.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Sam Anis</div>
                     <div className="ridesTakenV1">
                        15 sales
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #4 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-5.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Jullian Guliya</div>
                     <div className="ridesTakenV1">
                        15 sales
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #5 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-6.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Jeniffer Dermick</div>
                     <div className="ridesTakenV1">
                        15 sales
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #6 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-7.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Jenny Jinx</div>
                     <div className="ridesTakenV1">
                        15 sales
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #7 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-8.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Steve Smith</div>
                     <div className="ridesTakenV1">
                        15 sales
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #8 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-9.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Antonio Dukes</div>
                     <div className="ridesTakenV1">
                        15 sales
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #9 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-2.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Fumio Hugu</div>
                     <div className="ridesTakenV1">
                        15 sales
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #10 </span>	 
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-md-4 customRowMb40">
            <div className="boxHeading">
               Most Cancellations by Customer
            </div>
            <div className="leftCardBoxV1">
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-1.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">John Doe</div>
                     <div className="ridesTakenV1">
                        15 cancellations
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #1 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-2.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Natasha Smith</div>
                     <div className="ridesTakenV1">
                        15 cancellations
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #2 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-3.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Michle Bevan</div>
                     <div className="ridesTakenV1">
                        15 cancellations
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #3 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-4.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Sam Anis</div>
                     <div className="ridesTakenV1">
                        15 cancellations
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #4 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-5.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Jullian Guliya</div>
                     <div className="ridesTakenV1">
                        15 cancellations
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #5 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-6.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Jeniffer Dermick</div>
                     <div className="ridesTakenV1">
                        15 cancellations
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #6 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-7.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Jenny Jinx</div>
                     <div className="ridesTakenV1">
                        15 cancellations
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #7 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-8.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Steve Smith</div>
                     <div className="ridesTakenV1">
                        15 cancellations
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #8 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-9.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Antonio Dukes</div>
                     <div className="ridesTakenV1">
                        15 cancellations
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #9 </span>	 
                     </div>
                  </div>
               </div>
               <div className="lineBoxV1">
                  <div className="userImgV1">	<img className="" src="assets/img/users/user-2.png" alt='' />	 </div>
                  <div className="nameRideWrapV1">
                     <div className="nameWrapperV1">Fumio Hugu</div>
                     <div className="ridesTakenV1">
                        15 cancellations
                     </div>
                     <div className="rankWrapBoxV1">	
                        <span className="rankNumV1"> #10 </span>	 
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</div>


</div>
// </div>

    // </div>
  )
}

export default CustomerChart
