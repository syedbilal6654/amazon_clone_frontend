import React from 'react'

 function Footer(props) {
    const {t,i18n}=props;
    const rtl=(i18n.languages[0]=='pk' ? 'text-right' : '');
  return (
  <React.Fragment>
{ /*  <!-- footer-start --> */}
  <div className="container-fluid bg-dark px-0" >
      <a className={`btn btn-dark btn-block mb-5 ${rtl}`} href="#pageTop">{t('footer.back_to_top')}</a>
      <div className="container">
          <div className="row mb-5">
              <div className="col-md-3 text-white mt-2">
                  <h5>{t('footer.upper.col1.title')}</h5>
                  <a href="#" className={`text-white ${rtl} `}>{t('footer.upper.col1.about')}</a><br/>
                  <a href="#" className={`text-white ${rtl} `}>{t('footer.upper.col1.careers')}</a><br/>
                  <a href="#" className={`text-white ${rtl} `}>{t('footer.upper.col1.press_release')}</a><br/>
                  <a href="#" className={`text-white ${rtl} `}>{t('footer.upper.col1.investments')}</a><br/>
                  <a href="#" className={`text-white ${rtl} `}>{t('footer.upper.col1.offers')}</a>
              </div>
              <div className="col-md-3 text-white mt-2">
                  <h5>{t('footer.upper.col2.title')}</h5>
                  <a href="#" className={`text-white ${rtl}`}>{t('footer.upper.col2.facebook')}</a><br/>
                  <a href="#" className={`text-white ${rtl} `}>{t('footer.upper.col2.instagram')}</a><br/>
                  <a href="#" className={`text-white ${rtl} `}>{t('footer.upper.col2.twitter')}</a>
              </div>
              <div className="col-md-3 text-white mt-2">
                  <h5>{t('footer.upper.col3.title')}</h5>
                  <a href="#" className={`text-white ${rtl} `}>{t('footer.upper.col3.sell_on_amazon')}</a><br/>
                  <a href="#" className={`text-white ${rtl} `}>{t('footer.upper.col3.affiliate')}</a><br/>
                  <a href="#" className={`text-white ${rtl} `}>{t('footer.upper.col3.fulfillment')}</a><br/>
                  <a href="#" className={`text-white ${rtl} `}>{t('footer.upper.col3.investments')}</a><br/>
                  <a href="#" className={`text-white ${rtl} `}>{t('footer.upper.col3.amazon_pay')}</a>
              </div>
              <div className="col-md-3 text-white mt-2">
                  <h5>{t('footer.upper.col4.title')}</h5>
                  <a href="#" className={`text-white ${rtl} `}>{t('footer.upper.col4.your_account')}</a><br/>
                  <a href="#" className={`text-white ${rtl} `}>{t('footer.upper.col4.return_centre')}</a><br/>
                  <a href="#" className={`text-white ${rtl} `}>{t('footer.upper.col4.covid_19')}</a><br/>
                  <a href="#" className={`text-white ${rtl} `}>{t('footer.upper.col4.help')}</a><br/>
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
      <p >{t('footer.lower.col1.title')}</p>
      <a href="#" className={`text-white ${rtl}`}>{t('footer.lower.col1.about')}</a><br/>
      <a href="#" className={`text-white ${rtl}`}>{t('footer.lower.col1.careers')}</a><br/>
      <a href="#" className={`text-white ${rtl}`}>{t('footer.lower.col1.press_release')}</a><br/>
      <a href="#" className={`text-white ${rtl}`}>{t('footer.lower.col1.investments')}</a><br/>
      <a href="#" className={`text-white ${rtl}`}>{t('footer.lower.col1.offers')}</a>
  </div>
  <div className="col-md-3 text-white mt-2">
      <p  >{t('footer.lower.col2.title')}</p>
      <a href="#" className={`text-white ${rtl}`}>{t('footer.lower.col2.facebook')}</a><br/>
      <a href="#" className={`text-white ${rtl}`}>{t('footer.lower.col2.instagram')}</a><br/>
      <a href="#" className={`text-white ${rtl}`}>{t('footer.lower.col2.twitter')}</a>
  </div>
  <div className="col-md-3 text-white mt-2">
      <p >{t('footer.lower.col3.title')}</p>
      <a href="#" className={`text-white ${rtl}`}>{t('footer.lower.col3.sell_on_amazon')}</a><br/>
      <a href="#" className={`text-white ${rtl}`}>{t('footer.lower.col3.affiliate')}</a><br/>
      <a href="#" className={`text-white ${rtl}`}>{t('footer.lower.col3.fulfillment')}</a><br/>
      <a href="#" className={`text-white ${rtl}`}>{t('footer.lower.col3.investments')}</a><br/>
      <a href="#" className={`text-white ${rtl}`}>{t('footer.lower.col3.amazon_pay')}</a>
  </div>
  <div className="col-md-3 text-white mt-2">
      <p >{t('footer.lower.col4.title')}</p>
      <a href="#" className={`text-white ${rtl}`}>{t('footer.lower.col4.your_account')}</a><br/>
      <a href="#" className={`text-white ${rtl}`}>{t('footer.lower.col4.return_centre')}</a><br/>
      <a href="#" className={`text-white ${rtl}`}>{t('footer.lower.col4.covid_19')}</a><br/>
      <a href="#" className={`text-white ${rtl}`}>{t('footer.lower.col4.help')}</a><br/>
  </div>
</div>

<div className="row my-3">
<div className="col-md-12 text-center text-white">
<p><i className={`fa-solid fa-copyright} ${rtl}`}></i> 1996-2022, {t('footer.lower_heading')}</p>
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
