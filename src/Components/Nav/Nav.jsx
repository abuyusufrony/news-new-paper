

import { Link } from 'react-router';
import userp from '../../assets/user.png'
import { Authcontext } from '../../Authprovider/Authprovider';
import { useContext } from 'react';


const Nav = () => {
    const { user, logout } = useContext(Authcontext)

    const userlogout = () => {
        logout()
            .then(() => {
                console.log('user are logout')
            })
            .catch(() => {
                console.log("user are logout")
            })



    }


    return (
        <div className='flex justify-between items-center p-2.5 bg-slate-100'>
            <div className="">
                {user && user.email}
            </div>
            <div className='space-x-2.5'>

                <Link to={'/'}>Home</Link>
                <Link>About</Link>
                <Link>Carieer</Link>


            </div>
            <div className='flex gap-2.5 items-center'>
                {
                    user && user.email ? <button className='cursor-pointer' onClick={userlogout} >singout</button> : <div> <Link to={'/Auth/login'}>Login</Link ></div>
                }

                <div><img src={userp} alt="" /></div>



            </div>


        </div>
    );
};

export default Nav;