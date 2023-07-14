import React, { useState, useEffect } from 'react';
import Pagename from '../Utils/Pagename';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axiosInstance from '../axiosInstance';

function Role() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [roleData, setRoleData] = useState([]);

  useEffect(() => {
    fetchRoleData();
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const validationErrors = {};
    if (name.trim() === '') {
      validationErrors.name = 'Name is required';
    }
    if (status.trim() === '') {
      validationErrors.status = 'Status is required';
    }

    // If there are validation errors, set the error state and stop form submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit the form or perform further actions
    console.log('Form submitted');
  };

  const fetchRoleData = async () => {
    try {
      const response = await axiosInstance.get('/roles/getAll');
      setRoleData(response?.data || []);
    } catch (error) {
      console.error(error);
      setRoleData([]);
    }
  };

  return (
    <>
      <Pagename pageName="Role" />
      <div className="tile pb-0" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <div className="tile-title-w-btn">
          <h3 className="title"></h3>
          <Button onClick={handleOpenModal}>
            <i className="fa fa-plus"></i> Add
          </Button>
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
                      <th>S.No.</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roleData.map((el, i) => (
                      <tr key={el.id}>
                        <td>{i + 1}.</td>
                        <td>{el.name}</td>
                        <td>{el.status ===true?'Active':'Inactive'}</td>
                        <td> <i class="fa fa-edit"></i>| <i class="fa fa-trash"></i></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="status">Status:</label>
              <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <button type="submit">Submit</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Role;
