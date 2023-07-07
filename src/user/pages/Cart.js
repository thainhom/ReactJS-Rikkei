import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CartList from '../cart/CartList';
import { Link } from 'react-router-dom';
import { checkout } from '../../aciton/shoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function Cart() {
    const dispatch = useDispatch();

    const [note, setNote] = useState('')

    const numberOfItems = useSelector(state => state.cartReducer.numberOfItems)

    const handleCheckout = () => {
        const isCheckout = window.confirm('Bạn có chắc chắn muốn đặt đơn hàng này ?')

        if (isCheckout) {
            dispatch(checkout({
                note: note
            }))
        }
    }

    return (
        <Container>
            <Link to="/home" className="float-end m-1">
                <Button variant="info">Trang chủ</Button>
            </Link>
            <h2 style={{ color: "blue" }}>Giỏ hàng của bạn</h2>
            <CartList />

            {numberOfItems > 0
                ? (
                    <>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="text-white">Ghi chú</Form.Label>
                            <Form.Control as="textarea" rows={3} value={note} onChange={(e) => setNote(e.target.value)} />
                        </Form.Group>
                        <div className="float-end">
                            <Button variant="success" onClick={handleCheckout}>Đặt hàng</Button>
                        </div>
                    </>
                )
                : null}
        </Container>
    )
}

export default Cart