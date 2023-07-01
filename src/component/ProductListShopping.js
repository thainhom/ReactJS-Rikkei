import { useSelector } from "react-redux"



function ProductListShopping() {
    const productList = useSelector((state) => state.productReducer.product);
    console.log(productList);


    return (
        <>


        </>
    )
}
export default ProductListShopping