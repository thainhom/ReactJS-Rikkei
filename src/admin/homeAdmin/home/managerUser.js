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
import SimplePagination, { NUMBER_ITEMS_PER_PAGE } from "../../../component/SimplePagination"
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../aciton/shoppingCart';

import userApi from '../../api/user.api.js';

function ManagerUser() {
    const dispatch = useDispatch()
    const [keyword, setKeyword] = useState(null);
    const [page, setPage] = useState(1);
    const [user, setUser] = useState([])
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetchUsers()
    }, [keyword, page])
    const fetchUsers = async () => {
        try {
            const response = await userApi.searchUsers({
                name: keyword,
                page: page,
                limit: NUMBER_ITEMS_PER_PAGE,
            });
            console.log(response);
            setUser(response.records); // Cập nhật user
            setTotal(response.total);
        } catch (error) {
            console.error('Lỗi khi lấy danh sách người dùng:', error);
        }
    };





    // tất cả users
    const [users, setUsers] = useState([]);
    // user thỏa mãng điều kiện search `
    const [displayUser, setDisplayUser] = useState([])
    // user hiên thị theo phân trang
    const [paginationUsers, setPaginationUsers] = useState([])
    const [searchKeyWord, setSearchKeyWord] = useState("")
    useEffect(() => {
        refreshUser()
    }, [])
    const refreshUser = () => {
        const localStorageUsers = window.localStorage.getItem("users") ? JSON.parse(window.localStorage.getItem("users")) : [];
        setUsers(localStorageUsers)
    }
    useEffect(() => {
        handleSearch()
    }, [users])
    const handleDeleteUser = (user_id) => {
        dispatch(deleteUser(user_id))
        refreshUser()
    }
    const handleSearch = async (keyWord = "") => {
      
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

                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <h1 className='text-center text-info'>Danh sách người dùng </h1>
                <div className="d-flex mb-2">
                    <Form.Control

                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={(e) => handleSearch(e.target.value.toLowerCase())}
                    />

                </div>
                <ModalUser refreshUser={refreshUser} />

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
                        {user.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.user_id} </td>
                                    <td>{item.username} </td>
                                    <td>{item.email} </td>
                                    <td>{item.role} </td>
                                    <td>{item.created_at} </td>
                                    <td>{item.updated_at} </td>

                                    <td>
                                        {/* <Button variant="warning"
                                            className=" m-1"
                                        >Sữa
                                        </Button> */}
                                        <ModalEditUser user={item} refreshUser={refreshUser} />

                                        <Button
                                            onClick={() => handleDeleteUser(item.user_id)}
                                            variant="danger"
                                            className=" m-1"
                                        >Xóa</Button>
                                    </td>
                                </tr>)
                        })}

                    </tbody>
                </Table>

                <div className='float-end'><SimplePagination total={total} setPage={setPage} /></div>
            </Container>
        </>
    )
}
export default ManagerUser