import React from 'react';
import Header from '../Header/Header';
import Leastestnews from '../LeastestNews/Leastestnews';
import Nav from '../Nav/Nav';
import Leftnav from '../Leftnav/Leftnav';

const Home = () => {
    return (
        <div>
            <h2>This is home section </h2>
            <Header></Header>
            <Leastestnews></Leastestnews>
            <Nav></Nav>
            <main className='   grid grid-cols-12'>
                <aside className='col-span-3'><Leftnav></Leftnav></aside>
                <aside className='col-span-6'>main</aside>
                <aside className='col-span-3'>Right</aside>
            </main>

        </div>
    );
};

export default Home;