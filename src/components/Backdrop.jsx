import React from "react";

const Backdrop = ({ children }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <img
        src="https://res.cloudinary.com/dybvod0l2/image/upload/v1722698920/Property_1_Default_m9qlyj.png"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute w-full h-full">{children}</div>
    </div>
  );
};

export default Backdrop;
