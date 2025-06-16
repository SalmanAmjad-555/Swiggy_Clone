import React from "react";

const Card = (props) => {
  return (
    <div className="w-full md:w-[273px] shrink-0 grow">
      <div className=" group h-[182px] rounded-[15px] overflow-hidden relative">
        <img
          className="group-hover:scale-150 duration-150 object-cover w-full h-full"
          src={"/images/" + props.image}
          alt=""
        />
        <div className="absolute w-full h-full top-0 flex items-end text-white font-bold text-[16px] md:text-[25px] p-2 tracking-tighter">
          {props.offer}
        </div>
      </div>
      <div>
        {props.title}
      </div>
      <div className="flex items-center gap-1">
        <Star /> {props.rating}
        <span className="ml-2">{props.minTime}-{props.maxTime} mins</span>
      
      </div>
      <div>
          {props.name} <br />
          {props.place}
        </div>
    </div>
  );

};

const Star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#FFD700" // Gold color
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1
           1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976
           2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755
           1.688-1.538 1.118l-3.976-2.89a1 1 0 00-1.175
           0l-3.976 2.89c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1
           1 0 00-.364-1.118l-3.976-2.89c-.783-.57-.38-1.81.588-1.81h4.915a1
           1 0 00.95-.69l1.518-4.674z"
      />
    </svg>
  );
};


export default Card;
