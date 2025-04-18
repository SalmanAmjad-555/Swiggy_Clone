import React, { useEffect, useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Card from './Card'

const Top_Resturent = () => {

  const [data, setData] = useState([]);



  const fetchTopRestaurant= async ()=>{
    const response=await fetch('/restaurantChains.json');
    const ApiData=await response.json();
    
    setData(ApiData);
  }

  useEffect(() => {

    fetchTopRestaurant()
  },[]
)


  

  return (
    <div className="max-w-[1200px] mx-auto p-2">
      <div className="flex justify-between my-2">
        <div className="font-bold text-[25px]">Top Restaurant in Lahore</div>
       
      </div>

    <div className="flex gap-5">
     
     {
      data.map((d,i)=>{
        return <Card {...d} key={i} /> 
      })
     }


    </div>
   

    </div>
  );
};

export default Top_Resturent;
