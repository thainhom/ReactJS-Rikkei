import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { editProduct } from '../../aciton/shoppingCart';

function ModalEditProduct() {
    const ModalsaddProduct = useSelector((state) => state.productReducer.product)
    const [show, setShow] = useState(false);
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [unitPrice, setUnitPrice] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const dandleShow = () => {
        setShow(true);
        setName("")
        setDescription("")
        setUnitPrice("")
        setImageUrl("")
    }
    const handleChange = (event) => {
        const { name, value } = event.target
        if (name === "name") {
            setName(value)
        }
        if (name === "description") {
            setDescription(value)
        }
        if (name === "unitPrice") {
            setUnitPrice(value)
        }
        if (name === "imageUrl") {
            setImageUrl(value)
        }


    }
    const handleUpdateProduct = () => {

        dispatch(editProduct({
            id: ModalsaddProduct.length ? ModalsaddProduct[ModalsaddProduct.length - 1].id + 1 : 1,
            name: name,
            description: description,
            unitPrice: unitPrice,
            imageUrl: imageUrl,
        }))
        setShow(false);
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
                        value={name}
                        onChange={(e) => handleChange(e)}
                        type="text" placeholder="Nhập sản phẩm" />
                    <Form.Label>Mô tả</Form.Label>
                    <Form.Control
                        name='description'
                        value={description}
                        onChange={(e) => handleChange(e)}
                        type="text" placeholder="Nhập giá" />
                    <Form.Label>Giá</Form.Label>
                    <Form.Control
                        name='unitPrice'
                        value={unitPrice}
                        onChange={(e) => handleChange(e)}
                        type="text" placeholder="" />
                    <Form.Label>Link hình ảnh</Form.Label>
                    <Form.Control
                        name='imageUrl'
                        value={imageUrl}
                        onChange={(e) => handleChange(e)}
                        type="text" placeholder="" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleUpdateProduct} variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>

            { }
        </>
    );
}

export default ModalEditProduct;