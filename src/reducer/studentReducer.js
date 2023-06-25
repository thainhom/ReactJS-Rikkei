const initState = {
    student: [
        {
            id: 1,
            masv: "abc001",
            name: "Nguyen Van A",
            age: 19,
            sex: "nữ"
        },
        {
            id: 2,
            masv: "abc001",
            name: "Nguyen Van B",
            age: 19,
            sex: "nam"

        },
        {
            id: 3,
            masv: "abc001",
            name: "Nguyen Van C",
            age: 19,
            sex: "nam"
        },


    ]
}
const studentReducer = (state = initState, action) => {
    return state
}

export default studentReducer