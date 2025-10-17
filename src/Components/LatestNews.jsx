import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex  items-center gap-2 bg-base-200 p-2 mt-5 rounded-sm">
      <p className="text-base-100 bg-secondary px-2 py-1 rounded-sm">Latest</p>
     <Marquee pauseOnHover>
  <div className="mx-2">
    <p>Space agency announces new mission to the Moon in 2027.</p>
  </div>
  <div className="mx-2">
    <p>Heavy rainfall expected in several parts of the country this weekend.</p>
  </div>
  <div className="mx-2">
    <p>Local football team wins the national championship after 10 years.</p>
  </div>
  <div className="mx-2">
    <p>New smartphone launch breaks pre-order records worldwide.</p>
  </div>
  <div className="mx-2">
    <p>Government introduces new startup support fund for young entrepreneurs.</p>
  </div>
  <div className="mx-2">
    <p>Global leaders meet to discuss climate change solutions.</p>
  </div>
</Marquee>

    </div>
  );
};

export default LatestNews;
