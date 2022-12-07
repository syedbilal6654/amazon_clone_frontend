import React from 'react'
import {Link} from 'react-router-dom'



function RegisterView(props) {

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

  return (
    <div className="container mb-5 ">
 { /*     <!-- Register form starts --> */}
  <div className="card mx-auto mt-5 pb-3 shadow  rounded" style={{width: "25rem"}}>
    <div className="card-body">
      <h4 className="card-title">Register</h4>
    {  /* <!-- register-form-start --> */}
      <form className="row g-3 needs-validation" autocomplete="off" onSubmit={props.handleSubmit} method="post" action="#" noValidate>
        <div className="form-group">
          <label for="userName">Your Name: </label>
          <input name="name" type="text" placeholder="enter name" className="form-control"
               value={props.name}   onChange={props.handleChange} id="userName" required minlength="10"/>
          <div className="invalid-feedback">
              <i className="fa-sharp fa-solid fa-triangle-exclamation"></i> Some error in your name
                </div>
                <div className="valid-feedback">
                  <i className="fa-solid fa-thumbs-up"></i> Ok
                </div>
           </div> 
         <div className="form-group">
          <label for="userEmail">Email: </label>
          <input type="email"  value={props.email} onChange={props.handleChange} placeholder="abc@abc.com" name="email" className="form-control" id="userEmail"
            aria-describedby="emailHelp" required/>
            <div className="invalid-feedback">
              <i className="fa-sharp fa-solid fa-triangle-exclamation"></i> Some error in your Email
                </div>
                <div className="valid-feedback">
                  <i className="fa-solid fa-thumbs-up"></i> Ok
                </div>
          <small id="emailHelp" className="form-text text-muted"><i className="fa-sharp fa-solid fa-circle-info text-primary"></i> We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="userPassword">Password: </label>
          <input type="password"  value={props.password1}   onChange={props.handleChange} placeholder="******" name="password1" className="form-control" id="userPassword"
            aria-describedby="emailHelp" required minlength="6"/>
            <div className="invalid-feedback">
              <i className="fa-sharp fa-solid fa-triangle-exclamation"></i> Some error in your password
                </div>
                <div className="valid-feedback">
                  <i className="fa-solid fa-thumbs-up"></i> Ok
                </div>
          <small id="passwordHelp" className="form-text text-muted">Password must be atleast 6 characters</small>
        </div> 
        <div className="form-group">
          <label for="userPassword2"><i className="fa-sharp  fa-solid fa-circle-info text-primary"></i>password again: </label>
          <input type="password2" placeholder="******" value={props.password2}   onChange={props.handleChange} name="password2" className="form-control" id="userPassword"
           aria-describedby="emailHelp" required minlength="6"/>
            <div className="invalid-feedback">
              <i className="fa-sharp fa-solid fa-triangle-exclamation"></i> Some error in your password
                </div>
                <div className="valid-feedback">
                  <i className="fa-solid fa-thumbs-up"></i> Ok
                </div>
          <small id="passwordHelp" className="form-text text-muted"><i className="fa-sharp fa-solid fa-circle-info text-primary"></i> Password must match the above</small>
        </div>
        <button type="submit" className="btn btn-warning w-100 btn-sm shadow rounded">Register</button>
      </form>
{
    /*   <!-- <--or Seperator--> */}
      <hr className="hr-text mt-2" data-content="OR"/>

    <p className="text-center">Already have an account?
     <Link to="/login">Sign In<i className="fa-solid fa-caret-right"></i></Link> </p>

      <Link to="#" className="btn btn-outline-success btn-sm w-100 mt-2">
        <i className="fa-brands fa-google"></i> Sign in with Google
      </Link>
      <Link to="#" className="btn btn-outline-primary btn-sm w-100 mt-2">
        <i className="fa-brands fa-facebook-square"></i> Sign in with Facebook
      </Link>
    </div>
  </div>
</div>  
  )
}

export default RegisterView;