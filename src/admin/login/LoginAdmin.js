// import { useNavigate } from 'react-router-dom';
// import { Button } from "react-bootstrap";
// import "./login.css";
// import { useEffect, useState } from "react";
// function Register() {
//     const navigate = useNavigate
//     const [users, setUsers] = useState([]);
//     const [userAdmin, setUserAdmin] = useState("")
//     const [passwordAdmin, setPassWordAdmin] = useState("")
//     const [isAdmin, setIsAdmin] = useState(false); // State để theo dõi trạng thái admin
//     useEffect(() => {
//         setUsers(window.localStorage.getItem("users") ? JSON.parse(window.localStorage.getItem("users")) : [])
//     }, [])
//     console.log(users);
//     const handleChange = (e) => {
//         const { name, value } = e.target
//         if (name === "useradmin") {
//             setUserAdmin(value)
//         }
//         if (name === "passwordadmin") {
//             setPassWordAdmin(value)
//         }
//         console.log(value);
//     }
//     const handleLoginAdmin = (e) => {
//         e.preventDefault();
//         for (let i = 0; i < users.length; i++) {
//             if (users[i].username === "admin" && users[i].password === "password") {
//                 setIsAdmin(true); // Đánh dấu người dùng là admin
//                 break;
//             }

//         }
//         const isAdmin = {

//             username: userAdmin,

//             password: passwordAdmin,
//             role: 'Admin',
//         }
//         const Admin = [...users, isAdmin];
//         window.localStorage.setItem("users", JSON.stringify(Admin));
//         navigate('/homeAdmin');
//     }




//     return (
//         <> <form onSubmit={handleLoginAdmin}>
//             <div className="body"></div>
//             <div className="grad"></div>
//             <div className="header">
//                 <div>Co<span>-Luxury</span></div>
//             </div>
//             <br />
//             <div className="login">
//                 <input
//                     value={userAdmin}
//                     onChange={handleChange} type="text" placeholder="admin" name="useradmin" /><br />
//                 <input
//                     value={passwordAdmin}
//                     onChange={handleChange} type="password" placeholder="password" name="passwordadmin" /><br /><br />
//                 <Button type="submit" variant="info" >LOGIN</Button>
//             </div>
//         </form>
//         </>
//     )
// }

// export default Register