import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart, changeQuantity } from '../../aciton/shoppingCart';

function CartList() {
    const cart = useSelector(state => state.cartReducer.cart)
    const total = useSelector(state => state.cartReducer.total)
    const dispatch = useDispatch()

    const handleChange = (e, id) => {
        const quantity = Number(e.target.value)

        if (quantity > 0) {
            dispatch(changeQuantity(id, quantity))
        }
    }

    const handleDelete = (id) => {
        dispatch(deleteFromCart(id))
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tên sản phẩm</th>
                    <th>Đơn giá</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>${item.unitPrice}</td>
                            <td>
                                <Form.Control type="number" value={item.quantity} onChange={(e) => handleChange(e, item.id)} />
                            </td>
                            <td>${item.subTotal}</td>
                            <td>
                                <Button variant="danger" onClick={() => handleDelete(item.id)}>Xóa</Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={4}>Tổng giá đơn hàng</td>
                    <td>${total}</td>
                </tr>
            </tfoot>
        </Table>
    )
}

export default CartList
