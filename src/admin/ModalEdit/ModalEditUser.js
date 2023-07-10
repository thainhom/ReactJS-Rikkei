import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { editUser } from "../../aciton/shoppingCart"
import { useDispatch, useSelector } from 'react-redux';

function ModalUser() {
    const ModalsaddProduct = useSelector((state) => state.productReducer.product)
    console.log(111111111111111, ModalsaddProduct);
    const [show, setShow] = useState(false);
    const [value, setValue] = useState()
    const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const dandleShow = (data) => {
        setShow(true);
    }
    const handleChange = (event) => {
        const value = event.target.value
        setValue(value);
    }
    const handleUpdateUsers = () => {
        dispatch(editUser)
    }

    return (
        <>
            <Button

                variant="warning" onClick={dandleShow}>
                Sữa
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Cập nhập người dùng</Modal.Title>
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
                    <Button onClick={handleUpdateUsers} variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>

            { }
        </>
    );
}

export default ModalUser;