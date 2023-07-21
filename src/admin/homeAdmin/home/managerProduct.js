import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import ModalProduct from "../../../modal/ModalProduct"
import ModalEditProduct from '../../ModalEdit/ModalEditProduct';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, editProduct } from '../../../aciton/shoppingCart';
import SimplePagination from '../../../component/SimplePagination';
import { useEffect, useState } from 'react';

function ManagerProduct() {
    const [paginationProduct, setPaginationProduct] = useState([])
    const [displayProducts, setDisplayProducts] = useState([]);
    const productLists = useSelector((state) => state.productReducer.product);
    console.log("productLists", productLists);
    const dispatch = useDispatch()

    const handleDeleteProduct = (id) => {
        dispatch(deleteProduct(id));
    }
    const renderProduct = () => {

        handleSearch("")

    }
    useEffect(() => {
        renderProduct()

    }, [productLists])
    const handleSearch = (keyWord) => {

        console.log("keyWord", keyWord);
        if (!keyWord) {
            setDisplayProducts(productLists)
        } else {

            const filteredProducts = productLists.filter((product => {
                return (
                    product.name.toLowerCase().includes(keyWord) ||
                    product.description.toLowerCase().includes(keyWord) ||
                    (parseFloat(product.unitPrice).toString().includes(keyWord))

                )
            }))
            setDisplayProducts(filteredProducts)
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
                <h1 className='text-center text-info'>Danh sách sản phẩm</h1>
                <Form className="d-flex mb-2">
                    <Form.Control
                        onChange={(e) => handleSearch(e.target.value.toLowerCase())}
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />

                </Form>
                <ModalProduct />
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
                        {paginationProduct.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1} </td>
                                    <td>{item.name} </td>
                                    <td>{item.description} </td>
                                    <td>{item.unitPrice} </td>


                                    <td>
                                        <ModalEditProduct product={item} />

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
                <div className='float-end'><SimplePagination items={displayProducts} setDisplayItems={setPaginationProduct} /></div>

            </Container>
        </>
    )
}
export default ManagerProduct