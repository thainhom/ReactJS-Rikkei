import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addProduct } from "../aciton/shoppingCart"
import { useDispatch, useSelector } from 'react-redux';

function Modals() {
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

    return (
        <>
            <Button
                className="float-end m-2"
                variant="success" onClick={dandleShow}>
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
                    <Form.Control
                        value={value}
                        onChange={() => handleChange()}
                        type="text" placeholder="Nhập sản phẩm" />
                    <Form.Label>Mô tả</Form.Label>
                    <Form.Control
                        value={value}
                        onChange={() => handleChange()}
                        type="text" placeholder="Nhập sản phẩm" />
                    <Form.Label>Giá</Form.Label>
                    <Form.Control
                        value={value}
                        onChange={() => handleChange()}
                        type="text" placeholder="Nhập giá" />
                    <Form.Label>Hình ảnh</Form.Label>
                    <Form.Control
                        value={value}
                        onChange={() => handleChange()}
                        type="text" placeholder="Nhập hình ảnh" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>

            { }
        </>
    );
}

export default Modals;