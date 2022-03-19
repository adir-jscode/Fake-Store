import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ReactModal = (props) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
         <>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
                    <Modal.Title>{ props.product.title}</Modal.Title>
                </Modal.Header>
                <img className="w-50 mx-auto" src={ props.product.image}></img>
                <Modal.Body>{ props.product.description }</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
};

export default ReactModal;