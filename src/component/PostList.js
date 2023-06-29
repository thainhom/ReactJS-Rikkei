import { useDispatch, useSelector } from "react-redux"
import { getPostList } from "../aciton/postAciton"
import { Table } from "react-bootstrap"
import React, { useEffect } from "react"
import { getPostListApi } from "../apis/postApi"


function PostList() {
    const postList = useSelector(state => state.post)
    const dispatch = useDispatch
    const getPost = (posts) => {
        dispatch(getPostList(posts))
    }
    getPost()
    useEffect(() => {
        getPostListApi()
            .then(posts => {
                getPost(posts)
            })

    }, [])

    return (


        <>

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
                    {postList.map(item => {
                        <tr key={item.id}>
                            <td>{item.id} </td>
                            <td>{item.title} </td>
                            <td>{item.body} </td>
                            <td>{item.userId} </td>
                        </tr>
                    })}
                </tbody>


            </Table>

        </>
    )
}
export default PostList