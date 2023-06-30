import { useDispatch, useSelector } from "react-redux"
import { getPostList, changlanguages } from "../aciton/postAciton"
import { Table } from "react-bootstrap"
import React, { useEffect } from "react"
import { getPostListApi } from "../apis/postApi"
import data from "../json/data.json"

function PostList() {
    // debugger
    const language = useSelector(state => state.post)

    const postList = useSelector(state => state.post)
    const dispatch = useDispatch()

    const getPost = (posts) => {
        dispatch(getPostList(posts))
    }

    useEffect(() => {
        getPostListApi()
            .then(posts => {

                // console.log(posts)
                // console.log(typeof posts)
                getPost(posts)
            })

    }, [])

    // console.log(postList)
    // console.log(typeof postList)

    const changlanguage = (event) => {
        const chang = event.target.value

        if (chang === "VI") {
            dispatch(changlanguages(data.languages.en.contenr))

        } else {
            if (chang === "EN") {
                dispatch(changlanguages(data.languages.vi.contenr))
            }
        }
    }



    return (
        <>
            <select onChange={(e) => changlanguage(e)}>
                <option >VI</option>
                <option>EN</option>

            </select>



            <h1 className="text-center"> Danh sách bài viết</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tiêu đề</th>
                        <th>Nội dung</th>
                        <th>Tác giả</th>
                    </tr>
                </thead>
                <tbody>
                    {postList.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id} </td>
                                <td>{item.title} </td>
                                <td>{item.body} </td>
                                <td>{item.userId} </td>
                            </tr>
                        )
                    })}



                </tbody>


            </Table>

        </>
    )
}
export default PostList