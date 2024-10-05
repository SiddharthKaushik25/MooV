// eslint-disable-next-line no-unused-vars
import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="h-[80vh] md:h-[70vh] bg-cover bg-center flex items-end"
        style={{
          backgroundImage: `url(../../poster.jpg)` ,
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="text-white w-full text-xl text-center bg-gray-900/60">Top Rated Movies</div>
      </div>
    </div>
  );
};

export default Banner;
