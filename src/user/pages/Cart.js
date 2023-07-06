import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import CartList from '../cart/CartList';
import { Link } from 'react-router-dom';
function Cart() {
    return (
        <Container>
            <Link to="/home" className="float-end m-1">
                <Button variant="info">Trang chủ</Button>
            </Link>
            <h2 style={{ color: "blue" }}>Giỏ hàng của bạn</h2>
           <CartList/>
        </Container>

    )
}
export default Cart