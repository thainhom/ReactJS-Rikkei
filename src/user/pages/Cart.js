import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';
function Cart() {
    return (
        <Container>
            <Link to="/" className="float-end m-1">
                <Button variant="info">Trang chủ</Button>
            </Link>
            <h2>Giỏ hàng của bạn</h2>

        </Container>
    )
}
export default Cart