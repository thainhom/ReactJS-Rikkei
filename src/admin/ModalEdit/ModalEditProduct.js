import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { editProduct } from '../../aciton/shoppingCart';

function ModalEditProduct({ product }) {
    const ModalsaddProduct = useSelector((state) => state.productReducer.product)
    const [show, setShow] = useState(false);

    const [draftProduct, setDraftProduct] = useState(product);

    const dispatch = useDispatch()
    const handleClose = () => setShow(false);

    const handleShow = () => {
        setShow(true);
    }

    const handleChange = (event) => {
        let tmpProduct = { ...draftProduct }
        tmpProduct[event.target.name] = event.target.value
        setDraftProduct({ ...tmpProduct })
    }

    const handleUpdateProduct = () => {
        dispatch(editProduct({ ...draftProduct }))
        setShow(false);
    }

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                Sửa
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Cập nhập sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                        disabled
                        type="text" placeholder="" />
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        name="name"
                        value={draftProduct.name}
                        onChange={(e) => handleChange(e)}
                        type="text" placeholder="Nhập sản phẩm" />
                    <Form.Label>Mô tả</Form.Label>
                    <Form.Control
                        name='description'
                        value={draftProduct.description}
                        onChange={(e) => handleChange(e)}
                        type="text" placeholder="Nhập giá" />
                    <Form.Label>Giá</Form.Label>
                    <Form.Control
                        name='unitPrice'
                        value={draftProduct.unitPrice}
                        onChange={(e) => handleChange(e)}
                        type="text" placeholder="" />
                    <Form.Label>Link hình ảnh</Form.Label>
                    <Form.Control
                        name='imageUrl'
                        value={draftProduct.imageUrl}
                        onChange={(e) => handleChange(e)}
                        type="text" placeholder="" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        onClick={handleUpdateProduct}
                        variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalEditProduct;