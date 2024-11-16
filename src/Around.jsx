import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";


const Around = () => {
  return (
    <section>
      <div className="container px-3 lg:px-0 mx-auto bg-are">
        <div className="lg:w-[40%] w-full lg:ml-[500px] lg:mt-[100px] mt-[30px] lg:py-[100px] py-[30px]">
         <div className="flex items-center lg:gap-[120px] gap-[100px] bg-white lg:py-[50px] py-[20px] rounded lg:border-b-[20px] border-b-[10px] border-b-[#FFD2A4]">
          <div className="lg:w-[80%] w-full">
            <h3 className="font-Roboto font-bold lg:text-[36px] text-[18px] text-black uppercase lg:pl-[50px] pl-[10px]">We want to serve the world around us</h3>
            <p className="font-Roboto font-medium lg:text-[16px] text-[14px] text-black lg:pl-[50px] pl-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
            <button className="font-Roboto font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#FFD2A4] lg:w-[150px] w-[100px] lg:h-[60px] h-[40px] lg:ml-[50px] ml-[10px] lg:mt-[50px] mt-[30px] rounded hover:bg-[#FFD2A4] duration-500 ease-in-out">Visit</button>
          </div>
          <div className="w-[20%] text-[44px] relative">
            <FaQuoteLeft className=" absolute right-[50px] text-[#FFF5EB]"/>
          </div>
         </div>
        </div>
      </div>
    </section>
  )
}

export default Around