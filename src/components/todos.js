import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
/**   
 * muốn lấy count thì phải cần useSelector đê lấy và dùng dispatch đê sét lại state
 */
import { addTodo, editTodo, deleteTodo } from "../todoActions/todosActions"
// phải import mỗi tk mới dùng được vd như {upCount, downCount}
function Counts() {
    const [todoInput, setTodoinput] = useState({})
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    const handleChange = (event) => {

        setTodoinput(
            event.target.value
        )


    }



    const handleAdd = () => {
        dispatch(addTodo());


    }




    return (
        <>
            <h1> Todos</h1>
            <input type="text" onChange={(e) => handleChange(e)}></input>

            <button onClick={handleAdd}>Add</button>
            {todoInput}
        </>
    )
}
export default Counts