import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const [scandata, setscandata] = useState([]);
  const { id } = useParams();
  const alldata = useLoaderData();

  useEffect(() => {
    if (id == 0) {
      setscandata(alldata);
      return;
    } else if (id == "1") {
      const data = alldata.filter((item) => item.others.is_today_pick == true);
      setscandata(data);
      return;
    } else {
      const data = alldata.filter((item) => item.category_id == id);
      setscandata(data);
    }
  }, [alldata, id]);
  return (
    <div className="grid grid-cols-1 gap-4">
      {scandata.length === 0 ? (
      <h1 className="text-center text-xl font-bold mt-10">No News Found</h1>
    ) : (
      scandata.map((item) => <NewsCard key={item.id} data={item} />)
    )}
    </div>
  );
};

export default CategoryNews;
