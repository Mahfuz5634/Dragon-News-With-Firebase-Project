import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const [scandata,setscandata]=useState([]);
    const {id}=useParams();
    const alldata =useLoaderData();
   
    useEffect(()=>{
        
         if(id==0){
            setscandata(alldata);
            return;
         }
         else if(id=='1'){
          const data=alldata.filter(item=>item.others.is_today_pick==true);
          setscandata(data);
          return
         }
         else{
             const data=alldata.filter(item=>item.category_id==id);
             setscandata(data);
         }

    },[alldata,id])
    return (
        <div>
            category news{scandata.length}
        </div>
    );
};

export default CategoryNews;