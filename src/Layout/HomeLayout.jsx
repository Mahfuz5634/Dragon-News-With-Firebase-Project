import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <section className='container mx-auto my-3'>
                <LatestNews></LatestNews>
            </section>
            <nav className='container  mx-auto'>
                <Navbar></Navbar>
            </nav>
            <main>
                <section className="navleft"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="rightnav"></section>
            </main>
        </div>
    );
};

export default HomeLayout;