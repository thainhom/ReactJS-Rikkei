import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { editUser } from "../../aciton/shoppingCart"
import { useDispatch, useSelector } from 'react-redux';

function ModalUser({ user, refreshUser }) {
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState(user.username)
    const [role, setRole] = useState(user.role)
    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const handleClose = () => setShow(false);

    const handleShow = (data) => {
        setShow(true);
    }

    const handleChange = async (e) => {
        const { name, value } = e.target
        if (name === 'username') {
            await setUsername(value)
        } else if (name === 'email') {
            await setEmail(value)
        } else if (name === 'password') {
            await setPassword(value)
        } else if (name === 'role') {
            await setRole(value)
        }
    }

    const handleUpdateUsers = () => {
        dispatch(editUser({
            userId: user.userId,
            username: username,
            email: email,
            password: password,
            role: role
        }))
        setShow(false);
        refreshUser();
    }

    return (
        <>
            <Button
                variant="warning" onClick={handleShow}>
                Sữa
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Cập nhập người dùng</Modal.Title>
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
                    <Form.Label>Vai Trò</Form.Label>
                    <Form.Control
                        name="role"
                        value={role}
                        onChange={(e) => handleChange(e)}
                        type="text" placeholder="" />
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        value={password}
                        onChange={(e) => handleChange(e)}
                        type="text" placeholder="" />
                    {/* 
                    
                    <Form.Label>Thời gian tạo</Form.Label>
                    <Form.Control
                        disabled
                        value={}
                        onChange={() => handleChange()}
                        type="text" placeholder="" />
                    <Form.Label>Thời gian cập nhập</Form.Label>
                    <Form.Control
                        disabled
                        value={}
                        onChange={() => handleChange()}
                        type="text" placeholder="" /> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleUpdateUsers} variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>
            { }
        </>
    );
}

export default ModalUser;
