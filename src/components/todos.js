import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
/**   
 * muốn lấy count thì phải cần useSelector đê lấy và dùng dispatch đê sét lại state
 */
import { addTodo, updateTodo, deleteTodo } from "../todoActions/todosActions"

// phải import mỗi tk mới dùng được vd như {upCount, downCount}
function Todos() {
    const [todoInput, setTodoInput] = useState("")
    const [error, setError] = useState("")
    const [editIndex, setEditIndex] = useState(null); // Chỉ mục công việc đang được chỉnh sửa


    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const handleChange = (event) => {
        setTodoInput(
            event.target.value
        )

        console.log(todoInput);

    }



    const handleAdd = () => {
        if (todoInput.trim() === "") {
            setError("Vui lòng không để trống");
        } else {
            dispatch(addTodo(todoInput));
            setTodoInput("")
            setError("")
        }
    }

    const handleEdit = (index) => {

        setEditIndex(index)
        setTodoInput(todos[index])

    }
    const handleUpdate = () => {
        if (todoInput.trim() === "") {
            setError("Vui lòng không để trống");
        } else {


            dispatch(updateTodo(editIndex, todoInput,)); // Gọi action để cập nhật công việc

            setEditIndex(null); // Reset chỉ mục công việc đang chỉnh sửa
            setTodoInput(""); // Reset giá trị input
            setError(""); // Reset thông báo lỗi



            console.log(dispatch(updateTodo(editIndex, todoInput)));


        }

    }

    const handleDelete = (index) => {
        todos.splice(index, 1); //
        dispatch(deleteTodo(index));


    }





    return (
        <>
            <h1> Todos</h1>
            <input
                value={todoInput}
                type="text" onChange={(e) => handleChange(e)}></input>

            <button onClick={handleAdd}>Add</button>
            <p>{error}</p>
            {todos.map((todos, index,) => {
                return (
                    <div key={index}>
                        <table border={"1px"}>
                            <thead>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>
                                        {editIndex === index ? (
                                            <input
                                                type="text"
                                                value={todoInput}
                                                onChange={handleChange}
                                            />
                                        ) : (
                                            todos
                                        )}
                                    </td>
                                    <td>

                                        {editIndex === index ? (
                                            <button onClick={handleUpdate}>Save</button>
                                        ) : (
                                            <button onClick={() => handleEdit(index)}>Edit</button>
                                        )}
                                        <button onClick={() => handleDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                            </thead>
                        </table>
                        {/* <span>
                            <h3>{index + 1}</h3>
                            <h3>{Todos}</h3>
                        </span>

                        <span>
                            <button onClick={handleEdit} >Edit</button>
                            <button  >Delete</button>
                        </span> */}
                    </div>
                )

            })}


        </>


    )
}
export default Todos