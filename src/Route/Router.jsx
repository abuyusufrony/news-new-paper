import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router';
import Layout from '../Layout/Layout';
import NewsDetails from '../Components/NewsDetails/NewsDetails';
import Auth from '../Components/Auth/Auth';
import Login from '../Components/Login/Login';
import Regis from '../Components/Regis/Regis';


const Router = createBrowserRouter([{
    path: '/',
    element: <Layout></Layout>,
    children: [

        {
            path: '/cata/:id',
            element: <NewsDetails></NewsDetails>,
            loader: () => fetch('/news.json')
        },
        {
            path: '',
            element: <Navigate to={'/cata/1'}></Navigate>
        }
    ],




},

{
    path: '/news',
    element: <h2>This are news section </h2>

},
{
    path: '/Auth',
    element: <Auth></Auth>,
    children: [
        {
            path: '/Auth/login',
            element: <Login></Login>
        },
        {
            path: '/Auth/Regis',
            element: <Regis></Regis>
        }
    ]
}


])

export default Router;