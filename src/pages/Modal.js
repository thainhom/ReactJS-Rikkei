import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function Modals() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                className="float-end m-2"
                variant="success" onClick={handleShow}>
                Thêm sản phẩm
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title> ADD_PRODUCT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Tên sản phẩm</Form.Label>
                    <Form.Control type="text" placeholder="Nhập sản phẩm" />
                    <Form.Label>Mô tả</Form.Label>
                    <Form.Control type="text" placeholder="Nhập sản phẩm" />
                    <Form.Label>Giá</Form.Label>
                    <Form.Control type="text" placeholder="Nhập giá" />
                    <Form.Label>Hình ảnh</Form.Label>
                    <Form.Control type="text" placeholder="Nhập hình ảnh" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Modals;