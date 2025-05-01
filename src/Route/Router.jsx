import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router';
import Layout from '../Layout/Layout';
import NewsDetails from '../Components/NewsDetails/NewsDetails';


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

}


])

export default Router;