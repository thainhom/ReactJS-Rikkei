import { useEffect, useState } from 'react';
import moment from "moment/moment";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addUser } from '../aciton/shoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import getNextId from '../utilities/getNextId';

function ModalUser({ refreshUser }) {
    const [AddUsers, setAddUser] = useState([])
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')

    useEffect(() => {
        refreshUser()
    }, [])
    const dispatch = useDispatch()
    const handleClose = () => setShow(false);

    const dandleShow = () => {
        setShow(true);
        setUsername("")
        setEmail("")
        setPassword("")
        setRole("")

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
        else if (name === 'role') {
            setRole(value)
        }
    }

    const handleAddUsers = () => {

        dispatch(addUser({
            username: username,
            email: email,
            password: password,
            role: role,
            createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
            updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        }))

        refreshUser()
        setShow(false)

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
                        type="password" placeholder="" />

                    <Form.Label>Vai trò</Form.Label>
                    <Form.Control
                        value={role}
                        name='role'
                        onChange={(e) => handleChange(e)}
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