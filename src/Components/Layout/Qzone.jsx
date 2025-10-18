import React from "react";
import img1 from "../../assets/playground.png";
import img2 from "../../assets/swimming.png";
import img3 from "../../assets/class.png";

const Qzone = () => {
  return (
    <div className="bg-gray-100 mt-5 p-2 rounded-sm">
      <h1 className="font-semibold mb-2">Qzone</h1>
      <div className="flex flex-col gap-2">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
