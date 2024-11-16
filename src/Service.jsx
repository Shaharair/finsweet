import React from 'react'
import ServiceWW from "./assets/service.png"
import ServiceNN from "./assets/service1.png"
import ServiceRR from "./assets/service2.png"
import ServiceUU from "./assets/service3.png"

const Service = () => {
  return (
    <section className="bg-[#F5F2F0] lg:py-[60px] py-[20px] lg:mt-[100px] mt-[50px]">
        <div className="container px-3 lg:px-0 mx-auto">
            <p className="font-Roboto font-medium lg:text-[16px] text-[14px] text-black uppercase text-center">Watch and listen</p>
            <h3 className="font-Roboto font-bold lg:text-[54px] text-[24px] text-black uppercase lg:pl-[550px] lg:pr-[400px]">THE benefits of joining our church</h3>
            <div className="flex justify-between lg:pt-[60px] pt-[30px] flex-wrap">
                <div className="lg:w-[24%] w-[48%] mb-[15px] lg:mb-0">
                    <img src={ServiceWW} alt="service" />
                </div>
                <div className="lg:w-[24%] w-[48%]">
                    <img src={ServiceNN} alt="service1" />
                </div>
                <div className="lg:w-[24%] w-[48%]">
                    <img src={ServiceRR} alt="service2" />
                </div>
                <div className="lg:w-[24%] w-[48%]">
                    <img src={ServiceUU} alt="service3" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service