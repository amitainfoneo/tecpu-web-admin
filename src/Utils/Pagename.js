import React from 'react'
import { Link } from "react-router-dom"
function Pagename(props) {
  return (
    <>
        <div class="app-title">
        <div>
          <h1><i class="fa fa-dashboard"></i> {props.pageName}</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><Link to="/"> <i class="fa fa-home fa-lg"></i> </Link> </li>
          <li class="breadcrumb-item">{props.pageName}</li>
        </ul>
      </div>
    </>
  )
}
export default Pagename