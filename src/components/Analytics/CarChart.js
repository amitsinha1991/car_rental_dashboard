import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import $ from 'jquery'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const CarCharts = () => {
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

	.sidebar-menu li.dropdown ul.dropdown-menu li:nth-child(2) a
	{
		color:#de3255 !important;
	}

	.sidebar-menu li.dropdown ul.dropdown-menu li:nth-child(2) a:before
	{
		color:#de3255 !important;
	}

	.sidebar-menu li.dropdown-menu
	{
		background-color: unset;
	}
	

	#chartdiv 
	{
		width: 100%;
		height: 500px;
	}
	
	.sidebar-menu li:nth-child(8)
	{
		position: relative;
		background-color: #de3255;
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
    `

    const options = {
   	chart: {
   		type: 'line'
   	},
   	title: {
   		text: ''
   	},
   	subtitle: {
   		text: 'Source: Car Rental'
   	},
   	xAxis: {
   		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
   	},
   	yAxis: {
   		title: {
   			text: 'Sales Chart'
   		}
   	},
   	plotOptions: {
   		line: {
   			dataLabels: {
   				enabled: true
   			},
   			enableMouseTracking: false
   		}
   	},
   	series: [{
   		name: 'Ferrari F8',
   		data: [1722, 1622, 1922, 1422, 1822, 1022, 1522, 2622, 2322, 1822, 1322, 922]
   	}, {
   		name: 'Mercedes Benz AMG GT',
   		data: [322, 422, 522, 822, 1122, 1522, 1722, 1622, 1422, 1022, 622, 422]
   	}, {
   		name: 'Aston Martin Vanquish',
   		data: [1322, 1922, 1222, 1722, 1122, 2022, 2522, 1622, 1022, 1522, 1222, 1722]
   	}, {
   		name: 'Porsche 718',
   		data: [1722, 1422, 1522, 1822, 1022, 1722, 1222, 1022, 1822, 1922, 2122, 1422]
   	}, {
   		name: 'Alpine A110',
   		data: [1242, 1202, 822, 789, 1037, 1420, 1275, 1041, 1225, 1011, 522, 422]
   	}, {
   		name: 'Porsche 718 Boxster',
   		data: [1422, 1522, 922, 722, 1122, 1522, 1222, 1622, 1422, 1022, 622, 422]
   	}, {
   		name: 'McLaren 720S',
   		data: [1322, 1422, 822, 622, 1322, 1222, 1022, 1420, 1422, 1822, 622, 422]
   	}, {
   		name: 'BMW M2 Competition',
   		data: [1722, 1322, 622, 522, 1422, 1322, 1122, 1622, 1041, 1022, 622, 422]
   	}, {
   		name: 'Toyota GR Supra',
   		data: [1522, 1122, 722, 922, 1322, 1722, 1322, 1041, 1422, 1022, 622, 422]
   	}, {
   		name: 'Nissan GT-R',
   		data: [1222, 1222, 822, 722, 1022, 1622, 1422, 1622, 1422, 1822, 622, 422]
   	}]
   }
   


  $(document).ready(function () {
   $(".drop1").click(function(){
     $(".d1").slideToggle();
     $(".d2").hide();
     $(".d3").hide();
     $(".d4").hide();
     $(".d5").hide();
     $(".d6").hide();
  })		

  $(".drop2").click(function(){
     $(".d2").slideToggle();
     $(".d1").hide();
     $(".d3").hide();
     $(".d4").hide();
     $(".d5").hide();
     $(".d6").hide();
  })
  
   $(".drop3").click(function(){
     $(".d3").slideToggle();
     $(".d1").hide();
     $(".d2").hide();
     $(".d4").hide();
     $(".d5").hide();
     $(".d6").hide();
  })
  
   $(".drop4").click(function(){
     $(".d4").slideToggle();
     $(".d1").hide();
     $(".d2").hide();
     $(".d3").hide();
     $(".d5").hide();
     $(".d6").hide();
  })
  
   $(".drop5").click(function(){
     $(".d5").slideToggle();
     $(".d1").hide();
     $(".d2").hide();
     $(".d3").hide();
     $(".d4").hide();
     $(".d6").hide();	
  })
  
   $(".drop6").click(function(){
     $(".d6").slideToggle();
     $(".d1").hide();
     $(".d2").hide();
     $(".d3").hide();
     $(".d4").hide();
     $(".d5").hide();
  })
  
});

$(document).click(function (e) {
  if ($(e.target).parents(".dropDownWrap").length === 0) {
     $(".commonDrop").hide();
  }
}); 		
  return (
    <div>
      <style>{css}</style>
      <Header />
      <Sidebar />
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Car Analytics</h1>
          </div>
        </section>
        <section>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="row mb30">
                    <div className="customFilterWrapper customCarFilter">
                      <div className="commonDropGroup dropDownWrap">
                        <div className="drop2">
                          <button type="button">
                            Car’s Brand
                            <i className="fas fa-chevron-down"></i>
                          </button>
                        </div>
                        <div className="d2 commonDrop">
                          <div className="form-group">
                            <input type="checkbox" id="p1" name="p1" />
                            <label for="vehicle1"> Alpine</label>
                          </div>
                          <div className="form-group">
                            <input type="checkbox" id="p2" name="p2" />
                            <label for="vehicle2"> Aston Martin</label>
                          </div>
                          <div className="form-group">
                            <input type="checkbox" id="p3" name="p3" />
                            <label for="vehicle3"> BMW</label>
                          </div>
                          <div className="form-group">
                            <input type="checkbox" id="p4" name="p4" />
                            <label for="vehicle4"> Ferrari</label>
                          </div>
                          <div className="form-group">
                            <input type="checkbox" id="p5" name="p5" />
                            <label for="vehicle5"> McLaren</label>
                          </div>
                          <div className="form-group">
                            <input type="checkbox" id="p6" name="p6" />
                            <label for="vehicle5"> Mercedes</label>
                          </div>
                          <div className="form-group">
                            <input type="checkbox" id="p7" name="p7" />
                            <label for="vehicle5"> All</label>
                          </div>
                        </div>
                      </div>
                      <div className="commonDropGroup dropDownWrap">
                        <div className="drop1">
                          <button type="button">
                            Car Model
                            <i className="fas fa-chevron-down"></i>
                          </button>
                        </div>
                        <div className="d1 commonDrop">
                          <div className="form-group">
                            <input type="checkbox" id="p1" name="p1" />
                            <label for="vehicle1"> A110</label>
                          </div>
                          <div className="form-group">
                            <input type="checkbox" id="p2" name="p2" />
                            <label for="vehicle2"> Vanquish</label>
                          </div>
                          <div className="form-group">
                            <input type="checkbox" id="p3" name="p3" />
                            <label for="vehicle3"> M2 Competition</label>
                          </div>
                          <div className="form-group">
                            <input type="checkbox" id="p4" name="p4" />
                            <label for="vehicle4"> 720S</label>
                          </div>
                          <div className="form-group">
                            <input type="checkbox" id="p5" name="p5" />
                            <label for="vehicle5"> Benz AMG GT</label>
                          </div>
                          <div className="form-group">
                            <input type="checkbox" id="p6" name="p6" />
                            <label for="vehicle5"> GT-R</label>
                          </div>
                          <div className="form-group">
                            <input type="checkbox" id="p7" name="p7" />
                            <label for="vehicle5"> All</label>
                          </div>
                        </div>
                      </div>
                      <div className="commonDropGroup dropDownWrap">
                        <div className="drop5">
                          <button type="button">
                            Period
                            <i className="fas fa-chevron-down"></i>
                          </button>
                        </div>
                        <div className="d5 commonDrop">
                          <div className="form-group">
                            <input
                              type="radio"
                              id="cnty1"
                              name="country"
                              value="date1"
                            />
                            <label for="date1"> 7 days</label>
                          </div>
                          <div className="form-group">
                            <input
                              type="radio"
                              id="cnty2"
                              name="country"
                              value="date2"
                            />
                            <label for="date2"> 1 month</label>
                          </div>
                          <div className="form-group">
                            <input
                              type="radio"
                              id="cnty2"
                              name="country"
                              value="date3"
                            />
                            <label for="date3"> 6 month</label>
                          </div>
                          <div className="form-group">
                            <input
                              type="radio"
                              id="cnty2"
                              name="country"
                              value="date4"
                            />
                            <label for="date4"> 1 year</label>
                          </div>
                          <div className="form-group">
                            <input
                              type="radio"
                              id="cnty2"
                              name="country"
                              value="date5"
                            />
                            <label for="date5"> Custom Date</label>
                          </div>
                        </div>
                      </div>
                      <div className="commonDropGroup dropDownWrap">
                        <div className="drop6">
                          <button type="button">
                            View Type
                            <i className="fas fa-chevron-down"></i>
                          </button>
                        </div>
                        <div className="d6 commonDrop">
                          <div className="form-group">
                            <input
                              type="radio"
                              id="cnty1"
                              name="country"
                              value="mv"
                            />
                            <label for="mv"> Most Views </label>
                          </div>
                          <div className="form-group">
                            <input
                              type="radio"
                              id="cnty2"
                              name="country"
                              value="mb"
                            />
                            <label for="mb"> Most Bookings</label>
                          </div>
                          <div className="form-group">
                            <input
                              type="radio"
                              id="cnty2"
                              name="country"
                              value="ms"
                            />
                            <label for="ms"> Most Sales</label>
                          </div>
                          <div className="form-group">
                            <input
                              type="radio"
                              id="cnty2"
                              name="country"
                              value="mu"
                            />
                            <label for="mu"> Most Utilization</label>
                          </div>
                          <div className="form-group">
                            <input
                              type="radio"
                              id="cnty2"
                              name="country"
                              value="mi"
                            />
                            <label for="mi"> Most Idle</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group customDateChart">
                        <div className="dateRangeResultWrapper customDepositDateRange">
                          <input
                            type="text"
                            id="demo-2"
                            className="form-control form-control-sm"
                            placeholder="dd-mm-yyyy"
                          />
                          <p id="result-2">&nbsp;</p>
                        </div>
                      </div>
                      <div className="customFilterWrapBtn">
                        <button type="submit" className="filterBtn">
                          Apply Filter
                        </button>
                      </div>
                    </div>
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
                <div className="card-header graphHeader">
                  <h4>Cars</h4>
                </div>
                <div className="card-body">
                  <ul className="nav nav-pills" id="myTab3" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#t1"
                        role="tab"
                        aria-controls="t1"
                        aria-selected="true"
                      >
                        Most Views{' '}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#t2"
                        role="tab"
                        aria-controls="t2"
                        aria-selected="false"
                      >
                        Most Bookings
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#t3"
                        role="tab"
                        aria-controls="t3"
                        aria-selected="false"
                      >
                        Most Sales
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#t4"
                        role="tab"
                        aria-controls="t4"
                        aria-selected="false"
                      >
                        Most Utilization
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#t5"
                        role="tab"
                        aria-controls="t5"
                        aria-selected="false"
                      >
                        Most Idle
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content customCarTabList" id="myTabContent2">
                    <div
                      className="tab-pane fade show active"
                      id="t1"
                      role="tabpanel"
                      aria-labelledby="t1"
                    >
                      <div className="recent-report__chart">
                      <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                          />
                      </div>
                      <section className="customTabSection customGarageListingSect">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="card">
                              <div className="card-body tableUnderChart">
                                <div className="table-responsive">
                                  <table
                                    className="table table-bordered"
                                    id="save-stage"
                                    style={{ width: '100%' }}
                                  >
                                    <thead>
                                      <tr>
                                        <th>Brand</th>
                                        <th>Car’s Model</th>
                                        <th>Plate No.</th>
                                        <th>Day 1 </th>
                                        <th>Day 2</th>
                                        <th>Day 3</th>
                                        <th>Day 4</th>
                                        <th>Day 5</th>
                                        <th>Day 6</th>
                                        <th>Day 7</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Ferrari</td>
                                        <td>Ferrari F8</td>
                                        <td>J72458</td>
                                        <td>1,123</td>
                                        <td>2,123</td>
                                        <td>2,123</td>
                                        <td>2,123</td>
                                        <td>2,123</td>
                                        <td>2,123</td>
                                        <td>2,123</td>
                                      </tr>
                                      <tr>
                                        <td>Aston Martin</td>
                                        <td>Vanquish</td>
                                        <td>J92450</td>
                                        <td>1,123</td>
                                        <td>2,123</td>
                                        <td>2,123</td>
                                        <td>2,123</td>
                                        <td>2,123</td>
                                        <td>2,123</td>
                                        <td>2,123</td>
                                      </tr>
                                      <tr>
                                        <td>McLaren</td>
                                        <td>720S</td>
                                        <td>J52485</td>
                                        <td>1,123</td>
                                        <td>2,123</td>
                                        <td>2,123</td>
                                        <td>2,123</td>
                                        <td>2,123</td>
                                        <td>2,123</td>
                                        <td>2,123</td>
                                      </tr>
                                      <tr>
                                        <td>Nissan</td>
                                        <td>GT-R</td>
                                        <td>J24352</td>
                                        <td>1,123</td>
                                        <td>2,123</td>
                                        <td>2,123</td>
                                        <td>2,123</td>
                                        <td>2,123</td>
                                        <td>2,123</td>
                                        <td>2,123</td>
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
                      className="tab-pane fade"
                      id="t2"
                      role="tabpanel"
                      aria-labelledby="t2"
                    >
                      <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                          />
                      <section className="customTabSection customGarageListingSect">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="card">
                              <div className="card-body tableUnderChart">
                                <div className="table-responsive">
                                  <table
                                    className="table table-bordered"
                                    id="table-2"
                                    style={{ width: '100%' }}
                                  >
                                    <thead>
                                      <tr>
                                        <th>Brand</th>
                                        <th>Car’s Model</th>
                                        <th>Plate No.</th>
                                        <th>Most Views </th>
                                        <th>Most Bookings</th>
                                        <th>Most Sales</th>
                                        <th>Most Utilization</th>
                                        <th>Most Idle</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Ferrari</td>
                                        <td>Ferrari F8</td>
                                        <td>J72458</td>
                                        <td>1,123</td>
                                        <td>2,123</td>
                                        <td>aed 1300</td>
                                        <td>45%</td>
                                        <td>20%</td>
                                      </tr>
                                      <tr>
                                        <td>Aston Martin</td>
                                        <td>Vanquish</td>
                                        <td>J92450</td>
                                        <td>1,123</td>
                                        <td>2,123</td>
                                        <td>aed 1300</td>
                                        <td>45%</td>
                                        <td>20%</td>
                                      </tr>
                                      <tr>
                                        <td>McLaren</td>
                                        <td>720S</td>
                                        <td>J52485</td>
                                        <td>1,123</td>
                                        <td>2,123</td>
                                        <td>aed 1300</td>
                                        <td>45%</td>
                                        <td>20%</td>
                                      </tr>
                                      <tr>
                                        <td>Nissan</td>
                                        <td>GT-R</td>
                                        <td>J24352</td>
                                        <td>1,123</td>
                                        <td>2,123</td>
                                        <td>aed 1300</td>
                                        <td>45%</td>
                                        <td>20%</td>
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
                      className="tab-pane fade"
                      id="t3"
                      role="tabpanel"
                      aria-labelledby="t3"
                    >
                      <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                          />
                      <section className="customTabSection customGarageListingSect">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="card">
                              <div className="card-body tableUnderChart">
                                <div className="table-responsive">
                                  <table
                                    className="table table-bordered"
                                    id="save-stage"
                                    style={{ width: '100%' }}
                                  >
                                    <thead>
                                      <tr>
                                        <th>Brand</th>
                                        <th>Car’s Model</th>
                                        <th>Plate No.</th>
                                        <th>Most Views </th>
                                        <th>Most Bookings</th>
                                        <th>Most Sales</th>
                                        <th>Most Utilization</th>
                                        <th>Most Idle</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Ferrari</td>
                                        <td>Ferrari F8</td>
                                        <td>J72458</td>
                                        <td>1,123</td>
                                        <td>2,123</td>
                                        <td>aed 1300</td>
                                        <td>45%</td>
                                        <td>20%</td>
                                      </tr>
                                      <tr>
                                        <td>Aston Martin</td>
                                        <td>Vanquish</td>
                                        <td>J92450</td>
                                        <td>1,123</td>
                                        <td>2,123</td>
                                        <td>aed 1300</td>
                                        <td>45%</td>
                                        <td>20%</td>
                                      </tr>
                                      <tr>
                                        <td>McLaren</td>
                                        <td>720S</td>
                                        <td>J52485</td>
                                        <td>1,123</td>
                                        <td>2,123</td>
                                        <td>aed 1300</td>
                                        <td>45%</td>
                                        <td>20%</td>
                                      </tr>
                                      <tr>
                                        <td>Nissan</td>
                                        <td>GT-R</td>
                                        <td>J24352</td>
                                        <td>1,123</td>
                                        <td>2,123</td>
                                        <td>aed 1300</td>
                                        <td>45%</td>
                                        <td>20%</td>
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
                      className="tab-pane fade"
                      id="t4"
                      role="tabpanel"
                      aria-labelledby="t4"
                    >
                      <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                          />
                      <section className="customTabSection customGarageListingSect">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="card">
                              <div className="card-body tableUnderChart">
                                <div className="table-responsive">
                                  <table
                                    className="table table-bordered"
                                    id="table-2"
                                    style={{ width: '100%' }}
                                  >
                                    <thead>
                                      <tr>
                                        <th>Brand</th>
                                        <th>Car’s Model</th>
                                        <th>Plate No.</th>
                                        <th>Most Views </th>
                                        <th>Most Bookings</th>
                                        <th>Most Sales</th>
                                        <th>Most Utilization</th>
                                        <th>Most Idle</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Ferrari</td>
                                        <td>Ferrari F8</td>
                                        <td>J72458</td>
                                        <td>1,123</td>
                                        <td>2,123</td>
                                        <td>aed 1300</td>
                                        <td>45%</td>
                                        <td>20%</td>
                                      </tr>
                                      <tr>
                                        <td>Aston Martin</td>
                                        <td>Vanquish</td>
                                        <td>J92450</td>
                                        <td>1,123</td>
                                        <td>2,123</td>
                                        <td>aed 1300</td>
                                        <td>45%</td>
                                        <td>20%</td>
                                      </tr>
                                      <tr>
                                        <td>McLaren</td>
                                        <td>720S</td>
                                        <td>J52485</td>
                                        <td>1,123</td>
                                        <td>2,123</td>
                                        <td>aed 1300</td>
                                        <td>45%</td>
                                        <td>20%</td>
                                      </tr>
                                      <tr>
                                        <td>Nissan</td>
                                        <td>GT-R</td>
                                        <td>J24352</td>
                                        <td>1,123</td>
                                        <td>2,123</td>
                                        <td>aed 1300</td>
                                        <td>45%</td>
                                        <td>20%</td>
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
                      className="tab-pane fade"
                      id="t5"
                      role="tabpanel"
                      aria-labelledby="t5"
                    >
                      <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                          />
                      <section className="customTabSection customGarageListingSect">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="card">
                              <div className="card-body tableUnderChart">
                                <div className="table-responsive">
                                  <table
                                    className="table table-bordered"
                                    id="table-5"
                                    style={{ width: '100%' }}
                                  >
                                    <thead>
                                      <tr>
                                        <th>Brand</th>
                                        <th>Car’s Model</th>
                                        <th>Plate No.</th>
                                        <th>Most Views </th>
                                        <th>Most Bookings</th>
                                        <th>Most Sales</th>
                                        <th>Most Utilization</th>
                                        <th>Most Idle</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Ferrari</td>
                                        <td>Ferrari F8</td>
                                        <td>J72458</td>
                                        <td>1,123</td>
                                        <td>2,123</td>
                                        <td>aed 1300</td>
                                        <td>45%</td>
                                        <td>20%</td>
                                      </tr>
                                      <tr>
                                        <td>Aston Martin</td>
                                        <td>Vanquish</td>
                                        <td>J92450</td>
                                        <td>1,123</td>
                                        <td>2,123</td>
                                        <td>aed 1300</td>
                                        <td>45%</td>
                                        <td>20%</td>
                                      </tr>
                                      <tr>
                                        <td>McLaren</td>
                                        <td>720S</td>
                                        <td>J52485</td>
                                        <td>1,123</td>
                                        <td>2,123</td>
                                        <td>aed 1300</td>
                                        <td>45%</td>
                                        <td>20%</td>
                                      </tr>
                                      <tr>
                                        <td>Nissan</td>
                                        <td>GT-R</td>
                                        <td>J24352</td>
                                        <td>1,123</td>
                                        <td>2,123</td>
                                        <td>aed 1300</td>
                                        <td>45%</td>
                                        <td>20%</td>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CarCharts
