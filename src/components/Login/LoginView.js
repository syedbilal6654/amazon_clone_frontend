import React from 'react'

function LoginView(props) {
    return (
        <div className="container mb-5 ">
        { /*  <!-- login form starts --> */}
          <div className="card mx-auto mt-5 pb-3 shadow  rounded" style={{width: "25rem"}}>
            <div className="card-body">
              <h4 className="card-title">Login</h4>
          {/*     <!-- Login-form-start --> */}
              <form className="row g-3 needs-validation" onSubmit={props.handleSubmit} autoComplete="off" noValidate>
                <div className="form-group">
                  <label forHtml="userEmail">Email: </label>
                  <input type="email" placeholder="abc@abc.com" name="email" className="form-control" id="userEmail"
                    aria-describedby="emailHelp"  onChange={props.handleChange} value={props.email} required style={{width:"370px"}}/>
                  <small id="emailHelp" className="form-text text-muted"><i className="fa-sharp fa-solid fa-circle-info text-primary"></i> We'll never share your email with anyone else.</small>
                  <div className="invalid-feedback">
                <i className="fa-sharp fa-solid fa-triangle-exclamation"></i> Some error in email
                  </div>
                  <div className="valid-feedback">
                    <i className="fa-solid fa-thumbs-up"></i> Ok
                  </div>
                </div>
                <div className="form-group">
                  <label forHtml="userPassword">Password: </label>
                  <input type="password" placeholder="******" name="password" className="form-control" id="userPassword"
                     onChange={props.handleChange} value={props.password} aria-describedby="passlHelp" required minLength="6" style={{width:"370px"}}/>
                  <small id="passwordHelp" className="form-text text-muted"><i className="fa-sharp fa-solid fa-circle-info text-primary"></i> Password must be atleast 6 characters</small>
                  <div className="invalid-feedback">
                <i className="fa-sharp fa-solid fa-triangle-exclamation"></i> Some error in password
                  </div>
                  <div className="valid-feedback">
                    <i className="fa-solid fa-thumbs-up"></i> Ok
                  </div>
                </div>
                <button type="submit" className="btn btn-warning w-100 btn-sm shadow rounded">Submit</button>
              </form>
      
             {/*  <!--or Seperator--> */}
              <hr className="hr-text mt-4" data-content="New to Amazon?"/>
              <a href="../register.html" className="btn btn-dark w-100 mt-2">Create Account</a>
              <a href="#" className="btn btn-outline-success btn-sm w-100 mt-2">
                <i className="fa-brands fa-google"></i> Sign in with Google
              </a>
              <a href="#" className="btn btn-outline-primary btn-sm w-100 mt-2">
                <i className="fa-brands fa-facebook-square"></i> Sign in with Facebook
              </a>
            </div>
          </div>
        </div>
    )
}
export default LoginView;