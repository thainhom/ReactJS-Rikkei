import axios from "axios";


export const getPostListApi = async () => {
    let post = [];
    await axios.get("https://jsonplaceholder.typicode.com/comments?postId=1")
        .then(response => {
            post = response.data
        })
    return post
}