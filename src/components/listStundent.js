import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Table from 'react-bootstrap/Table';
function listStudent() {
    const students = useSelector(state => { state.studentReducer.student });
    const dispatch = useDispatch()










    return (




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
                            <td>{item.msv}</td>
                            <td>{item.age}</td>
                            <td>
                                {item.sex}
                            </td>
                            <td>
                                <Button variant="success">Success</Button>{' '}
                                <Button variant="warning">Warning</Button>{' '}
                                <Button variant="danger">Danger</Button>{' '}

                            </td>

                        </tr>
                    )
                })}

            </tbody>
        </Table>
    )











}
export default listStudent
