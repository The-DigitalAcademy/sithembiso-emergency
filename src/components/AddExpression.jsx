import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const AddExpression = ({addExpression}) => {
    const [show, setShow] = useState(false);
    const [text, setText] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const add = () => {
        if (!text) {
            return
        }
        addExpression(text)
        handleClose()
        setText('')
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD NEW</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="input-group mb-3">

                        <input type="text" className="form-control" value={text} onChange={(e) => setText(e.target.value)} placeholder="Emergency text" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </Modal.Body>

                <div className="btn-group p-2" role="group" aria-label="Basic example">
                    <Button variant="danger" onClick={handleClose}>
                        CLOSE
                    </Button>
                    <Button variant="secondary" onClick={add}>
                        SAVE
                    </Button>
                </div>

            </Modal>
            <button className="btn btn-outline-success myAddButton" onClick={handleShow}>ADD NEW</button>
        </div>
    )
}

export default AddExpression