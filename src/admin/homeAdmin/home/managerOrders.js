import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import ModalOrder from "../../../modal/ModalOrder";
import { useDispatch } from 'react-redux';
import { deleteOrder } from '../../../aciton/shoppingCart';
import { useState, useEffect } from 'react';
import SimplePagination from "../../../component/SimplePagination"
function ManagerOrder() {
    const [order, setOrder] = useState([])
    const [displayOrder, setDisPlayOrder] = useState([])

    const dispatch = useDispatch()
    useEffect(() => {
        refreshOrder()
    }, [])

    const refreshOrder = () => {
        const localStorageUsers = window.localStorage.getItem("orders") ? JSON.parse(window.localStorage.getItem("orders")) : [];
        setOrder(localStorageUsers)
    }

    const handleDeleteOrder = (oderId) => {
        dispatch(deleteOrder(oderId))
        refreshOrder()
    }
    const handleSearch = (keyWord) => {
        if (!keyWord) {
            setDisPlayOrder(order)
            refreshOrder()
        } else {
            const searchOrder = order.filter(order => {
                return (
                    (parseFloat(order.orderId).toString().includes(keyWord)) ||
                    (parseFloat(order.userId).toString().includes(keyWord)) ||
                    (parseFloat(order.total).toString().includes(keyWord))

                )
            })
            setDisPlayOrder(searchOrder)

        }
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
                <h1 className='text-center text-info'> Danh Sách Đơn Hàng</h1>

                <Form className="d-flex mb-2">
                    <Form.Control
                        onChange={(e) => handleSearch(e.target.value)}
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />

                </Form>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Mã đơn </th>
                            <th>Tên người đăt</th>
                            <th>Thời gian đặt</th>
                            <th> Tổng giá</th>
                            <th> Ghi chú</th>
                            <th>Trạng thái</th>
                            <th>Thời gian tạo</th>
                            <th> Thời gian cập nhập</th>
                            <th> Hành Động </th>

                        </tr>
                    </thead>
                    <tbody>
                        {displayOrder.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.orderId} </td>
                                    <td>{item.userId} </td>
                                    <td>{item.orderAt} </td>
                                    <td>{item.total} </td>
                                    <td>{item.role} </td>
                                    <td>{item.status} </td>
                                    <td>{item.createdAt} </td>
                                    <td>{item.updatedAt} </td>
                                    <td>
                                        {/* <Button variant="info"
                                            className=" m-1"
                                        >Xem
                                        </Button> */}
                                        <ModalOrder

                                            order={item} />

                                        <Button

                                            onClick={() => handleDeleteOrder(item.orderId)}
                                            variant="danger"
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

                <div className='float-end'><SimplePagination items={order} setDisplayItems={setDisPlayOrder} /></div>
            </Container>
        </>
    )
}
export default ManagerOrder