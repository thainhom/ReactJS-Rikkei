import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from "../../actions/cartActions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductDetail({ product }) {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();

    const handleChangeQuantity = (event) => {
        const value = Number(event.target.value)

        if (value > 0) {
            setQuantity(value)
        }
    }

    const handleAdd = () => {
        dispatch(addToCart(product, quantity))
        toast.info("thành công")

    }

    return (
        <Card>
            <Card.Img variant="top" src={product.imageUrl} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Badge bg="secondary">${product.unitPrice}</Badge>
                <Card.Text>{product.description}</Card.Text>
                <Stack direction="horizontal" gap={3}>
                    <Form.Control type="number" value={quantity} onChange={handleChangeQuantity} min={1} />
                    <Button variant="primary" onClick={handleAdd}>Thêm</Button>
                </Stack>
            </Card.Body>
        </Card>
    )
}

export default ProductDetail
