import React, { useState, useEffect } from 'react';
import Pagename from '../Utils/Pagename';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axiosInstance from '../axiosInstance';

function User() {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axiosInstance.get('/users/getAll');
      setUserData(response?.data?.items || []);
    } catch (error) {
      console.error(error);
      setUserData([]);
    }
  };

  return (
    <>
      <Pagename pageName="User" />
      <div className="row">
        <div className="col-md-12">
          <div className="tile">
            <div className="tile-body">
              <div className="table-responsive">
                <table className="table table-hover table-bordered" id="sampleTable">
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>First name</th>
                      <th>Last name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>User Type</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData?.map((el, i) => (
                      <tr key={el.id}>
                        <td>{i + 1}.</td>
                        <td>{el.firstName}</td>
                        <td>{el.lastName}</td>
                        <td>{el.email}</td>
                        <td>{el.role[0]?.name}</td>
                        <td>{el.usertype[0]?.name}</td>
                        <td>{el.status ===true?'Active':'Inactive'}</td>
                        <td> <i class="fa fa-edit"></i>| <i class="fa fa-trash"></i> |<i class="fa fa-eye"></i></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default User;
