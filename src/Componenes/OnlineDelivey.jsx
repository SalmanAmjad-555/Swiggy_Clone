import React, { useEffect, useState } from 'react'
import Card from './Card';

const OnlineDelivey = () => {
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
    <div className='max-w-[1200px] mx-auto p-2'>
               <div className="flex justify-between my-2">
        <div className="font-bold text-[25px]">Top Restaurant with online food delivery in Lahore</div>
       
      </div>
      <div className='grid grid-cols-2 md:grid grid-cols-4 gap-3'>

        {
            data.map((d,i)=>{
             return(
                <Card {...d} key={i}/>
             )
            })
        }
      </div>
    </div>
  )
}

export default OnlineDelivey