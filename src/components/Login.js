import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header.js";
import styles from './LoginStyling.module.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/auth", { email, password });

            if (response.status === 201) {
                const { token } = response.data;
                localStorage.setItem("authToken", token);
                setError("");
                navigate("/weather");
            }
        } catch (err) {
            const message =
                err.response?.data?.message || "Invalid credentials. Please try again.";
            setError(message);
        }
    };

    return (
        <div className={styles.main}>
            <div className={styles.form}>
                <Header />
                <h3 className={styles.header}>Login</h3>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formEmail" className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword" className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Login
                    </Button>
                </Form>
                <div className={styles.register}>
                    <p>
                        Don't have an account?{" "}
                        <Link to="/register" className="text-primary">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
            <div className={styles.sidetext}>
                <p>ANY TIME.</p>
                <p>ANYWERE.</p>
                <p>FIND OUT</p>
                <p>WHAT'S UP.</p>
            </div>
        </div>
    );
};

    //Below is jacks original code for the return. I pretty much copied it except changed the styles
//     return (
//         <div className="d-flex justify-content-center align-items-center vh-100 bg-body">
//             <div className="p-4 bg-secondary-subtle rounded shadow" style={{ width: "400px" }}>
//                 <Header />
//                 <h3 className="text-center mb-4">Login</h3>
//                 {error && <Alert variant="danger">{error}</Alert>}
//                 <Form onSubmit={handleSubmit}>
//                     <Form.Group controlId="formEmail" className="mb-3">
//                         <Form.Label>Email address</Form.Label>
//                         <Form.Control
//                             type="email"
//                             placeholder="Enter email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </Form.Group>

//                     <Form.Group controlId="formPassword" className="mb-3">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control
//                             type="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </Form.Group>

//                     <Button variant="primary" type="submit" className="w-100">
//                         Login
//                     </Button>
//                 </Form>
//                 <div className="text-center mt-3">
//                     <p>
//                         Don't have an account?{" "}
//                         <Link to="/register" className="text-primary">
//                             Register here
//                         </Link>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

export default Login;