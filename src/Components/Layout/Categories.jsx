import React, { use } from 'react';
import { NavLink } from 'react-router';
const categorypromise=fetch('/categories.json')
.then(res=>res.json())

const Categories = () => {
    const catdata=use(categorypromise);
    console.log(catdata);
    return (
        <div>
            <h1 className='font-semibold'>All Categories({catdata.length})</h1>
            <div className='grid grid-cols-1 mt-2 gap-2'>
                {
                catdata.map(cat=><NavLink 
                    key={cat.id}
                    to={`/category/${cat.id}`}  
                    className={({isActive})=>(isActive ? "p-1 rounded-sm bg-gray-300 ":"p-1 rounded-sm text-accent hover:bg-gray-100")}
                 >{cat.name}</NavLink>)
            }
            </div>
        </div>
    );
};

export default Categories;