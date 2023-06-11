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
      error: "",
      index: -1,// có nghĩa là không có phần tử nào chỉnh sửa trong mảng todos
    }
  }
  // HÀM SHOW BẢNG Modal
  handleShow = () => {
    this.setState({
      // NGỊCH ĐẢO VS BIẾN FALSE Ở TRÊN ĐÊ SHOW RA BẢNG
      show: !this.state.show,
      // KHI BẤM SHOW SE SET LẠI ERROR KO BỊ DÍNH HIỆN THỊ ERROR
      error: ""
    });

  }

  // DÙNG async  await đê chờ set sử lý rồi log ra
  // ADD
  handleAdd = async () => {
    // NẾU TRỐNG 
    if (!this.state.newtodos) {
      this.setState({
        error: "Vui lòng điền công việc cần làm."
      });
    } else {

      const { todos, newtodos, index } = this.state;
      if (index >= 0) {

        // ĐANG TRONG QUÁ TRÌNH CHỈNH SỬA PHẦN TỬ ĐÓ (cu thể la làm tk newtodos)
        // CHO 1 BIẾN ĐÊ LẤY ĐƯỢC GIÁ TRỊ BAN ĐẦU ĐÊ CHỈNH SỬA
        const updatedTodos = [...todos];
        updatedTodos[index] = newtodos;
        await this.setState({ // SET LẠI TODOS CÒN CHO MỌI THỨ QUAY VỀ BAN ĐẦU
          todos: updatedTodos,
          newtodos: "",
          error: "",
          show: false,
          index: -1
        });
      } else {
        // Thêm mới phần tử cho todos
        const updatedTodos = [...todos, newtodos];
        await this.setState({
          todos: updatedTodos,
          newtodos: "",
          error: "",
          show: false
        });
      }
      console.log(this.state.error, this.state.todos);
    }
  }



  handleChange = (event) => {
    // đặt biến đê lấy được giá trị ô input nhập vào
    const newtodos = event.target.value
    // gan lại cho setstate đê nhận được item mới nhất
    this.setState({ newtodos: newtodos })
  }
  // đê thực hiện việc chỉnh sửa và xóa cần phải trỏ tới vị trí của phần tử đó đê thao tác
  handleEditTodo = (index) => {

    const { todos } = this.state
    const edittodos = todos[index]
    this.setState({
      newtodos: edittodos,
      show: true,
      index: index,
    })

  }
  // 
  handleDeleteTodo = (index) => {
    const { todos } = this.state
    const updatetodos = [...todos]
    // dung splice thực hiện đê xóa 1 phần tử trong mãng đả khởi tạo ở trên 


    updatetodos.splice(index, 1)// index chỉ mục phần tử muốn xóa tròng mãng , 1 là số chỉ định số lương muốn xóa
    alert("bạn có chắc muốn xóa công việc này")
    this.setState(
      {
        todos: updatetodos

      }
    )
  }
  // Down là sự kiện khi nhấn 1 phím xún
  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault()
      this.handleAdd()

    }
  }
  // xử lý submit ko cho trang loading lại
  handleSubmit = (event) => {
    event.preventDefault()
  }
  render() {
    const { error, newtodos, todos } = this.state

    return (
      <div>



        {/* navbar */}
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





        <h1 >List To Do</h1>
        <Button variant="outline-info" onClick={() => { this.handleShow() }}>
          Add
        </Button>
        <Form onSubmit={this.handleSubmit}>
          <Modal
            show={this.state.show}
            onHide={this.handleShow}
            backdrop="static"
            keyboard={false}
          >
            {/* modal , handleAdd */}

            <Modal.Header closeButton>
              <Modal.Title>Thêm công việc cần làm</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Modal.Body>
                {/* <Form.Control type="text" value={this.state.newTodo} onChange={this.handleChange} /> */}
              </Modal.Body>
              <Form.Control

                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}/**
                 */ // Thêm sự kiện onKeyDown khi người dùng nhấn phím Enter
                value={this.state.newtodos}
                type="text"
              />
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
        </Form>
        {/* Table */}
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
            {/* <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="1" />
              </Form.Group> */}

            {todos.map((item, index) => {
              return (
                <>
                  <tr key={index}>
                    <td><Form.Group className="mb-3" id="formGridCheckbox">
                      <Form.Check type="checkbox" />
                    </Form.Group></td>
                    <td>{index + 1}</td>
                    <td>
                      {item}
                    </td>

                    <td> <Button

                      onClick={() => this.handleEditTodo(index)}
                      variant="warning">edit</Button>{' '}
                      <Button
                        onClick={() => this.handleDeleteTodo(index)}
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
