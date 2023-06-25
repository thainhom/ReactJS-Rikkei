import { useSelector, useDispatch } from 'react-redux';
import { deleteStudent, addStudent, changeQuantityStudent } from '../actions.js/studentAciton'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function ListStudent() {
    const students = useSelector(state => state.studentReducer.student);

    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSave = () => setShow(false);
    const handleDelete = (id) => {
        dispatch(deleteStudent(id))

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
                            <Modal.Title>Thêm sinh viên</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Label>Id</Form.Label>
                            <Form.Control disabled type="text" />
                            <Form.Label>Mã sinh viên</Form.Label>
                            <Form.Control type="text" placeholder="Nhập Mã sinh viên" />
                            <Form.Label>Tên sinh viên</Form.Label>
                            <Form.Control type="name" placeholder="Nhập Tên sinh viên" />
                            <Form.Label>Tuổi sinh viên </Form.Label>
                            <Form.Control type="age" placeholder="Nhập Tuổi" />
                            <Form.Label>Giới tính</Form.Label>
                            <Form.Control type="sex" placeholder="Nhập Giới tính sinh viên" />



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

            </Navbar>


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
                        console.log(students);
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.msv}</td>
                                <td>{item.age}</td>
                                <td>{item.sex}</td>
                                <td>
                                    <Button variant="success">Xem</Button>{' '}
                                    <Button variant="warning">Sữa</Button>{' '}
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
