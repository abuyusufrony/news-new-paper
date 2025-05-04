import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router';
import { Authcontext } from '../../Authprovider/Authprovider';

const Login = () => {
    const { loginUser } = useContext(Authcontext)

    const handleLogin = (e) => {
        e.preventDefault()
        console.log('value are getting soon ')
        const form = new FormData(e.target)
        const mail = form.get('email')
        const pass = form.get('password')
        console.log({ mail, pass })
        loginUser(mail, pass)
            .then((res) => {
                console.log(res.user)
            })
            .catch((err) => {
                console.log('err', err)
            })


    }
    return (

        <div className='flex justify-center items-center min-h-screen '>

            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl p-5">
                <div className="card-body">
                    <h2 className='font-semibold text-center'>Login your account</h2>
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label "></label>
                        <input name='email' type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" />
                        <div className='flex justify-between'>
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <div><h2 className='font-semibold'>Don't  have an account? <Link to={'/Auth/Regis'} className='text-blue-500'>Reg</Link> </h2></div>
                        </div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                </div>



            </div>
        </div>
    );
};

export default Login;