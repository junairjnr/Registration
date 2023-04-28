import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

function Register() {


  return (
    <div className='text-center bg-yellow-50 h-screen'>
      <h1 className='text-2xl mb-3'>Registration Form</h1>
      <Formik
        initialValues={{
          userName: "",
          password: "",
          email: "",
          isActive:""
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {props => (
          <form className='bg-slate-200 ml-96 mr-96' onSubmit={props.handleSubmit}>
            <label>
              UserName:
              <input
                className="mr-3 ml-3 mt-4"
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="userName"
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
            {/* <button className='' type="submit">Submit</button> */}
            <button type="submit" className="mt-4 text-blue-300 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit</button>
           <div className='ml-96 flex '>  
              Already have Acount ?
            <Link to='/login'>
          <p onClick={() =>{
            console.log('Login');
          }} className='ml-2 text-base text-gray-400 hover:text-gray-900 duration-500'>Login</p>
          </Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Register