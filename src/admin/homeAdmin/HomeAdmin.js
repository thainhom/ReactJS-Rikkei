import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function HomeAdmin() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Nav className="me-auto">
                    <Link to="/home" className="float-end m-1">
                        <Button variant="info">Home</Button>
                    </Link>
                    <Link to="/adminOrder" className="float-end m-1">
                        <Button variant="info">Manage_Order</Button>
                    </Link>
                    <Link to="/adminProduct" className="float-end m-1">
                        <Button variant="info">Manage_Product</Button>
                    </Link>
                    <Link to="/adminUsers" className="float-end m-1">
                        <Button variant="info">Manage_User</Button>
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default HomeAdmin