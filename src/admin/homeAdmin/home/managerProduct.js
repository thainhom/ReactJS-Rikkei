import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import ModalProduct from "../../../modal/ModalProduct"
import ModalEditProduct from '../../ModalEdit/ModalEditProduct';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, editProduct } from '../../../aciton/shoppingCart';
function ManagerProduct() {
    const productLists = useSelector((state) => state.productReducer.product);
    const dispatch = useDispatch()
    const handleDeleteProduct = (id) => {
        dispatch(deleteProduct(id));
    }
    const handleEditProduct = () => {

    }
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
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
                        <ModalProduct />
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Container>
            </Navbar>
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>ID </th>
                            <th>Name</th>
                            <th>description</th>
                            <th>unitPrice</th>
                            <th> Hành Động </th>

                        </tr>
                    </thead>
                    <tbody>
                        {productLists.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1} </td>
                                    <td>{item.name} </td>
                                    <td>{item.description} </td>
                                    <td>{item.unitPrice} </td>


                                    <td>
                                        {/* <Button
                                            onClick={handleEditProduct}
                                            variant="warning"
                                            className=" m-1"
                                        >Sữa
                                        </Button> */}
                                        <ModalEditProduct />

                                        <Button onClick={() => handleDeleteProduct(item.id)} variant="danger"
                                            className=" m-1"
                                        >Xóa</Button>
                                    </td>
                                </tr>)
                        })}




                        {/* <tr>
                            <td>3</td>
                            <td colSpan={4}></td>
                            <td >Totol</td>
                        </tr> */}
                    </tbody>
                </Table>


            </Container>
        </>
    )
}
export default ManagerProduct