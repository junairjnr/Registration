import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
    return (
        <div className='text-center bg-blue-50 h-screen'>
            <h1 className='text-2xl mb-3'>Login Form</h1>
            <Formik
                initialValues={{
                    userName: "",
                    password: "",
                    isActive: 0,
                }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }, 1000);

                    axios.post('https://localhost:44327/api/Registration/login', { values })
                        .then(function (response) {
                            console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }}
            >
                {props => (
                    <form className='bg-slate-200 ml-96 mr-96' onSubmit={props.handleSubmit}>
                        <label>
                            Email:
                            <input
                                className="mr-3 ml-3 mt-4"
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.email}
                                name="email"
                            />
                            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                        </label>
                        <br />
                        <label>
                            password:
                            <input
                                className="mr-3 ml-3 mt-4"
                                type="password"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.password}
                                name="password"
                            />
                            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                        </label>
                        <br />
                        <button type="submit" className="mt-4 text-blue-300 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit</button>
                        <div className='ml-96 flex '>
                            Don't have An Acount ?
                            <Link to='/register'>
                                <p onClick={() => {
                                    console.log('Login');
                                }} className='ml-2 text-base text-gray-400 hover:text-gray-900 duration-500'>Register</p>
                            </Link>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default Login