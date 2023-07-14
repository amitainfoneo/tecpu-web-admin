import React, { useEffect, useState } from 'react';
import { Link,useNavigate   } from 'react-router-dom';
import axiosInstance from '../axiosInstance';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate  = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter email address');
      return;
    }
    if(!password)
    {
      setError('Please enter password');
      return;
    }

    try {
      const response = await axiosInstance.post('/users/login', {
        email: email,
        password: password,
      });
      if(response?.data)
      {
        localStorage.setItem('token',response?.data?.token);
        localStorage.setItem('userId',response?.data?._id);
        localStorage.setItem('roleId',response?.data?.roleId);
        navigate('/dashboard');
      }

      // Handle response and perform necessary actions
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setError('An error occurred during login');
    }
  };

  return (
    <>
      <section className="material-half-bg">
        <div className="cover"></div>
      </section>
      <section className="login-content">
        <div className="logo">
          <img src="images/logoo.jpg" className="mx-auto d-block img-fluid" alt="Logo" />
        </div>
        <div className="login-box rounded">
          <form className="login-form" onSubmit={handleLogin}>
            <h3 className="login-head">
              <i className="fa fa-lg fa-fw fa-user"></i>Login
            </h3>
            {error && <p className="text-danger">{error}</p>}
            <div className="form-group">
              <label className="control-label">EMAIL</label>
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
            </div>
            <div className="form-group">
              <label className="control-label">PASSWORD</label>
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <div className="utility">
                <div className="animated-checkbox">
                  <label>
                    <input type="checkbox" />
                    <span className="label-text">Stay Signed in</span>
                  </label>
                </div>
                <p className="semibold-text mb-2">
                  <Link to="/forget-password">Forgot Password ?</Link>
                </p>
              </div>
            </div>
            <div className="form-group btn-container">
              <button className="btn btn-primary btn-block" type="submit">
                <i className="fa fa-sign-in fa-lg fa-fw"></i>Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
