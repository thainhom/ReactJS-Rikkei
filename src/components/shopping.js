import Button from 'react-bootstrap/Button';
import "./car.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { addShopping, deleteShopping, updateShopping } from "../../../module2/src/shoppingActions/shoppingActions"
function Shopping() {
    const listProduct = useSelector(state => state.shopping)
    const [quantity, setQuantity] = useState(1)
    const [cartItems, setCartItems] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const dispatch = useDispatch()


    const handleChangeQuantity = (e) => {
        const value = Number(e.target.value)
        if (value > 0) {
            setQuantity(value)
        }
    }
    const handleAdd = (id) => {
        const productToAdd = listProduct.find(item => item.id === id);
        if (productToAdd) {
            const updatedProduct = { ...productToAdd, quantity, isEdit: false };
            setCartItems([...cartItems, updatedProduct]);
            setQuantity(1)
        }
    }
    const handleDelete = (index) => {
        const productToDelete = [...cartItems];
        productToDelete.splice(index, 1)
        setCartItems(productToDelete)


    }
    const handleEdit = (id) => {
        setIsEdit(!isEdit)
        cartItems.map(item => {
            if (item.id == id) {
                item.isEdit = true
                return item
            }
        })



    }

    let sum = 0
    cartItems.map(item => {
        sum += Number(item.price * item.quantity)
    })


    const handleSave = (id) => {
        setIsEdit(!isEdit)
        const productEdit = [...cartItems];
        for (let i = 0; i < productEdit.length; i++) {
            if (productEdit[i].id === id) {
                productEdit[i].quantity = quantity
                productEdit[i].isEdit = false
                break;
            }
        }

    }



    <div>
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tên sản phẩm </th>
                    <th>Giá</th>
                    <th>Số lương</th>
                    <th>Thành tiền</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody></tbody>
        </Table>
    </div>


    return (
        <>



            {listProduct.map((item, index) => {
                return (



                    <Card key={index} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.imgUrl} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <Badge bg="secondary">${item.price}</Badge>
                            <Stack direction="horizontal" gap={3}>
                                <Form.Control type="number" value={quantity} onChange={handleChangeQuantity} min={1} />
                                <Button variant="primary" onClick={() => handleAdd(item.id)}>Thêm</Button>
                            </Stack>
                        </Card.Body>
                    </Card>




                )


            })}
            <Container className='col-md-8'>
                <h2>Giỏ hàng của bạn</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên sản phẩm </th>
                            <th>Giá</th>
                            <th>Số lương</th>
                            <th>Thành tiền</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {cartItems.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        {item.isEdit ? <Form.Control
                                            type="number"
                                            defaultValue={item.quantity}
                                            onChange={e => handleChangeQuantity(e, index)}
                                            min={1}
                                        />
                                            : item.quantity
                                        }

                                    </td>
                                    <td>{item.price * item.quantity}</td>
                                    <td>
                                        {item.isEdit === true ? <Button variant="warning" className='me-2' onClick={() => handleSave(item.id)}>Save</Button>
                                            : <Button variant="warning" className='me-2' onClick={() => handleEdit(item.id)}>Edit</Button>}

                                        <Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
                                    </td>
                                </tr>

                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={4}>Tổng giá đơn hàng</td>
                            <td>{sum}</td>
                        </tr>
                    </tfoot>
                </Table>
            </Container>

        </>
    )


}
export default Shopping