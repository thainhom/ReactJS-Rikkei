import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import ModalOeder from "../../../modal/ModalOrder";
function managerOrder() {
    const orders = JSON.parse(localStorage.getItem('orders')) ?? [];
    console.log(orders);

    return (
        <>
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
                        <ModalOeder />
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
                            <th>Mã đơn </th>
                            <th>Tên người đăt</th>
                            <th>Thời gian đặt</th>
                            <th> Tổng giá</th>
                            <th>Trạng thái</th>
                            <th>Thời gian tạo</th>
                            <th> Thời gian cập nhập</th>
                            <th> Hành Động </th>

                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.orderId} </td>
                                    <td>{item.userId} </td>
                                    <td>{item.orderAt} </td>
                                    <td>{item.total} </td>
                                    <td>{item.status} </td>
                                    <td>{item.createdAt} </td>
                                    <td>{item.updatedAt} </td>
                                    <td>
                                        <Button variant="info"
                                            className=" m-1"
                                        >Xem
                                        </Button>

                                        <Button variant="danger"
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
export default managerOrder