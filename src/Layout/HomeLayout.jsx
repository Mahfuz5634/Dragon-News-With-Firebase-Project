import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAsiede from '../Components/Layout/LeftAsiede';
import RightAside from '../Components/Layout/RightAside';

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
            <main className='container mx-auto my-3  flex gap-2'>
                <aside className='w-3/12'><LeftAsiede></LeftAsiede></aside>
                <section className="main w-6/12">
                    <Outlet></Outlet>
                </section>
                <aside className='w-3/12'><div><RightAside></RightAside></div></aside>
            </main>
        </div>
    );
};

export default HomeLayout;