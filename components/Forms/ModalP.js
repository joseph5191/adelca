import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function ModalP({show,setShow,title,fullscreen,setFullscreen, children }) {

  // const [show, setShow] = useState(false);

  return (
    <>
     

      <Modal
        size="lg"
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
      >
        <Modal.Header  className="title-modal">
        
          <Modal.Title ><h5  className="text-center">{title}</h5></Modal.Title>
          <button onClick={() => setShow(false)} type="button" className="btn-close btn-close-white" aria-label="Close"></button>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
}
