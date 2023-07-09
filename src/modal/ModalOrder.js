import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addOrder } from '../aciton/shoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import moment from "moment/moment";
function ModalOeder() {
    const ModalsaddProduct = useSelector((state) => state.productReducer.product)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [userId, setUserId] = useState("");
    const [orderAt, setOrderAt] = useState("");
    const [total, setTotal] = useState("");
    const [status, setStatus] = useState("");
    const [createdAt, setCreateAt] = useState("");
    const [updatedAt, setUpdateAt] = useState("");

    const handleClose = () => setShow(false);
    const dandleShow = (data) => {
        setShow(true);
    }
    const handleChange = (event) => {
        const { name, value } = event.target
        if (name === "userId") {
            setUserId(value)
        }
        else if (name === "orderAt") {
            setOrderAt(value)
        }
        else if (name === "total") {
            setTotal(value)
        }
        else if (name === "status") {
            setStatus(value)
        }
        else if (name === "createdAt") {
            setCreateAt(value)
        }
        else if (name === "updatedAt") {
            setUpdateAt(value)
        }
    }
    const handleAddOrder = () => {

        dispatch(addOrder({
            orderId: ModalsaddProduct.length ? ModalsaddProduct[ModalsaddProduct.length - 1].id + 1 : 1,
            userId: userId,
            orderAt: moment().format('YYYY-MM-DD HH:mm:ss'),
            total: total,
            status: status,
            createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
            updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),

        }))
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
                        disabled
                        onChange={() => handleChange()}
                        type="text" placeholder="" />
                    <Form.Label>Id người dùng</Form.Label>
                    <Form.Control
                        name='userId'
                        value={userId}
                        onChange={(e) => handleChange(e)}
                        type="text" placeholder="" />
                    <Form.Label>Thời gian oder</Form.Label>
                    <Form.Control
                        name='orderAt'
                        value={orderAt}
                        onChange={(e) => handleChange(e)}
                        type="text" placeholder="" />
                    <Form.Label>Tổng tiền</Form.Label>
                    <Form.Control
                        name='total'
                        value={total}
                        onChange={(e) => handleChange(e)}
                        type="text" placeholder="" />
                    <Form.Label>Trạng thái</Form.Label>
                    <Form.Control
                        name='status'
                        value={status}
                        onChange={(e) => handleChange(e)}
                        type="text" placeholder="" />
                    <Form.Label>Thời gian tạo</Form.Label>
                    <Form.Control
                        name='createdAt'
                        value={createdAt}
                        onChange={() => handleChange(moment().format('YYYY-MM-DD HH:mm:ss'),)}
                        type="text" placeholder="" />
                    <Form.Label>Thời gian cập nhập</Form.Label>
                    <Form.Control
                        name='updatedAt'
                        value={updatedAt}
                        onChange={() => handleChange(moment().format('YYYY-MM-DD HH:mm:ss'),)}
                        type="text" placeholder="" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleAddOrder} variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>

            { }
        </>
    );
}

export default ModalOeder;