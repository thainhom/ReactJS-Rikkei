import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { async } from "q";
// import { error } from "console";
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [],
      newtodos: "",
      show: false,
      error: ""
    }
  }
  // HÀM SHOW BẢNG Modal
  handleShow = () => {
    this.setState({
      // NGỊCH ĐẢO VS BIẾN FALSE Ở TRÊN ĐÊ SHOW RA BẢNG
      show: !this.state.show,
      // KHI BẤM SHOW SE SET LẠI ERROR BÁO LỖI 
      error: ""
    });

  }

  // DÙNG async và await đê chờ set sử lý rồi log ra
  handleAdd = async () => {
    if (!this.state.newtodos) {
      this.setState({
        error: "vui lòng điền việc cần làm"
      })
    } else {
      //mutate -> tác động trực tiếp đến dữ liệu -> không nên dùng push mà dùng spread như dưới
      let updateadd = [...this.state.todos, this.state.newtodos]
      await this.setState({
        todos: updateadd,
        newtodos: "",
        error: ""
      })
      this.handleShow()
      console.log(this.state.error, this.state.todos);
    }

  }

  handleChange = (event) => {

    this.setState({ newtodos: event.target.value })
  }
  // handleAddTodo = () => {

  //   const { todos, newTodos } = this.state;
  //   if (newTodos.trim() !== '') {
  //     const updatedTodos = [...todos, newTodos];
  //     this.setState({
  //       todos: updatedTodos,
  //       newTodos: ''
  //     });
  //     this.handleShow(); // Đóng Modal sau khi thêm công việc
  //   }
  // };
  // handleEditTodo = (index) => {
  //   const { todos } = this.state;
  //   const editedTodo = todos[index];
  //   this.setState({
  //     newTodo: editedTodo,
  //     editingIndex: index,
  //     show: true
  //   });
  //   handleDeleteTodo = (index) => {
  //     const { todos } = this.state;
  //     const updatedTodos = [...todos];
  //     updatedTodos.splice(index, 1);
  //     this.setState({ todos: updatedTodos });
  //   };
  // };
  // handleUpdateTodo = () => {
  //   const { todos, newTodo, editingIndex } = this.state;
  //   if (newTodo.trim() !== '') {
  //     const updatedTodos = [...todos];
  //     updatedTodos[editingIndex] = newTodo;
  //     this.setState({
  //       todos: updatedTodos,
  //       newTodo: '',
  //       editingIndex: -1
  //     });
  //     this.handleShow(); // Đóng Modal sau khi cập nhật công việc
  //   }
  //   {
  //     todos.map((todo, index) => (
  //       <tr key={index}>
  //         <td>
  //           <Form.Group className="mb-3" id="formGridCheckbox">
  //             <Form.Check type="checkbox" />
  //           </Form.Group>
  //         </td>
  //         <td>{index + 1}</td>
  //         <td>{todo}</td>
  //         <td>
  //           <Button variant="warning" onClick={() => this.handleEditTodo(index)}>
  //             edit
  //           </Button>
  //           <Button variant="danger" onClick={() => this.handleDeleteTodo(index)}>
  //             delete
  //           </Button>
  //         </td>

  //       </tr>
  //     ))
  //   }
  render() {
    const { error, newtodos, todos } = this.state
    return (
      <div>




        <Navbar bg="light" expand="lg">
          <Container fluid>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
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

        {/* <Button variant="outline-info">Info</Button> */}






        <Button variant="outline-info" onClick={() => { this.handleShow() }}>
          Add
        </Button>
        <Modal
          show={this.state.show}
          onHide={this.handleShow}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Thêm công việc cần làm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Modal.Body>
              {/* <Form.Control type="text" value={this.state.newTodo} onChange={this.handleChange} /> */}
            </Modal.Body>
            <Form.Control
              onChange={this.handleChange}
              value={newtodos}
              type="text" />
            {error && <p>{error}</p>}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button

              onClick={this.handleAdd}
              variant="primary">Save</Button>
          </Modal.Footer>
        </Modal>








        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Tick</th>
              <th>Công việc</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {/* <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="1" />
              </Form.Group> */}

            {todos.map((item, index) => {
              return (
                <>
                  <tr>
                    <td><Form.Group className="mb-3" id="formGridCheckbox">
                      <Form.Check type="checkbox" />
                    </Form.Group></td>
                    <td>
                      {item}
                    </td>

                    <td> <Button
                      onClick={() => this.handleEditTodo(index)}
                      variant="warning">edit</Button>{' '}
                      <Button
                        // onClick={() => this.handleDeleteTodo(index)}
                        variant="danger">delete</Button>{' '}</td>
                  </tr>
                </>

              )
            })}
          </tbody>
        </Table>















      </div >
    );
  };
}

export default App;
