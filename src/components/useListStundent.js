import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import Button from 'react-bootstrap/Button';

import Table from 'react-bootstrap/Table';

function ListStudent() {
    const students = useSelector(state => state.student);
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
export default ListStudent
