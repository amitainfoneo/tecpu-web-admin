import React from 'react'
import { Link , NavLink } from "react-router-dom"
function Sidenav() {
  const Dropmenu = event => {
    event.currentTarget.classList.toggle('is-expanded');
     }

  return (

    <>

<div className ="app-sidebar__overlay" data-toggle="sidebar"></div>
    <aside className ="app-sidebar">
   
      <ul className ="app-menu">
      

       <li>
      <NavLink to="/" className ="app-menu__item">
      <i className ="app-menu__icon fa fa-dashboard"></i>  Dashboard
      </NavLink>
      </li>
     
      <li className ="treeview " onClick={Dropmenu}><a className ="app-menu__item" href="#" data-toggle="treeview"><i className ="app-menu__icon fa fa-laptop"></i><span className ="app-menu__label">UI Elements</span><i className ="treeview-indicator fa fa-angle-right"></i></a>
          <ul className ="treeview-menu">
            <li> <Link to="/" className ="treeview-item"><i className ="icon fa fa-circle-o"></i> Basic Table </Link></li>
            <li> <Link to="/" className ="treeview-item"><i className ="icon fa fa-circle-o"></i> Basic Table </Link></li>
            <li> <Link to="/" className ="treeview-item"><i className ="icon fa fa-circle-o"></i> Basic Table </Link></li>
          </ul>
        </li>



     



      <li>
      <NavLink to="/table"  className ="app-menu__item">
      <i className ="app-menu__icon fa fa-file-code-o"></i> Table
      </NavLink>
        </li>

        <li>
      <NavLink to="/form"  className ="app-menu__item">
      <i className ="app-menu__icon fa fa-file-code-o"></i> Form
      </NavLink>
        </li>
      </ul>
    </aside>

    </>
  )
}

export default Sidenav