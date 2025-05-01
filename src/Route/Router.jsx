import React from 'react';
import { createBrowserRouter } from 'react-router';
import Layout from '../Layout/Layout';
import Home from '../Components/Home/Home';

const Router = createBrowserRouter([{
    path: '/',
    element: <Layout></Layout>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        }
    ]
}])

export default Router;