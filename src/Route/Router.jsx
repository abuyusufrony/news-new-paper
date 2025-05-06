import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router';
import Layout from '../Layout/Layout';
import NewsDetails from '../Components/NewsDetails/NewsDetails';
import Auth from '../Components/Auth/Auth';
import Login from '../Components/Login/Login';
import Regis from '../Components/Regis/Regis';
import ReadMore from '../Components/ReadMore/ReadMore';
import Testingnews from '../Components/TestingNews/Testingnews';
import PrivateRoute from './PrivateRoute';


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

            element: <Navigate to={'/cata/4'}></Navigate>
        },
        {
            path: '/:id',
            element: <ReadMore>
                <ReadMore></ReadMore>
            </ReadMore>,
            loader: () => fetch('/news.json')



        },
    ],




},
{
    path: '/News',
    element: <Testingnews></Testingnews>,

    loader: () => fetch('/news.json')
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
        },

    ]
},



])

export default Router;