import React, { useEffect } from 'react'
// import $ from 'jquery'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'

const Support = () => {
  useEffect(() => {
    // cara()
  })

  //   const cara = () => {
  //     $(document).ready(function () {
  //       $('.owl-carousel').owlCarousel({
  //         loop: true,
  //         margin: 10,
  //         responsiveclass: true,
  //         responsive: {
  //           0: {
  //             items: 1,
  //             nav: true,
  //           },
  //           600: {
  //             items: 3,
  //             nav: false,
  //           },
  //           1000: {
  //             items: 3,
  //             nav: true,
  //             loop: false,
  //             margin: 20,
  //           },
  //         },
  //       })
  //     })
  //   }

  const css = `
  [data-simplebar] {
    position: relative;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
    }
    .simplebar-wrapper {
    overflow: hidden;
    width: inherit;
    height: inherit;
    max-width: inherit;
    max-height: inherit;
    }
    .simplebar-mask {
    direction: inherit;
    position: absolute;
    overflow: hidden;
    padding: 0;
    margin: 0;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: auto !important;
    height: auto !important;
    z-index: 0;
    }
    .simplebar-offset {
    direction: inherit !important;
    box-sizing: inherit !important;
    resize: none !important;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0;
    margin: 0;
    -webkit-overflow-scrolling: touch;
    }
    .simplebar-content-wrapper {
    direction: inherit;
    box-sizing: border-box !important;
    position: relative;
    display: block;
    height: 100%; /* Required for horizontal native scrollbar to not appear if parent is taller than natural height */
    width: auto;
    max-width: 100%; /* Not required for horizontal scroll to trigger */
    max-height: 100%; /* Needed for vertical scroll to trigger */
    scrollbar-width: none;
    -ms-overflow-style: none;
    }
    .simplebar-content-wrapper::-webkit-scrollbar,
    .simplebar-hide-scrollbar::-webkit-scrollbar {
    width: 0;
    height: 0;
    }
    .simplebar-content:before,
    .simplebar-content:after {
    content: ' ';
    display: table;
    }
    .simplebar-placeholder {
    max-height: 100%;
    max-width: 100%;
    width: 100%;
    pointer-events: none;
    }
    .simplebar-height-auto-observer-wrapper {
    box-sizing: inherit !important;
    height: 100%;
    width: 100%;
    max-width: 1px;
    position: relative;
    float: left;
    max-height: 1px;
    overflow: hidden;
    z-index: -1;
    padding: 0;
    margin: 0;
    pointer-events: none;
    flex-grow: inherit;
    flex-shrink: 0;
    flex-basis: 0;
    }
    .simplebar-height-auto-observer {
    box-sizing: inherit;
    display: block;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 1000%;
    width: 1000%;
    min-height: 1px;
    min-width: 1px;
    overflow: hidden;
    pointer-events: none;
    z-index: -1;
    }
    .simplebar-track {
    z-index: 1;
    position: absolute;
    right: 0;
    bottom: 0;
    pointer-events: none;
    overflow: hidden;
    }
    [data-simplebar].simplebar-dragging .simplebar-content {
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
    }
    [data-simplebar].simplebar-dragging .simplebar-track {
    pointer-events: all;
    }
    .simplebar-scrollbar {
    position: absolute;
    left: 0;
    right: 0;
    min-height: 10px;
    }
    .simplebar-scrollbar:before {
    position: absolute;
    content: '';
    background: black;
    border-radius: 7px;
    left: 2px;
    right: 2px;
    opacity: 0;
    transition: opacity 0.2s linear;
    }
    .simplebar-scrollbar.simplebar-visible:before {
    /* When hovered, remove all transitions from drag handle */
    opacity: 0.5;
    transition: opacity 0s linear;
    }
    .simplebar-track.simplebar-vertical {
    top: 0;
    width: 11px;
    }
    .simplebar-track.simplebar-vertical .simplebar-scrollbar:before {
    top: 2px;
    bottom: 2px;
    }
    .simplebar-track.simplebar-horizontal {
    left: 0;
    height: 11px;
    }
    .simplebar-track.simplebar-horizontal .simplebar-scrollbar:before {
    height: 100%;
    left: 2px;
    right: 2px;
    }
    .simplebar-track.simplebar-horizontal .simplebar-scrollbar {
    right: auto;
    left: 0;
    top: 2px;
    height: 7px;
    min-height: 0;
    min-width: 10px;
    width: auto;
    }
    /* Rtl support */
    [data-simplebar-direction='rtl'] .simplebar-track.simplebar-vertical {
    right: auto;
    left: 0;
    }
    .hs-dummy-scrollbar-size {
    direction: rtl;
    position: fixed;
    opacity: 0;
    visibility: hidden;
    height: 500px;
    width: 500px;
    overflow-y: hidden;
    overflow-x: scroll;
    }
    .simplebar-hide-scrollbar {
    position: fixed;
    left: 0;
    visibility: hidden;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    }
    .sidebar-menu li:nth-child(14)
    {
    position: relative;
    background-color: #de3255;
    }
    .sidebar-menu li:nth-child(14) a img:first-child 
    {
    display:none;
    }
    .sidebar-menu li:nth-child(14) a img:nth-child(2)
    {
    display:block;
    }
    .sidebar-menu li:nth-child(14) a span
    {
    color:#fff;
    }
  `
  return (
    <div>
        <style>{css}</style>
      <Header />
      <Sidebar />
      {/* <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Support</h1>
          </div>
        </section>
        <section className="section customSupport">
          <div className="section-body">
            <div className="row">
              <div className="col-4">
                <div id="plist" className="people-list">
                  <div className="chat-search">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                  </div>
                  <div className="m-b-20">
                    <div id="chat-scroll">
                      <ul className="chat-list list-unstyled m-b-0">
                        <li className="clearfix">
                          <img src="assets/img/users/user-4.png" alt="avatar" />
                          <div className="about">
                            <div className="name">John Doe</div>
                            <div className="status">
                              <i className="material-icons offline">
                                fiber_manual_record
                              </i>
                              left 7 mins ago
                            </div>
                          </div>
                        </li>
                        <li className="clearfix active">
                          <img src="assets/img/users/user-1.png" alt="avatar" />
                          <div className="about">
                            <div className="name">Michael Gardner</div>
                            <div className="status">
                              <i className="material-icons online">
                                fiber_manual_record
                              </i>
                              online
                            </div>
                          </div>
                        </li>
                        <li className="clearfix">
                          <img src="assets/img/users/user-2.png" alt="avatar" />
                          <div className="about">
                            <div className="name">Nancy Burton</div>
                            <div className="status">
                              <i className="material-icons online">
                                fiber_manual_record
                              </i>
                              online
                            </div>
                          </div>
                        </li>
                        <li className="clearfix">
                          <img src="assets/img/users/user-3.png" alt="avatar" />
                          <div className="about">
                            <div className="name">Wiltor Stone</div>
                            <div className="status">
                              <i className="material-icons online">
                                fiber_manual_record
                              </i>
                              online
                            </div>
                          </div>
                        </li>
                        <li className="clearfix">
                          <img src="assets/img/users/user-5.png" alt="avatar" />
                          <div className="about">
                            <div className="name">Amiah Smith</div>
                            <div className="status">
                              <i className="material-icons online">
                                fiber_manual_record
                              </i>
                              online
                            </div>
                          </div>
                        </li>
                        <li className="clearfix">
                          <img src="assets/img/users/user-7.png" alt="avatar" />
                          <div className="about">
                            <div className="name">Anna Stone</div>
                            <div className="status">
                              <i className="material-icons offline">
                                fiber_manual_record
                              </i>
                              left 30 mins ago
                            </div>
                          </div>
                        </li>
                        <li className="clearfix">
                          <img src="assets/img/users/user-8.png" alt="avatar" />
                          <div className="about">
                            <div className="name">Joseph Henson</div>
                            <div className="status">
                              <i className="material-icons offline">
                                fiber_manual_record
                              </i>
                              left 10 hours ago
                            </div>
                          </div>
                        </li>
                        <li className="clearfix">
                          <img src="assets/img/users/user-9.png" alt="avatar" />
                          <div className="about">
                            <div className="name">Dorothy Hike</div>
                            <div className="status">
                              <i className="material-icons online">
                                fiber_manual_record
                              </i>
                              online
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="card">
                  <div className="card-header customChatHeader">
                    <h4>Support</h4>
                    <label>
                      Search:
                      <input
                        type="search"
                        className="form-control form-control-sm"
                        placeholder=""
                        aria-controls="save-stage"
                      />
                    </label>
                  </div>
                  <div className="card chat chat-person border-0 shadow rounded">
                    <div className="d-flex justify-content-between border-bottom p-4">
                      <div className="d-flex">
                        <img
                          src="assets/img/users/user-1.png"
                          className="avatar avatar-md-sm rounded-circle border shadow userChatImgLeft"
                          alt=""
                        />
                        <div className="overflow-hidden ms-3">
                          <a
                            href="#"
                            className="text-dark mb-0 h6 d-block text-truncate"
                          >
                            Cristino Murphy
                          </a>
                          <small className="text-muted">
                            <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>{' '}
                            Online
                          </small>
                        </div>
                      </div>
                    </div>
                    <ul
                      className="p-4 list-unstyled mb-0 chat"
                      data-simplebar="init"
                      style={{ maxHeight: '560px' }}
                    >
                      <div className="simplebar-wrapper" style="margin: -24px;">
                        <div className="simplebar-height-auto-observer-wrapper">
                          <div className="simplebar-height-auto-observer"></div>
                        </div>
                        <div className="simplebar-mask">
                          <div
                            className="simplebar-offset"
                            style={{ right: '0px', bottom: '0px' }}
                          >
                            <div
                              className="simplebar-content-wrapper"
                              style={{
                                height: 'auto',
                                overflow: 'hidden scroll',
                              }}
                            >
                              <div
                                className="simplebar-content"
                                style={{ padding: '24px' }}
                              >
                                <div className="datediv">
                                  {' '}
                                  <label> 12/01/2022 </label>{' '}
                                </div>
                                <li>
                                  <div className="d-inline-block">
                                    <div className="d-flex chat-type mb-3">
                                      <div className="position-relative userChatImgLeft">
                                        <img
                                          src="assets/img/users/user-1.png"
                                          className="avatar avatar-md-sm rounded-circle border shadow"
                                          alt=""
                                        />
                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                      </div>
                                      <div
                                        className="chat-msg"
                                        style={{ maxWidth: '500px' }}
                                      >
                                        <p className="text-muted small shadow px-3 py-2 bg-white rounded mb-1">
                                          Hey Calvin
                                        </p>
                                        <small className="text-muted msg-time">
                                          <i className="uil uil-clock-nine me-1"></i>
                                          59 min ago
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li className="chat-right">
                                  <div className="d-inline-block">
                                    <div className="d-flex chat-type mb-3">
                                      <div className="position-relative chat-user-image userChatImgRight">
                                        <img
                                          src="assets/img/users/user-2.png"
                                          className="avatar avatar-md-sm rounded-circle border shadow"
                                          alt=""
                                        />
                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                      </div>
                                      <div
                                        className="chat-msg"
                                        style={{ maxWidth: '500px' }}
                                      >
                                        <p className="text-muted small shadow px-3 py-2 bg-white rounded mb-1">
                                          Hello Cristino
                                        </p>
                                        <small className="text-muted msg-time">
                                          <i className="uil uil-clock-nine me-1"></i>
                                          45 min ago
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li className="chat-right">
                                  <div className="d-inline-block">
                                    <div className="d-flex chat-type mb-3">
                                      <div className="position-relative chat-user-image userChatImgRight">
                                        <img
                                          src="assets/img/users/user-2.png"
                                          className="avatar avatar-md-sm rounded-circle border shadow"
                                          alt=""
                                        />
                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                      </div>
                                      <div
                                        className="chat-msg"
                                        style={{ maxWidth: '500px' }}
                                      >
                                        <p className="text-muted small shadow px-3 py-2 bg-white rounded mb-1">
                                          How can i help you?
                                        </p>
                                        <small className="text-muted msg-time">
                                          <i className="uil uil-clock-nine me-1"></i>
                                          44 min ago
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="d-inline-block">
                                    <div className="d-flex chat-type mb-3">
                                      <div className="position-relative userChatImgLeft">
                                        <img
                                          src="assets/img/users/user-1.png"
                                          className="avatar avatar-md-sm rounded-circle border shadow"
                                          alt=""
                                        />
                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                      </div>
                                      <div
                                        className="chat-msg"
                                        style={{ maxWidth: '500px' }}
                                      >
                                        <p className="text-muted small shadow px-3 py-2 bg-white rounded mb-1">
                                          Nice to meet you
                                        </p>
                                        <small className="text-muted msg-time">
                                          <i className="uil uil-clock-nine me-1"></i>
                                          42 min ago
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="d-inline-block">
                                    <div className="d-flex chat-type mb-3">
                                      <div className="position-relative userChatImgLeft">
                                        <img
                                          src="assets/img/users/user-1.png"
                                          className="avatar avatar-md-sm rounded-circle border shadow"
                                          alt=""
                                        />
                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                      </div>
                                      <div
                                        className="chat-msg"
                                        style={{ maxWidth: '500px' }}
                                      >
                                        <p className="text-muted small shadow px-3 py-2 bg-white rounded mb-1">
                                          Hope you are doing fine?
                                        </p>
                                        <small className="text-muted msg-time">
                                          <i className="uil uil-clock-nine me-1"></i>
                                          40 min ago
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li className="chat-right">
                                  <div className="d-inline-block">
                                    <div className="d-flex chat-type mb-3">
                                      <div className="position-relative chat-user-image userChatImgRight">
                                        <img
                                          src="assets/img/users/user-2.png"
                                          className="avatar avatar-md-sm rounded-circle border shadow"
                                          alt=""
                                        />
                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                      </div>
                                      <div
                                        className="chat-msg"
                                        style={{ maxWidth: '500px' }}
                                      >
                                        <p className="text-muted small shadow px-3 py-2 bg-white rounded mb-1">
                                          I'm good thanks for asking
                                        </p>
                                        <small className="text-muted msg-time">
                                          <i className="uil uil-clock-nine me-1"></i>
                                          45 min ago
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="simplebar-placeholder"
                          style={{ width: 'auto', height: '848px' }}
                        ></div>
                      </div>
                      <div
                        className="simplebar-track simplebar-horizontal"
                        style={{ visibility: 'hidden' }}
                      >
                        <div
                          className="simplebar-scrollbar"
                          style={{ width: '0px', display: 'none' }}
                        ></div>
                      </div>
                      <div
                        className="simplebar-track simplebar-vertical"
                        style={{ visibility: 'visible' }}
                      >
                        <div
                          className="simplebar-scrollbar"
                          style={{
                            height: '369px',
                            transform: 'translate3d(0px, 0px, 0px)',
                            display: 'block',
                          }}
                        ></div>
                      </div>
                    </ul>
                    <div className="p-2 rounded-bottom shadow">
                      <div className="row">
                        <div className="col">
                          <input
                            type="text"
                            className="form-control border customChatHolder"
                            placeholder="Enter Message..."
                          />
                        </div>
                        <div className="col-auto">
                          <a href="#" className="btn btn-icon btn-primary">
                            <img
                              src="assets/img/oth/send.png"
                              className="sendArrow"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div> */}
      <Footer/>
    </div>
  )
}

export default Support
