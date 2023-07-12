import React from 'react'
import Pagename from '../Utils/Pagename'
import { useState } from "react";
import {Data } from '../Utils/Data';
import PieChart from '../Components/PieChart';
import { BarChart } from '../Components/BarChart';



function Index() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "green",
          "red",
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
 
  return (
    <>
<Pagename  pageName="Dashbord"/>
<div className="row newwights">
  <div className="col-12 col-md-6 col-lg-3">
    <div className="card">
      <div className="card-header bg-c-yellow">
        <div className="row align-items-center">
        <div className="col-9">
          <h4 className="text-primary">1200</h4>
          <h6 className="text-muted m-b-0">Users</h6>
        </div>
        <div className="col-3 text-right">
          <i className="icon fa fa-users fa-3x"></i>
        </div>
        </div>
      </div>
      <div className="card-footer bg-primary">
      <div className="row align-items-center">
      <div className="col-9">
      <p className="text-white mb-0">% change</p>
      </div>
      <div className="col-3 text-right">
        <i className="fa fa-line-chart" aria-hidden="true"></i>
      </div>
      </div>
      </div>
      </div>
  </div>
  <div className="col-12 col-md-6 col-lg-3">
    <div className="card">
      <div className="card-header bg-c-yellow">
        <div className="row align-items-center">
        <div className="col-9">
          <h4 className="text-primary">1200</h4>
          <h6 className="text-muted m-b-0">Users</h6>
        </div>
        <div className="col-3 text-right">
          <i className="icon fa fa-thumbs-o-up fa-3x"></i>
        </div>
        </div>
      </div>
      <div className="card-footer bg-primary">
      <div className="row align-items-center">
      <div className="col-9">
      <p className="text-white mb-0">3% change</p>
      </div>
      <div className="col-3 text-right">
        <i className="fa fa-line-chart" aria-hidden="true"></i>
      </div>
      </div>
      </div>
      </div>
  </div>

  <div className="col-12 col-md-6 col-lg-3">
    <div className="card">
      <div className="card-header bg-c-yellow">
        <div className="row align-items-center">
        <div className="col-9">
          <h4 className="text-primary">1200</h4>
          <h6 className="text-muted m-b-0">Users</h6>
        </div>
        <div className="col-3 text-right">
          <i className="icon fa fa-files-o fa-3x"></i>
        </div>
        </div>
      </div>
      <div className="card-footer bg-primary">
      <div className="row align-items-center">
      <div className="col-9">
      <p className="text-white mb-0">5% change</p>
      </div>
      <div className="col-3 text-right">
        <i className="fa fa-line-chart" aria-hidden="true"></i>
      </div>
      </div>
      </div>
      </div>
  </div>



  <div className="col-12 col-md-6 col-lg-3">
    <div className="card">
      <div className="card-header bg-c-yellow">
        <div className="row align-items-center">
        <div className="col-9">
          <h4 className="text-primary">1200</h4>
          <h6 className="text-muted m-b-0">Users</h6>
        </div>
        <div className="col-3 text-right">
          <i className="icon fa fa-star fa-3x"></i>
        </div>
        </div>
      </div>
      <div className="card-footer bg-primary">
      <div className="row align-items-center">
      <div className="col-9">
      <p className="text-white mb-0">8% change</p>
      </div>
      <div className="col-3 text-right">
        <i className="fa fa-line-chart" aria-hidden="true"></i>
      </div>
      </div>
      </div>
      </div>
  </div>


</div>


      <div className="row">
        <div className="col-md-6">
          <div className="tile">
            <h3 className="tile-title">Title</h3>
           
                     
            <BarChart chartData={chartData} />
   
  
          </div>
        </div>
        <div className="col-md-6">
          <div className="tile">
            <h3 className="tile-title">Title</h3>
           
            <BarChart chartData={chartData} />
       
          </div>
        </div>
      </div>

    </>
  )
}

export default Index