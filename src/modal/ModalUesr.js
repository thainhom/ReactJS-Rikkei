import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addUser } from '../aciton/shoppingCart';
import { useDispatch, useSelector } from 'react-redux';

function ModalUser() {
    const AddUsers = JSON.parse(window.localStorage.getItem("users")) ?? []
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const handleClose = () => setShow(false);

    const dandleShow = () => {
        setShow(true);
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'username') {
            setUsername(value)
        } else if (name === 'email') {
            setEmail(value)

        } else if (name === 'password') {
            setPassword(value)
        }
    }

    const handleAddUsers = () => {
        dispatch(addUser())
        localStorage.setItem('users', JSON.stringify(AddUsers))
    }
    return (
        <>
            <Button
                className="float-end m-1"
                variant="success" onClick={dandleShow}>
                Add Uesr
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title> ADD_User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Tên Đăng nhập</Form.Label>
                    <Form.Control
                        name='username'
                        value={username}
                        onChange={(e) => handleChange(e)}
                        type="text" placeholder="" />
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name='email'
                        value={email}
                        onChange={(e) => handleChange(e)}
                        type="text" placeholder="" />
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name='password'
                        value={password}
                        onChange={(e) => handleChange(e)}
                        type="text" placeholder="" />
                    <Form.Label>Thời gian tạo</Form.Label>
                    <Form.Control
                        disabled
                        onChange={() => handleChange()}
                        type="text" placeholder="" />
                    <Form.Label>Thời gian cập nhập</Form.Label>
                    <Form.Control
                        disabled
                        onChange={() => handleChange()}
                        type="text" placeholder="" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleAddUsers} variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUser;