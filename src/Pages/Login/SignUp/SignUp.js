import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

import './SignUp.css';

const SignUp = () => {
    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photoURL = form.file.value;
        const password = form.password.value;
        // console.log('name', name)
        // console.log('email', email)
        // console.log('photoURL', photoURL)
        // console.log('password', password)

        if (password.length < 6) {
            setError('Password should be 6 characters or more.');
            return;
        }

        // if (password !== confirm) {
        //     setError('Your Password did not match');
        //     return;
        // }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                form.reset();
            })
            .catch(error => console.error(error));

    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <Form onSubmit={handleSubmit} className='form-items-container'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control className='form-item' name="name" type="name" placeholder="Enter Full Name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Upload Photo</Form.Label>
                    <Form.Control className='form-item' name="file" type="file" placeholder="Enter email" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='form-item' name="email" type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='form-item' name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <br />
            <p>Already Have an Account <Link to='/login'>Login</Link></p>
            <button className="btn btn-outline btn-success"><div className='d-flex align-items-center'><FaGoogle /><div className='ms-2'>Google Login</div></div></button>

            <p className='text-error'>{error}</p>
        </div>


    );
};

export default SignUp;