import { Carousel, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from '../../product/productList';


function Home() {
    const navigate = useNavigate()
    const handleLogOut = () => {
        localStorage.removeItem("userLogin");
        navigate("/login")
    }
    const numberOfItems = useSelector(state => state.cartReducer.numberOfItems)
    return (

        <Container>

            <Navbar expand="lg" className="bg-body-tertiary" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
                <Container fluid >
                    <Container>
                        <a href="/">
                            <Button variant="info">Trang chủ</Button>
                        </a>
                        <Link to="/cart" className="float-end m-1" >
                            <Button variant="warning">Giỏ hàng <Badge>{numberOfItems}</Badge></Button>
                        </Link>

                    </Container>
                    <Form className="d-flex">
                        <Form.Control style={{
                            width: '300px',
                        }}
                            type="search"
                            placeholder=".  .  ."
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button className="me-2" variant="outline-success">Tìm...</Button>
                        <Button
                            onClick={handleLogOut}
                            variant="outline-success">Đăng Xuất</Button>
                    </Form>
                </Container>
            </Navbar >
            <Container>

            </Container>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="/img/nươc hoa 2 600.jpg"
                        alt="Dior"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: "red" }}>Dior </h3>
                        <p  >Nước Hoa Nam Dior Sauvage Parfum 100ml.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="/img/anh600.jpg"
                        alt="Channel"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: "Blue" }}>Channel </h3>
                        <p >Nước Hoa Chanel Bleu Gel De Douche 100ml.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/nuoc hoa burberry.jpg"
                        alt="Burberry"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: "pink" }}>Burberry </h3>
                        <p>
                            Nước Hoa Burberry Tudor Rose 100ml.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br></br>
            <h1 style={{ color: "white" }} className='text-center'>Danh sách sản phẩm</h1>

            <ProductList />
        </Container >
    )
}
export default Home