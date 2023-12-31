import React from 'react'
import Sidenav from './Sidenav'
import { Link } from 'react-router-dom'
// import { useState } from 'react'
function Header() {

  // const [isActive, setIsActive] = useState(false);
  const handleClick = event => {
    document.body.classList.toggle('sidenav-toggled');
  };


  return (
    <>   
    
     <header className="app-header"><Link to="/" className="app-header__logo" href="index.html"><img src="../images/logoo.jpg"/></Link>
  <div onClick={handleClick} className="app-sidebar__toggle"  data-toggle="sidebar" aria-label="Hide Sidebar"></div>
     
      <ul className="app-nav">
        <li className="app-search">
          <input className="app-search__input" type="search" placeholder="Search"/>
          <button className="app-search__button"><i className="fa fa-search"></i></button>
        </li>
        <li className="dropdown">
        <a className="app-nav__item position-relative" href="#" data-toggle="dropdown" aria-label="Show notifications">
          <i className="fa fa-bell-o fa-lg"></i>
        <span className="badge badge-pill badge-info noti-nuber">5</span>
        </a>
         
          <ul className="app-notification dropdown-menu dropdown-menu-right">
            <li className="app-notification__title">You have <span>4</span> new notifications.</li>
            <div className="app-notification__content">
              <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-primary"></i><i className="fa fa-envelope fa-stack-1x fa-inverse"></i></span></span>
                  <div>
                    <p className="app-notification__message">Lisa sent you a mail</p>
                    <p className="app-notification__meta">2 min ago</p>
                  </div></a></li>
              <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-danger"></i><i className="fa fa-hdd-o fa-stack-1x fa-inverse"></i></span></span>
                  <div>
                    <p className="app-notification__message">Mail server not working</p>
                    <p className="app-notification__meta">5 min ago</p>
                  </div></a></li>
              <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-success"></i><i className="fa fa-money fa-stack-1x fa-inverse"></i></span></span>
                  <div>
                    <p className="app-notification__message">Transaction complete</p>
                    <p className="app-notification__meta">2 days ago</p>
                  </div></a></li>
              <div className="app-notification__content">
                <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-primary"></i><i className="fa fa-envelope fa-stack-1x fa-inverse"></i></span></span>
                    <div>
                      <p className="app-notification__message">Lisa sent you a mail</p>
                      <p className="app-notification__meta">2 min ago</p>
                    </div></a></li>
                <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-danger"></i><i className="fa fa-hdd-o fa-stack-1x fa-inverse"></i></span></span>
                    <div>
                      <p className="app-notification__message">Mail server not working</p>
                      <p className="app-notification__meta">5 min ago</p>
                    </div></a></li>
                <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-success"></i><i className="fa fa-money fa-stack-1x fa-inverse"></i></span></span>
                    <div>
                      <p className="app-notification__message">Transaction complete</p>
                      <p className="app-notification__meta">2 days ago</p>
                    </div></a></li>
              </div>
            </div>

          
          </ul>
        </li>
      
   
        <li className="dropdown"><a className="app-nav__item" href="#" data-toggle="dropdown" aria-label="Open Profile Menu"><i className="fa fa-user fa-lg"></i></a>
          <ul className="dropdown-menu settings-menu dropdown-menu-right">
            <li><Link to="/" className="dropdown-item" href="page-user.html"><i className="fa fa-cog fa-lg"></i> Settings</Link></li>
            <li><Link to="/" className="dropdown-item" href="page-user.html"><i className="fa fa-user fa-lg"></i> Profile</Link></li>
            <li><Link to="/" className="dropdown-item" href="page-login.html"><i className="fa fa-sign-out fa-lg"></i> Logout</Link></li>
          </ul>
        </li>
       
      </ul>
    </header>

 <Sidenav/>
    </>

  )
}

export default Header