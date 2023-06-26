import { useSelector, useDispatch } from 'react-redux';
import { deleteStudent, addStudent, updateStudent } from '../actions.js/studentAciton'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { async } from 'q';




function ListStudent() {
    const students = useSelector(state => state.studentReducer.student);
    const [msv, setMsv] = useState()
    const [name, setName] = useState("")
    const [age, setAge] = useState();
    const [sex, setSex] = useState();

    const [show, setShow] = useState(false);

    const dispatch = useDispatch()
    const handleClose = () => setShow(!show);
    const handleShow = () => setShow(!show);



    const handleSave = () => {
        dispatch(addStudent({
            id: students.length ? students[students.length - 1].id + 1 : 1,
            msv: msv,
            name: name,
            age: age,
            sex: sex
        }))


        setShow(!show);
    };
    const handleDelete = (id) => {
        dispatch(deleteStudent(id))

    }
    const handleEdit = (id) => {
        setMsv(msv)
        setName(name)
        setAge(age)
        setSex(sex)
        setShow(!show)

        dispatch(updateStudent(id))
    }




    const handleChange1 = (event) => {
        const value = event.target.value
        setMsv(value)

    }
    const handleChange2 = (event) => {
        const value = event.target.value
        setName(value)

    }
    const handleChange3 = (event) => {
        const value = event.target.value
        setAge(value)

    }
    const handleChange4 = (event) => {
        const value = event.target.value
        setSex(value)

    }











    return (

        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Button variant="primary" onClick={handleShow} >
                        Thêm sinh viên
                    </Button>

                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title >Thêm sinh viên</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Label>Id</Form.Label>
                            <Form.Control disabled type="text" />
                            <Form.Label>Mã sinh viên</Form.Label>
                            <Form.Control type="text" placeholder="Nhập Mã sinh viên" onChange={(e) => handleChange1(e)} />
                            <Form.Label>Tên sinh viên</Form.Label>
                            <Form.Control type="text" placeholder="Nhập Tên sinh viên" onChange={(e) => handleChange2(e)} />
                            <Form.Label>Tuổi sinh viên </Form.Label>
                            <Form.Control style={{ marginBottom: "10px" }} type="text" placeholder="Nhập Tuổi" onChange={(e) => handleChange3(e)} />

                            <Form.Label>Giới tính </Form.Label>
                            <select onChange={(e) => handleChange4(e)} style={{ marginLeft: "20px" }}>
                                <option >Nam</option>
                                <option>Nữ</option>
                                <option>Khác</option>
                            </select>




                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleSave}>Save</Button>
                        </Modal.Footer>
                    </Modal>









                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                </Container>

            </Navbar >


            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mã sinh viên</th>
                        <th>Tên sinh viên</th>
                        <th>Tuổi</th>
                        <th>Giới tính</th>
                        <th>Hoạt động</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((item, index) => {

                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.msv}</td>
                                <td>{item.age}</td>
                                <td>{item.sex}</td>
                                <td>
                                    <Button variant="success">Xem</Button>{' '}
                                    <Button variant="warning" onClick={() => handleEdit(item.id)}>Sữa</Button>{' '}
                                    <Button variant="danger" onClick={() => handleDelete(item.id)}>Xóa</Button>{' '}

                                </td>

                            </tr>
                        )
                    })}

                </tbody>



            </Table>

        </>
    )











}
export default ListStudent
