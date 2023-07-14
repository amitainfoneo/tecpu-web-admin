import React from 'react'
import { Link } from 'react-router-dom'

function ForgetPassword() {
  return (
    <>
        <section class="material-half-bg">
      <div class="cover"></div>
    </section>
    <section class="login-content">
      <div class="logo">
   <img src="images/logoo.jpg" class="mx-auto d-block img-fluid"/>
      </div>
      <div class="login-box border rounded">
        <form class="login-form" action="index.html">
          <h3 class="login-head"><i class="fa fa-lg fa-fw fa-user"></i>Login</h3>
          <div class="form-group">
            <label class="control-label">USERNAME</label>
            <input class="form-control" type="text" placeholder="Email" autofocus/>
          </div>


          <div class="form-group btn-container">
            <button class="btn btn-primary btn-block">Reset Password</button>
          </div>

        </form>
    
      </div>
    </section>
    </>
  )
}

export default ForgetPassword