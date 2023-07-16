import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductDetail from './ProductDetail'
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

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
    const [filteredProductList, setFilteredProductList] = useState([]);
    console.log("filteredProductList ", filteredProductList);
    const products = useSelector((state) => state.productReducer.product)
    const rows = getRows(products)


    const renderProductList = () => {
        setFilteredProductList(products)
    }
    useEffect(() => {
        renderProductList()
    }, [])

    const handleSearch = (keyWord) => {
        if (!keyWord) {
            setFilteredProductList(products)
        } else {
            const searcProduct = products.filter((search) => {

                return (
                    search.name.toLowerCase().includes(keyWord) ||
                    search.description.toLowerCase().includes(keyWord)
                )
            })
            setFilteredProductList(searcProduct)
        }

    }



    return (
        <>
            <Form className="d-flex">
                <Form.Control style={{
                    width: '935px',
                }}
                    onChange={(e) => handleSearch(e.target.value.toLowerCase())}
                    type="search"
                    placeholder="Tìm kiếm"
                    className="me-2"
                    aria-label="Search"
                />
            </Form>
            {rows.map((row, index) => {
                return (
                    <Row key={index}>
                        {row.map((product, index) => {
                            return (
                                <Col key={index}>
                                    <ProductDetail
                                        items={filteredProductList}
                                        product={product}
                                    />
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
