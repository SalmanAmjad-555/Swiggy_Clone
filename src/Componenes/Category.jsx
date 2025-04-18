import React, { useEffect, useState } from 'react'
import { BiRightArrowAlt ,BiLeftArrowAlt } from "react-icons/bi";


const Category = () => {
 
  const [catogories, setCatogories] = useState([]);
  const [slide, setSlide] = useState(3)

  const fetchCatogories= async()=>{
    const response=await fetch('/CategoryApi.json');
    const data=await response.json();
    setCatogories(data);
  }

  useEffect(() => {
    fetchCatogories();
  },[]
   )


   const nextSlide=()=>{
    if(catogories.length-5== slide) return false;
  
        setSlide(slide + 3);
       
   }

   const preSlide=()=>{
    if(catogories.length==0 ) 
      return false;
    setSlide(slide - 3);
   }

  return (
    <div className='max-w-[1200px] mx-auto'>
        <div className='flex justify-between my-2'>
            <div className='font-bold text-[25px]'>What's on your mind</div>
            <div className='flex '>
                <div className=' flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
                <BiRightArrowAlt  onClick={nextSlide}/>
                </div>
                <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
                <BiLeftArrowAlt onClick={preSlide}/>
                </div>
            </div>

        </div>
        
      <div className='flex overflow-hidden'>
        {
          catogories.map((cat,index)=>{

            return(
              <div 
              style={{
                transform:`translateX(-${slide * 100}%)`
              }}
              className='w-[100px] shrink-0' key={index}>
                <img src={`/images/${cat.image}`} alt="" />
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Category