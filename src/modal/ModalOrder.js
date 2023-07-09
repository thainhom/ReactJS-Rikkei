import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// import { addProduct } from "../aciton/shoppingCart"
import { useDispatch, useSelector } from 'react-redux';

function ModalOeder() {
    const ModalsaddProduct = useSelector((state) => state.productReducer.product)
    console.log(111111111111111, ModalsaddProduct);
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

    return (
        <>
            <Button
                className="float-end m-1"
                variant="success" onClick={dandleShow}>
                Add Order
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title> ADD_Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Id đơn hàng</Form.Label>
                    <Form.Control
                        value={value}
                        onChange={() => handleChange()}
                        type="text" placeholder="" />
                    <Form.Label>Id người dùng</Form.Label>
                    <Form.Control
                        value={value}
                        onChange={() => handleChange()}
                        type="text" placeholder="" />
                    <Form.Label>Thời gian oder</Form.Label>
                    <Form.Control
                        value={value}
                        onChange={() => handleChange()}
                        type="text" placeholder="" />
                    <Form.Label>Tổng tiền</Form.Label>
                    <Form.Control
                        disabled
                        value={value}
                        onChange={() => handleChange()}
                        type="text" placeholder="" />
                    <Form.Label>Trạng thái</Form.Label>
                    <Form.Control
                        disabled
                        value={value}
                        onChange={() => handleChange()}
                        type="text" placeholder="" />
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
                    <Button variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>

            { }
        </>
    );
}

export default ModalOeder;