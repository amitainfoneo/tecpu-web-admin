import React from 'react'
import Pagename from '../Utils/Pagename'

function Table() {
  return (
    <>
    <Pagename  pageName="Table"/>




<div class="tile pb-0" style={{backgroundColor:"transparent", boxShadow:"none",}}>
          <div class="tile-title-w-btn">
            <h3 class="title"></h3>
            <p><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
    <i class="fa fa-plus"></i> Add 
</button></p>
          </div>
          
        </div>


        <div className="row">
        <div className="col-md-12">
          <div className="tile">
            <div className="tile-body">
              <div className="table-responsive">
                <table className="table table-hover table-bordered" id="sampleTable">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
                      <td>2011/04/25</td>
                      <td>$320,800</td>
                    </tr>
                    <tr>
                      <td>Garrett Winters</td>
                      <td>Accountant</td>
                      <td>Tokyo</td>
                      <td>63</td>
                      <td>2011/07/25</td>
                      <td>$170,750</td>
                    </tr>
                    <tr>
                      <td>Ashton Cox</td>
                      <td>Junior Technical Author</td>
                      <td>San Francisco</td>
                      <td>66</td>
                      <td>2009/01/12</td>
                      <td>$86,000</td>
                    </tr>
                   
                  </tbody>
                </table>
              </div>

              <nav aria-label="Page navigation example">
  <ul className ="pagination justify-content-center">
    <li className ="page-item disabled">
      <a className ="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li className ="page-item"><a className ="page-link" href="#">1</a></li>
    <li className ="page-item"><a className ="page-link" href="#">2</a></li>
    <li className ="page-item"><a className ="page-link" href="#">3</a></li>
    <li className ="page-item">
      <a className ="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>


            </div>
          </div>
        </div>
      </div>





      <div className ="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className ="modal-dialog modal-dialog-centered" role="document">
    <div className ="modal-content">
      <div className ="modal-header">
        <h5 className ="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" className ="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className ="modal-body">
    
      <form>
  <div class="form-group">
   
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  
  </div>
  <div class="form-group">
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

  </div>
  <div class="form-group">
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

    
      </div>
    </div>
  </div>
</div>
         

         
      
    </>
  )
}

export default Table