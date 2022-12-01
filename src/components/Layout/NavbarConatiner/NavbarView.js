import React from 'react'

 function NavbarView(props) {
  return (
  <React.Fragment>
  
{/*   <!--navbar--> */}
  <nav id='pageTop' className="navbar navbar-expand-md navbar-dark bg-dark">

  {  /* <!-- drawer start --> */}
  <button className="btn btn-outline-light" data-toggle="drawer" data-target="#drawer-demo">
  <i className="fas fa-sliders-h "></i>
</button>

<div className="drawer drawer-left slide" tabindex="-1" role="dialog" aria-labelledby="drawer-demo-title"
  aria-hidden="true" id="drawer-demo">
  <div className="drawer-content drawer-content-scrollable" role="document">
    <div className="drawer-header bg-dark text-white">
      <h4 className="drawer-title mx-auto" id="drawer-demo-title"><i className="fa-regular fa-user"></i>
        Hello, Sign In
      </h4>
    </div>
    <div className="drawer-body">
      <h6 className="text-muted text-uppercase">Help and Settings</h6>
      <a href="#" className="btn btn-outline-success my-2 btn-sm">Your Account</a>
      <a href="../html/Login.html" className="btn btn-warning my-2 btn-sm">Sign In</a>
    </div>
    <div className="drawer-footer"> <button type="button" className="btn btn-outline-danger btn-sm " data-dismiss="drawer"
        aria-label="Close">
        <i className="fa-solid fa-2x fa-xmark"></i>
      </button>
    </div>
  </div>
</div>
   {/*  <!-- drawer ends --> */}
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src="asserts/img/Amazon-Logo-Transparent-1024x310.png" height="30" width="100" alt=""/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="form-inline" method="" get noValidate>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="dropdown px-2">
                <button id="btnCategory" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                  All
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
            <input type="text" className="form-control" size="50" name="query" id="" query />
            <input type="text" name="category" value="" id="category" hidden />
            <div className="input-group-append">
              <button type="submit" className="btn btn-warning">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </form>
        <div className="dropdown px-4">
          <button id="btnCategory" type="button" data-toggle="dropdown">
            <i className="fa-solid fa-language"></i>
          </button>
          <ul className="dropdown-menu ">
            <form className="p-3">
              <div className="custom-control custom-radio mb-2">
                <input className="custom-control-input" type="radio" name="lang" id="enLang"/>
                <label className="custom-control-label" htmlFor="enLang">
                  <img src="asserts/img/flag/english.png" alt="" height="25" width="40"/> <b>English</b>
                </label>
              </div>
              <div className="custom-control custom-radio mb-2">
                <input className="custom-control-input" type="radio" name="lang" id="hinLang"/>
                <label className="custom-control-label" htmlFor="hinLang">

                  <img src="asserts/img/flag/india.webp" alt="" height="25" width="40"/><b>Hindi</b>
                </label>
              </div>
              <div className="custom-control custom-radio mb-2">
                <input className="custom-control-input" type="radio" name="lang" id="urduLang"/>
                <label className="custom-control-label" htmlFor="urduLang">

                  <img src="asserts/img/flag//flag-symbolism-Pakistan-design-Islamic.jpg" alt="" height="25"
                    width="40"/><b>Pak</b>
                </label>
              </div>
              <div className="custom-control custom-radio mb-2">
                <input className="custom-control-input" type="radio" name="lang" id="benLang"/>
                <label className="custom-control-label" htmlFor="benLang">
                  <img src="asserts/img/flag/download.png" alt="" height="25" width="40"/><b>Bangla</b>
                </label>
              </div>
            </form>
          </ul>
        </div>
        <div className="dropdown px-2">
          <button id="userAccount" data-toggle="dropdown">
            <i className="fa-solid fa-user"></i>
          </button>
          <ul className=" dropdown-menu px-3">
            <div className="d-flex flex-column justify-content-center">
              <a href="./Login.html" className="btn btn-warning w-80 btn-sm "><b>Signin</b></a>
              <small>New customer? <a href="#">Start here</a></small>
            </div>
          </ul>
        </div>
        <a className="nav-item ml-3" href="#" aria-disabled="true">
          <i className="fa-2x text-light fa-solid fa-cart-arrow-down"></i>
          <span className="badge badge-warning badge-pill">
            1
          </span>
        </a>
      </div>
    </div>
  </nav>
  </React.Fragment>
  )
}
export default NavbarView;
