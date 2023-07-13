import React from 'react'
import { Link } from 'react-router-dom'

function Login() {

   
  return (
    <>



    <section class="material-half-bg">
      <div class="cover"></div>
    </section>
    <section class="login-content">
      <div class="logo">
   <img src="images/logoo.jpg" class="mx-auto d-block img-fluid"/>
      </div>
      <div class="login-box rounded">
        <form class="login-form" action="index.html">
          <h3 class="login-head"><i class="fa fa-lg fa-fw fa-user"></i>Login</h3>
          <div class="form-group">
            <label class="control-label">USERNAME</label>
            <input class="form-control" type="text" placeholder="Email" autofocus/>
          </div>
          <div class="form-group">
            <label class="control-label">PASSWORD</label>
            <input class="form-control" type="password" placeholder="Password"/>
          </div>


          <div class="form-group">
            <div class="utility">
              <div class="animated-checkbox">
                <label>
                  <input type="checkbox"/><span class="label-text">Stay Signed in</span>
                </label>
              </div>
              <p class="semibold-text mb-2"><Link to="/forget-password">Forgot Password ?</Link></p>
            </div>
          </div>


          <div class="form-group btn-container">
            <button class="btn btn-primary btn-block"><i class="fa fa-sign-in fa-lg fa-fw"></i>Login</button>
          </div>

        </form>
    
      </div>
    </section>
    </>
  )
}

export default Login