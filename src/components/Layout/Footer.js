import React from 'react'

 function Footer() {
  return (
  <React.Fragment>
{ /*  <!-- footer-start --> */}
  <div className="container-fluid bg-dark px-0" >
      <a className="btn btn-dark btn-block mb-5" href="#pageTop">Back to Top</a>
      <div className="container">
          <div className="row mb-5">
              <div className="col-md-3 text-white mt-2">
                  <h5>Get to know us</h5>
                  <a href="#" className="text-white">About us</a><br/>
                  <a href="#" className="text-white">Careers</a><br/>
                  <a href="#" className="text-white">Press Release</a><br/>
                  <a href="#" className="text-white">Investments</a><br/>
                  <a href="#" className="text-white">Offers</a>
              </div>
              <div className="col-md-3 text-white mt-2">
                  <h5>Connect with us</h5>
                  <a href="#" className="text-white">Facebook</a><br/>
                  <a href="#" className="text-white">Instagram</a><br/>
                  <a href="#" className="text-white">Twitter</a>
              </div>
              <div className="col-md-3 text-white mt-2">
                  <h5>Make money with us</h5>
                  <a href="#" className="text-white">Sell on Amazon</a><br/>
                  <a href="#" className="text-white">Affiliate Marketting</a><br/>
                  <a href="#" className="text-white">Fulfillment Center</a><br/>
                  <a href="#" className="text-white">Investments</a><br/>
                  <a href="#" className="text-white">Amazon pay</a>
              </div>
              <div className="col-md-3 text-white mt-2">
                  <h5>Let us help you</h5>
                  <a href="#" className="text-white">Covid 19</a><br/>
                  <a href="#" className="text-white">Your Accout</a><br/>
                  <a href="#" className="text-white">PReturn Centre</a><br/>
                  <a href="#" className="text-white">Help</a><br/>
              </div>

          </div>
      </div>
      <div className="dropdown-divider mt-3"></div>
      <div className="row mt-3 mx-0 px-0">
          <div className="col-md-12 text-center mx-0 px-0">
              <img src="asserts/img/Amazon-Logo-Transparent-1024x310.png" height="30" width="100"/>
          </div>
      </div>


{ /*  <!-- sub footer start --> */}
  <div className="mt-3 py-3" style={{backgroundColor: "#131a22", fontSize:"12px "}}>
<div className="container">
<div className="row">
  <div className="col-md-3 text-white mt-2">
      <p>Get to know us</p>
      <a href="#" className="text-white">About us</a><br/>
      <a href="#" className="text-white">Careers</a><br/>
      <a href="#" className="text-white">Press Release</a><br/>
      <a href="#" className="text-white">Investments</a><br/>
      <a href="#" className="text-white">Offers</a>
  </div>
  <div className="col-md-3 text-white mt-2">
      <p>Connect with us</p>
      <a href="#" className="text-white">Facebook</a><br/>
      <a href="#" className="text-white">Instagram</a><br/>
      <a href="#" className="text-white">Twitter</a>
  </div>
  <div className="col-md-3 text-white mt-2">
      <p>Make money with us</p>
      <a href="#" className="text-white">Sell on Amazon</a><br/>
      <a href="#" className="text-white">Affiliate Marketting</a><br/>
      <a href="#" className="text-white">Fulfillment Center</a><br/>
      <a href="#" className="text-white">Investments</a><br/>
      <a href="#" className="text-white">Amazon pay</a>
  </div>
  <div className="col-md-3 text-white mt-2">
      <p>Let us help you</p>
      <a href="#" className="text-white">Covid 19</a><br/>
      <a href="#" className="text-white">Your Accout</a><br/>
      <a href="#" className="text-white">Return Centre</a><br/>
      <a href="#" className="text-white">Help</a><br/>
  </div>
</div>

<div className="row my-3">
<div className="col-md-12 text-center text-white">
<p><i className="fa-solid fa-copyright"></i> 1996-2022, Amazon.com</p>
</div>
</div>


</div>
  </div>
{/*   <!-- sub footer ends --> */}
</div>
{/* <!-- footer-ends --> */}
  </React.Fragment>
  )
}
export default Footer;
