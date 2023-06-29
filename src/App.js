import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from "./component/PostList";
import { Container } from "react-bootstrap";
function App() {
  return (
    <>
      <Container>
        <PostList />
      </Container>

    </>
  )
}
export default App