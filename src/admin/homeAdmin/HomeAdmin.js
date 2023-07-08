import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function HomeAdmin() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Home
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/home" className="float-end m-1">
                        <Button variant="info">Trang chủ</Button>
                    </Link>
                    <Link to="/home" className="float-end m-1">
                        <Button variant="info"></Button>
                    </Link>
                    <Link to="/home" className="float-end m-1">
                        <Button variant="info">Trang chủ</Button>
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default HomeAdmin