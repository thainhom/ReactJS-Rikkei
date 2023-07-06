import { useSelector } from "react-redux"


function ListShoppingCart() {
    const cartList = useSelector((state) => state.productReducer.product)
    console.log(33333333333, test);
    return (
        <>

        </>
    )
}
export default ListShoppingCart