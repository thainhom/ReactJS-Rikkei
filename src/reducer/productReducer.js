import { createReducer } from "@reduxjs/toolkit"

const initialState = {
    product: [
        {
            id: 1,
            name: " Burberry Hero",
            description: "Nước Hoa Burberry Hero Edt 100ml",
            price: 70,
            imageUrl: "https://cf.shopee.vn/file/459075f23ea7300b5d16af789392978a",

        },
        {
            id: 2,
            name: "Burberry London",
            description: "Nước Hoa nữ Burberry London For Women, 30ml",
            price: 80,
            imageUrl: "https://bizweb.dktcdn.net/100/457/257/products/nuoc-hoa-burberry-london-for-women-edp1-600x600.jpg?v=1656920210227",

        },
        {
            id: 3,
            name: "Burberry Hero",
            description: "Nước hoa nam Burberry Hero EDT EDP 5ml - 100ml",
            price: 90,
            imageUrl: "https://www.kuteshop.vn/wp-content/uploads/2023/03/nuoc-hoa-burberry-hero-EDP-3.jpg",

        },
        {
            id: 4,
            name: " Dior Jadore ",
            description: "Nước Hoa Dior Jadore 5Ml Mini Hàng Pháp - Hình Giọt Nước ",
            price: 100,
            imageUrl: "https://phanphoimyphamgiasi.com/wp-content/uploads/2021/05/nuoc-hoa-dior-jadore-5ml-mini-hang-phap-hinh-giot-nuoc-dncosmetics.jpg",

        },
        {
            id: 5,
            name: "Dior Joy EDP",
            description: "Nước Hoa Nữ Dior Joy EDP Nước Hoa Nữ Dior Joy EDP  JOLI COSMETIC",
            price: 110,
            imageUrl: "https://product.hstatic.net/200000150709/product/nuoc-hoa-nu-dior-joy-anh3-hangngoainhap1-vn_63f63f856c944520aef6e0c75a922aaa.jpg",

        },
        {
            id: 6,
            name: "Dior Lucky ",
            description: "Dior Lucky by Maison Collection | 10ml – 120ml Hot Hot Hot ",
            price: 120,
            imageUrl: "https://cocoboutique.vn/wp-content/uploads/2023/03/phan-biet-mui-nuoc-hoa-dior-lucky-by-maison-collection.webp",

        },
        {
            id: 7,
            name: " CoCo Chanel",
            description: "Nước Hoa CoCo Chanel Của Pháp 100ml",
            price: 200,
            imageUrl: "https://thuoctot.org/wp-content/uploads/2020/04/coco-chanel-1.jpg",

        },
        {
            id: 8,
            name: "Chanel No.5 Eau De Parfum",
            description: "Nước hoa Chanel No.5 Eau De Parfum 50ml ",
            price: 100,
            imageUrl: "https://bizweb.dktcdn.net/thumb/grande/100/037/737/products/chanel-chanel-no-5-eau-de-parfum.jpg?v=1495705769700",

        },
        {
            id: 9,
            name: "CHANEL Xanh",
            description: "CHANEL Chance Xanh, Chance Eau Fraiche 100ml",
            price: 210,
            imageUrl: "https://bizweb.dktcdn.net/thumb/grande/100/145/194/products/chanel-chance-xanh-1.jpg?v=1657266782077",

        },
    ]

}
const productReducer = createReducer(initialState, {
    ADD_PRODUCT: (state, action) => {
        const newProduct = [...state.product, action.payload]
        state.product = newProduct

    },
    DELETE_PRODUCT: (state, action) => {
        const deleteProduct = action.payload.id
        state.product = state.product.filter(product => product.id !== deleteProduct)
    }

});



export default productReducer