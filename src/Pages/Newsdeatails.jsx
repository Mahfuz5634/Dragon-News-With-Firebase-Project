import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/Layout/RightAside';
import NewsDetailsCard from './NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const Newsdeatails = () => {
    const data=useLoaderData();
    console.log(data);
    const {id}=useParams();
    const [Ndata,setNdata]=useState({})

    useEffect(()=>{
         const filterdata=data.find(news=>news.id==id);
         setNdata(filterdata);
    },[data,id])
    console.log(Ndata);
   
    return (
        <div>
          <header>
             <Header></Header>
          </header>
          <main className='container mx-auto flex gap-4 mt-4'>
            <section className='w-9/12'>
              <NewsDetailsCard Ndata={Ndata}></NewsDetailsCard>
            </section>
            <aside className='w-3/12'>
                <RightAside></RightAside>
            </aside>

          </main>
        </div>
    );
};

export default Newsdeatails;