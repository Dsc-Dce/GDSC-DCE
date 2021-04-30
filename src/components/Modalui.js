import React from "react";
import {Modal} from "react-bootstrap";

const Modals = props => {
    return(
        <div>
            <Modal>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{props.body}</p>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Modals;