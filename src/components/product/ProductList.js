import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductDetail from "./ProductDetail"
import { useSelector } from 'react-redux';

const getRows = (products) => {
    let rows = [];
    let row = [];

    for (const product of products) {
        row.push(product)

        if (row.length === 3) {
            rows.push(row)
            row = []
        }
    }

    if (row.length !== 0) {
        rows.push(row)
    }

    return rows
}

function ProductList() {
    const products = useSelector(state => state.productReducer.products)
    const rows = getRows(products)

    return (
        <>
            {rows.map((row, index) => {
                return (
                    <Row key={index}>
                        {row.map((product, index) => {
                            return (
                                <Col key={index}>
                                    <ProductDetail product={product} />
                                </Col>
                            )
                        })}
                    </Row>
                )
            })}
        </>
    )
}

export default ProductList
