import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import ModalUser from '../../../modal/ModalUesr';
import ModalEditUser from "../../ModalEdit/ModalEditUser"
import { useEffect, useState } from 'react';

function ManagerUser() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const localStorageUsers = window.localStorage.getItem("users") ? JSON.parse(window.localStorage.getItem("users")) : [];
        setUsers(localStorageUsers)
    }, [])

    const refreshUser = () => {
        const localStorageUsers = window.localStorage.getItem("users") ? JSON.parse(window.localStorage.getItem("users")) : [];
        setUsers(localStorageUsers)
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
                        <ModalUser />
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
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Vai trò</th>
                            <th>Thời gian tạo</th>
                            <th> Thời gian cập nhập</th>
                            <th> Hành Động </th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.userId} </td>
                                    <td>{item.username} </td>
                                    <td>{item.email} </td>
                                    <td>{item.role} </td>
                                    <td>{item.createdAt} </td>
                                    <td>{item.updatedAt} </td>

                                    <td>
                                        {/* <Button variant="warning"
                                            className=" m-1"
                                        >Sữa
                                        </Button> */}
                                        <ModalEditUser user={item} refreshUser={refreshUser} />

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
export default ManagerUser