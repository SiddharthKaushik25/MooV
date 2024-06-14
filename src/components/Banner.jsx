// eslint-disable-next-line no-unused-vars
import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="h-[80vh] md:h-[70h] bg-cover bg-center flex items-end"
        style={{
          backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGbY4TL6izUOWJp7LJjGfGWZsY-lWfExszHA&s)`,
        }}
      >
        <div className="text-white w-full text-xl text-center bg-gray-900/60">THiS IS BANNER</div>
      </div>
    </div>
  );
};

export default Banner;
