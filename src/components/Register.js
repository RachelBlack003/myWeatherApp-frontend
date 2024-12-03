import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowLeft } from "react-bootstrap-icons";
import Header from "./Header.js";
import styles from './RegisterStyling.module.css'

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!$&*#]).{8,}$/;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!passwordRegex.test(password)) {
            setError(
                "Password must be at least 8 characters long, contain one uppercase letter, one digit, and one special character (!, $, &, *, #). Quotes, backquotes, and apostrophes are not allowed."
            );
            return;
        }

        try {
            const response = await axios.post("/api/register", { email, password, firstName, lastName });

            if (response.status === 201) {
                setError("");
                navigate("/"); // After successful registration, navigate to login page
            }
        } catch (err) {
            const message =
                err.response?.data?.message || "Failed to register. Please try again.";
            setError(message);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundImage: "url(/assets/mainBg.jpg)", backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}>
            <Container className={styles.registerContainer}>
            <div className="p-4 bg-secondary-subtle rounded shadow">
                <a href="/" className="d-flex align-items-center mb-3 navLink">
                    <ArrowLeft size={20} className="me-2" />
                    Back to Login
                </a>
                <Header />
                <h3 className="text-center mb-4">Create an Account</h3>

                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formFirstName" className="mb-3 d-flex flex-column">
                        <Form.Label className="text-start">First Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter first name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formLastName" className="mb-3 d-flex flex-column">
                        <Form.Label className="text-start">Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mb-3 d-flex flex-column">
                        <Form.Label className="text-start">Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword" className="mb-3 d-flex flex-column">
                        <Form.Label className="text-start">Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Register
                    </Button>
                </Form>
            </div>
            </Container>
        </div>
    );
};

export default Register;
