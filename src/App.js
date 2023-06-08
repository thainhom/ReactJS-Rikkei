import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: "",
      show: false,
      editingIndex: -1,
    };
  }

  // Hiển thị hoặc ẩn Modal
  handleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
      newTodo: "",
      editingIndex: -1,
    }));
  };

  // Xử lý sự kiện thay đổi input thêm/sửa công việc
  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  // Xử lý sự kiện thêm công việc mới
  handleAddTodo = () => {
    const { todos, newTodo } = this.state;
    if (newTodo.trim() !== "") {
      const updatedTodos = [...todos, newTodo];
      this.setState({
        todos: updatedTodos,
        newTodo: "",
      });
      this.handleShow(); // Đóng Modal sau khi thêm công việc
    }
  };

  // Xử lý sự kiện chỉnh sửa công việc
  handleEditTodo = (index) => {
    const { todos } = this.state;
    const editedTodo = todos[index];
    this.setState({
      newTodo: editedTodo,
      editingIndex: index,
      show: true,
    });
  };

  // Xử lý sự kiện cập nhật công việc đã chỉnh sửa
  handleUpdateTodo = () => {
    const { todos, newTodo, editingIndex } = this.state;
    if (newTodo.trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[editingIndex] = newTodo;
      this.setState({
        todos: updatedTodos,
        newTodo: "",
        editingIndex: -1,
      });
      this.handleShow(); // Đóng Modal sau khi cập nhật công việc
    }
  };

  // Xử lý sự kiện xóa công việc
  handleDeleteTodo = (index) => {
    const { todos } = this.state;
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    this.setState({ todos: updatedTodos });
  };

  render() {
    const { todos, newTodo, show } = this.state;
    const editingIndex = this.state.editingIndex; // Thêm dòng này

    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Button variant="outline-info" onClick={this.handleShow}>
          Add
        </Button>
        <Modal
          show={show}
          onHide={this.handleShow}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{editingIndex === -1 ? "Add" : "Edit"} Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              type="text"
              value={newTodo}
              onChange={this.handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button
              onClick={
                this.state.editingIndex === -1
                  ? this.handleAddTodo
                  : this.handleUpdateTodo
              }
              variant="primary"
            >
              Save
            </Button>

          </Modal.Footer>
        </Modal>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Tick</th>
              <th>ID</th>
              <th>Công việc</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" />
                  </Form.Group>
                </td>
                <td>{index + 1}</td>
                <td>{todo}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => this.handleEditTodo(index)}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => this.handleDeleteTodo(index)}
                  >
                    Delete
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;