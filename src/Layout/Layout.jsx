import React from 'react';

import Header from '../Components/Header/Header';
import Leastestnews from '../Components/LeastestNews/Leastestnews';
import Leftnav from '../Components/Leftnav/Leftnav';
import Rightnav from '../Components/Rightnav/Rightnav';
import Mainnav from '../Components/Mainnav/Mainnav';
import Nav from '../Components/Nav/Nav';

const Layout = () => {
    return (
        <div className='w-11/12 mx-auto'>

            <Header></Header>
            <Leastestnews></Leastestnews>
            <Nav></Nav>
            <main className='grid grid-cols-12'>
                <aside className='col-span-3'><Leftnav></Leftnav></aside>
                <aside className='col-span-6'><Mainnav></Mainnav></aside>
                <aside className='col-span-3'><Rightnav></Rightnav></aside>

            </main>


        </div>
    );
};

export default Layout;