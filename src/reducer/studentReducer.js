const initState = {
    student: [
        {
            id: 1,
            msv: "abc001",
            name: "Nguyen Van A",
            age: 19,
            sex: "nữ"
        },
        {
            id: 2,
            msv: "abc002",
            name: "Nguyen Van B",
            age: 19,
            sex: "nam"

        },
        {
            id: 3,
            msv: "abc003",
            name: "Nguyen Van C",
            age: 19,
            sex: "nam"
        },


    ]
}
const studentReducer = (state = initState, action) => {
    switch (action.type) {
        case "DELETE_STUDENT":
            const deleteStudent = state.student.filter(student => student.id !== action.payload.id)
            // debugger
            return {
                ...state,
                student: deleteStudent
            }





        default:
            break;
    }

    return state

}

export default studentReducer