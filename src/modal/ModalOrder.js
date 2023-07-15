import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addOrder } from '../aciton/shoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import moment from "moment/moment";
function ModalOeder({ order }) {
    const ModalsaddProduct = JSON.parse(localStorage.getItem("orders"))
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [draftOrder, setDraftOrder] = useState(order);
    const handleClose = () => setShow(false);
    const handleShow = (data) => {
        setShow(true);
    }
    const handleChange = (event) => {
        let tmpProduct = { ...draftOrder }
        tmpProduct[event.target.name] = event.target.value
        setDraftOrder({ ...tmpProduct })
    }
    return (
        <>
            <Button
                className="float-end-m-1"
                variant="success" onClick={handleShow}>
                xem
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title> Chi tiết đơn hàng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Id đơn hàng</Form.Label>
                    <Form.Control
                        value={draftOrder.orderId}
                        name='orderId'
                        onChange={() => handleChange()}
                        type="text" placeholder="" />
                    <Form.Label>Id người dùng</Form.Label>
                    <Form.Control
                        value={draftOrder.userId}
                        name='userId'
                        onChange={(e) => handleChange(e)}
                        type="text" placeholder="" />
                    <Form.Label>Thời gian oder</Form.Label>
                    <Form.Control
                        disabled
                        value={draftOrder.orderAt}
                        name='orderAt'
                        onChange={(e) => handleChange(e)}
                        type="text" placeholder="" />
                    <Form.Label>Tổng tiền</Form.Label>
                    <Form.Control
                        name='total'
                        value={draftOrder.total}
                        onChange={(e) => handleChange(e)}
                        type="text" placeholder="" />
                    <Form.Label>Ghi chú</Form.Label>
                    <Form.Control
                        name='note'
                        value={draftOrder.note}
                        onChange={(e) => handleChange(e)}
                        type="text" placeholder="" />
                    <Form.Label>Trạng thái</Form.Label>
                    <Form.Control
                        name='status'
                        value={draftOrder.status}
                        onChange={(e) => handleChange(e)}
                        type="text" placeholder="" />
                    <Form.Label>Thời gian tạo</Form.Label>
                    <Form.Control
                        disabled
                        name='createdAt'
                        value={draftOrder.createdAt}
                        onChange={(e) => handleChange(e)}
                        type="text" placeholder="" />
                    <Form.Label>Thời gian cập nhập</Form.Label>
                    <Form.Control
                        disabled
                        name='updatedAt'
                        value={draftOrder.updatedAt}
                        onChange={(e) => handleChange(e)}
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