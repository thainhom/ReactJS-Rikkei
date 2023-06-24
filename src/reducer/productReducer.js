const initState = {
    products: [
        {
            id: 1,
            name: 'Product 1',
            description: 'description 1',
            unitPrice: 2,
            imageUrl: 'https://cdn.pixabay.com/photo/2017/03/17/16/54/irish-whiskey-2152126_640.jpg'
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'description 2',
            unitPrice: 4,
            imageUrl: 'https://cdn.pixabay.com/photo/2015/08/25/16/12/lime-907124_640.jpg'
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'description 3',
            unitPrice: 6,
            imageUrl: 'https://cdn.pixabay.com/photo/2018/06/03/14/32/pistachios-3450670_640.jpg'
        },
        {
            id: 4,
            name: 'Product 4',
            description: 'description 4',
            unitPrice: 6,
            imageUrl: 'https://cdn.pixabay.com/photo/2017/06/26/12/49/red-wine-2443699_640.jpg'
        },
        {
            id: 5,
            name: 'Product 5',
            description: 'description 5',
            unitPrice: 6,
            imageUrl: 'https://cdn.pixabay.com/photo/2016/10/22/20/34/wines-1761613_640.jpg'
        },
        {
            id: 6,
            name: 'Product 6',
            description: 'description 6',
            unitPrice: 6,
            imageUrl: 'https://cdn.pixabay.com/photo/2017/01/09/02/02/pink-wine-1964457_640.jpg'
        },
    ]
}

const productReducer = (state = initState, action) => {
    return state
}

export default productReducer
