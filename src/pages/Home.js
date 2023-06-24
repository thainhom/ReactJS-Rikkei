import ProductList from '../components/product/ProductList'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Home() {
    const numberOfItems = useSelector(state => state.cartReducer.numberOfItems)

    return (
        <Container>
            <Link to="/cart" className="float-end m-1">
                <Button variant="warning">Giỏ hàng <Badge>{numberOfItems}</Badge></Button>
            </Link>
            <h2 className="text-center">Danh sách sản phẩm</h2>
            <ProductList />
        </Container>
    )
}

export default Home
