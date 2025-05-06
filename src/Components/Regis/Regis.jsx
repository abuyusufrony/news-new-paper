
import { useContext } from 'react';
import { Link } from 'react-router';
import { Authcontext } from '../../Authprovider/Authprovider';


const Regis = () => {

    const { createuser, setuser } = useContext(Authcontext)

    const handlelogin = (e) => {



        e.preventDefault()
        console.log("new user are coming ")
        const form = new FormData(e.target)
        const nam = form.get('name')
        const ur = form.get('url')
        const mail = form.get('email')
        const pass = form.get('password')
        console.log({ nam, ur, mail, pass })
        createuser(mail, pass)
            .then((res) => {
                const user = res.user
                setuser(user)





            })

            .catch((err) => console.log("err", err))


    }
    return (
        <div className='flex justify-center items-center min-h-screen '>
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl p-5">
                <div className="card-body">
                    <h2 className='font-semibold text-center'>Login your account</h2>
                    <form onSubmit={handlelogin} className="fieldset">
                        <label className="label ">Name</label>
                        <input name='name' type="text" className="input" placeholder="Name" />
                        <label className="label ">Url</label>
                        <input name='url' type="text" className="input" placeholder="photo url" />
                        <label className="label ">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div className='flex justify-between'>
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <div><h2 className='font-semibold'>Allready  have an account? <Link to={'/Auth/login'} className='text-blue-500'>login</Link> </h2></div>
                        </div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                </div>



            </div>
        </div>
    );
};

export default Regis;