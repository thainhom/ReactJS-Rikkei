import { useSelector, useDispatch } from "react-redux"
/**   
 * muốn lấy count thì phải cần useSelector đê lấy và dùng dispatch đê sét lại state
 */
import { upCount, downCount } from "../Actions/Countactions"
// phải import mỗi tk mới dùng được vd như {upCount, downCount}
function Counts() {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    const handleUp = () => {
        dispatch(upCount(1));


    }
    const handleDown = () => {
        dispatch(downCount(1));


    }




    return (
        <>
            <h1> Count components</h1>
            <p>{count}</p>
            <button onClick={handleUp}>UP</button>
            <button onClick={handleDown}>Dowm</button>

        </>
    )
}
export default Counts