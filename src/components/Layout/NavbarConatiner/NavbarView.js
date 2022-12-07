import React from 'react'
import {Link} from 'react-router-dom'

 function NavbarView(props) {
  const {t,rtl}=props;
  console.log(rtl);
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
      <h4 className={`drawer-title mx-auto ${rtl}`} id="drawer-demo-title"><i className="fa-regular fa-user"></i>
        {t('navbar.sidebar_title')}
      </h4>
    </div>
    <div className="drawer-body">
      <h6 className={` text-muted text-uppercase ${rtl}` }>{t('navbar.sidebar_help')}</h6>
      <Link to="#" className={`btn btn-outline-success my-2 btn-sm ${rtl}`}> {t('navbar.btn_account_title')}</Link>
      <Link to="/login" className={`btn btn-warning my-2 btn-sm ${rtl}`}> {t('navbar.btn_signin_title')}</Link>
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
      <Link className="navbar-brand" to="/">
        <img src="asserts/img/Amazon-Logo-Transparent-1024x310.png" height="30" width="100" alt=""/>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <form className="form-inline" onSubmit={props            .handleSearch}  method="" get noValidate>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="dropdown px-2">
                <button id="btnCategory" type="button" className={`btn btn-secondary dropdown-toggle ${rtl}`} data-toggle="dropdown">
                {t(props.productCategory[props.selectedCat])}
                </button>
                <ul className="dropdown-menu">
                  <li><Link className={`dropdown-item ${rtl}`} onClick={(e)=>{props.handleCatChange(e,0)}} to="#">{t('navbar.product_category.all')}</Link></li>
                  <li><Link className={`dropdown-item ${rtl}`} onClick={(e)=>{props.handleCatChange(e,1)}} to="#">{t('navbar.product_category.smartphone')}</Link></li>
                  <li><Link className={`dropdown-item ${rtl}`} onClick={(e)=>{props.handleCatChange(e,2)}} to="#">{t('navbar.product_category.kitchen_hardware')}</Link></li>
                  <li><Link className={`dropdown-item ${rtl}`} onClick={(e)=>{props.handleCatChange(e,3)}} to="#">{t('navbar.product_category.prime_deal')}</Link></li>
                  <li><Link className={`dropdown-item ${rtl}`} onClick={(e)=>{props.handleCatChange(e,4)}} to="#">{t('navbar.product_category.book')}</Link></li>
                </ul>
              </div>
            </div>
            <input type="text" className={`form-control ${rtl}`} size="50" name="query" id="" query 
            onChange={props.handleQueryChange} value={props.query}/>
            <input type="text" name="category" value={props.selectedCat} id="category" hidden />
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
                <input className="custom-control-input" type="radio" name="prefLang" id="enLang" value="en"  
                onClick={props.handleChangeLang} checked={props.prefLang=="en"?true:false}/>
                <label className="custom-control-label" htmlFor="enLang">
                  <img src="asserts/img/flag/english.png" alt="" height="25" width="36"/> <b className={`${rtl}`}>{t('navbar.flag_en')}</b>
                </label>
              </div>
              <div className="custom-control custom-radio mb-2">
                <input className="custom-control-input" type="radio" name="prefLang" id="hinLang" value="in" 
                onClick={props.handleChangeLang} checked={props.prefLang=="in"?true:false}/>
                <label className="custom-control-label" htmlFor="hinLang">

                  <img src="asserts/img/flag/india.webp" alt="" height="25" width="40"/><b className={`${rtl}`}>{t('navbar.flag_in')}</b>
                </label>
              </div>
              <div className="custom-control custom-radio mb-2">
                <input className="custom-control-input" type="radio" name="prefLang" id="urduLang" value="pk"  
                onClick={props.handleChangeLang} checked={props.prefLang=="pk"?true:false}/>
                <label className="custom-control-label" htmlFor="urduLang">

                  <img src="asserts/img/flag//flag-symbolism-Pakistan-design-Islamic.jpg" alt=""  height="25"
                    width="40"/><b className={`${rtl}`}>{t('navbar.flag_pk')}</b>
                </label>
              </div>
              <div className="custom-control custom-radio mb-2">
                <input className="custom-control-input" type="radio" name="prefLang" id="benLang" value="bd" 
                onClick={props.handleChangeLang} checked={props.prefLang=="bd"?true:false}/>
                <label className="custom-control-label" htmlFor="benLang">
                  <img src="asserts/img/flag/download.png" alt="" height="25" width="40"/><b className={`${rtl}`}>{t('navbar.flag_bd')}</b>
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
              <Link to="/login" className="btn btn-warning w-80 btn-sm "><b>{t('navbar.menu_signin_btn_title')}</b></Link>
              <small className={`${rtl}`}>{t('navbar.menu_signin_sub_title')} <Link to="/register">{t('navbar.menu_signin_register_text')}</Link></small>
            </div>
          </ul>
        </div>
        <Link className="nav-item ml-3" to="#" aria-disabled="true">
          <i className="fa-2x text-light fa-solid fa-cart-arrow-down"></i>
          <span className="badge badge-warning badge-pill">
            1
          </span>
        </Link>
      </div>
    </div>
  </nav>
  </React.Fragment>
  )
}
export default NavbarView;
