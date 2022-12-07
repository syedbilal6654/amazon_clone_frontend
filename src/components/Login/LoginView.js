import React from 'react'
import {Link} from 'react-router-dom'
function LoginView(props) {

  'use strict'
  
  const forms = document.querySelectorAll('.needs-validation')

 Array.from(forms).forEach(form => {
   form.addEventListener('submit', event => {
     if (!form.checkValidity()) {
       event.preventDefault()
       event.stopPropagation()
     }

     form.classList.add('was-validated')
   }, false)
 })


    const {t,i18n}=props;
    const rtl=(i18n.languages[0]=='pk' ? 'text-right' : '');
 
    return (
        <div className="container mb-5 ">
        { /*  <!-- login form starts --> */}
          <div className="card mx-auto mt-5 pb-3 shadow  rounded" style={{width: "25rem"}}>
            <div className="card-body">
              <h4 className={`card-title ${rtl}`}>{t('login.title')}</h4>
          {/*     <!-- Login-form-start --> */}
              <form className="row g-3 needs-validation" onSubmit={props.handleSubmit} autoComplete="off" noValidate>
                <div className="form-group">
                  <label forHtml={`userEmail ${rtl}`}>{t('login.lbl_email')}: </label>
                  <input type="email" placeholder="abc@abc.com" name="email" className="form-control" id="userEmail"
                    aria-describedby="emailHelp"  onChange={props.handleChange} value={props.email} required style={{width:"370px"}}/>
                  <small id="emailHelp" className={`form-text text-muted ${rtl}`}><i className="fa-sharp fa-solid fa-circle-info text-primary"></i> {t('login.email_info')}</small>
                  <div className="invalid-feedback">
                <i className="fa-sharp fa-solid fa-triangle-exclamation"></i> Some error in email
                  </div>
                  <div className="valid-feedback">
                    <i className="fa-solid fa-thumbs-up"></i> Ok
                  </div>
                </div>
                <div className="form-group">
                  <label forHtml={`userPassword ${rtl}`}>{t('login.password')}: </label>
                  <input type="password" placeholder="******" name="password" className="form-control" id="password"
                     onChange={props.handleChange} value={props.password} required minLength="6" style={{width:"370px"}}/>
                  <small id="passwordHelp" className={`form-text text-muted ${rtl}`}><i className="fa-sharp fa-solid fa-circle-info text-primary"></i>{t('login.password_info')}</small>
                  <div className="invalid-feedback">
                <i className="fa-sharp fa-solid fa-triangle-exclamation"></i> Some error in password
                  </div>
                  <div className="valid-feedback">
                    <i className="fa-solid fa-thumbs-up"></i> Ok
                  </div>
                </div>
                <button type="submit" className={`btn btn-warning w-100 btn-sm shadow rounded ${rtl}`}>{t('login.btn_signin')}</button>
              </form>
      
             {/*  <!--or Seperator--> */}
              <hr className="hr-text mt-4" data-content={t('login.seperator')}/>
              <Link to="/register" className="btn btn-dark w-100 mt-2">{t('login.btn_create_account')}</Link>
              <Link to="#" className="btn btn-outline-success btn-sm w-100 mt-2">
                <i className="fa-brands fa-google"></i> {t('login.btn_signin_google')}
              </Link>
              <Link to="#" className="btn btn-outline-primary btn-sm w-100 mt-2">
                <i className="fa-brands fa-facebook-square"></i> 
                
                {t('login.btn_signin_facebook')}
              </Link>
            </div>
          </div>
        </div>
    )
}
export default LoginView;