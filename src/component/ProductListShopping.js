import { useDispatch, useSelector } from "react-redux"
import { deleteProduct } from "../aciton/shoppingCart"


function ProductListShopping() {
    const productList = useSelector((state) => state.productReducer.product);
    console.log(22222222222, productList);
    const dispatch = useDispatch()
    console.log(productList);
    const handleEdit = () => { }
    const handleDelete = (id) => {
        dispatch(deleteProduct(id))
    }

    return (
        <>
            {/* {productList.map((item, index) => {

                <Card key={index} >
                    <Card.Img variant="top" src={item.imageUrl} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Badge bg="secondary">${item.price}</Badge>
                        <Card.Text>{item.description}</Card.Text>
                        <Stack direction="horizontal" gap={3}>
                            <Form.Control type="number" value={quantity} onChange={handleChangeQuantity} min={1} />
                            <Button variant="primary" onClick={handleAdd}>Thêm</Button>
                            <Button variant="warning" onClick={handleEdit}>Sữa</Button>
                            <Button variant="danger" onClick={() => handleDelete(item.id)}>xóa</Button>
                        </Stack>
                    </Card.Body>
                </Card>
            })} */}

        </>
    )
}
export default ProductListShopping