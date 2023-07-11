import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// import { addProduct } from "../aciton/shoppingCart"
import { useDispatch, useSelector } from 'react-redux';

function ModalUser() {
    const AddUsers = JSON.parse(window.localStorage.getItem("users")) ?? []
    const [show, setShow] = useState(false);
    const [value, setValue] = useState()
    // const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const dandleShow = (data) => {
        setShow(true);
    }
    const handleChange = (event) => {
        const value = event.target.value
        setValue(value);
    }
    const handleAddUsers = () => {
        const newUsers = JSON.parse(window.localStorage.getItem("users")) ?? []
        
    }

    return (
        <>
            <Button
                className="float-end m-1"
                variant="success" onClick={dandleShow}>
                Add Uesr
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title> ADD_User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Tên Đăng nhập</Form.Label>
                    <Form.Control
                        value={value}
                        onChange={() => handleChange()}
                        type="text" placeholder="Nhập sản phẩm" />
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        value={value}
                        onChange={() => handleChange()}
                        type="text" placeholder="Nhập sản phẩm" />
                    <Form.Label>Vai Trò</Form.Label>
                    <Form.Control
                        value={value}
                        onChange={() => handleChange()}
                        type="text" placeholder="Nhập giá" />
                    <Form.Label>Thời gian tạo</Form.Label>
                    <Form.Control
                        disabled
                        value={value}
                        onChange={() => handleChange()}
                        type="text" placeholder="" />
                    <Form.Label>Thời gian cập nhập</Form.Label>
                    <Form.Control
                        disabled
                        value={value}
                        onChange={() => handleChange()}
                        type="text" placeholder="" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleAddUsers} variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>

            { }
        </>
    );
}

export default ModalUser;