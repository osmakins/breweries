import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Details = (props) => {

  const [modalShow, setShowModal] = useState(false);

  return (
    <>
      <Button className='btn btn-success' onClick={() => setShowModal(true)}>View Details</Button>
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.brewery.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Showing detail for {props.brewery.name}</h3>
          <p><strong>Name:</strong> {props.brewery.name}</p>
          <p><strong>Brewery_type:</strong> {props.brewery.brewery_type}</p>
          <p><strong>Street:</strong> {props.brewery.street}</p>
          <p><strong>Address_2:</strong> {props.brewery.address_2}</p>
          <p><strong>Address_3:</strong> {props.brewery.address_3}</p>
          <p><strong>City:</strong> {props.brewery.city}</p>
          <p><strong>State:</strong> {props.brewery.state}</p>
          <p><strong>County_province:</strong> {props.brewery.county_province}</p>
          <p><strong>Postal_code:</strong> {props.brewery.postal_code}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Details;