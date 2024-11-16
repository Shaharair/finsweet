import React from 'react'
import { FaClock } from "react-icons/fa6";
import { FaCircleNotch } from "react-icons/fa";
import UpcomingWW from "./assets/upcoming.png"



const Upcoming = () => {
    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto">
                <p className="font-Roboto font-medium text-[14px] text-black uppercase text-center lg:pt-[100px] pt-[30px]">Upcoming Sermons</p>
                <h3 className="font-Roboto font-bold lg:text-[54px] text-[24px] text-black lg:pl-[450px] lg:pr-[350px] uppercase">join us and become part of something great</h3>
                <div className="lg:flex justify-between lg:pt-[60px] pt-[30px]">
                    <div className="lg:w-[40%] w-full bg-[#FFF5EB] py-[30px]">
                        <div className="flex items-center lg:gap-[350px] gap-[130px]">
                            <div className="">
                                <p className="font-Roboto font-medium text-[14px] text-[#DC9853] uppercase lg:pl-[50px] pl-[20px]">Upcoming Event</p>
                            </div>
                            <div className="">
                                <h3 className="font-Roboto font-semibold lg:text-[24px] text-[18px] text-black">20</h3>
                                <h4 className="font-Roboto font-medium lg:text-[16px] text-[14px] text-[#161722]">July</h4>
                            </div>
                        </div>
                        <h3 className="font-Roboto font-bold lg:text-[54px] text-[26px] text-black uppercase lg:pl-[50px] pl-[20px]">Watch AND Listen To Our Sermons</h3>
                        <p className="font-Roboto font-medium lg:text-[16px] text-[14px] text-[#161722] lg:pl-[50px] pl-[20px] lg:pr-[100px] py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <div className="flex items-center lg:gap-4 gap-3 lg:pl-[50px] pl-[20px]">
                            <FaClock  className="lg:text-[24px] text-[18px]"/>
                            <h4 className="font-Roboto font-medium lg:text-[16px] text-[14px] text-[#161722] lg:pr-[220px]">Friday 23:39 IST Saturday 11:20 ISD</h4>
                        </div>
                        <div className="flex items-center lg:gap-4 gap-3 lg:pl-[50px] pl-[20px] pt-3">
                            <FaCircleNotch  className="lg:text-[24px] text-[18px]"/>
                            <h4 className="font-Roboto font-medium lg:text-[16px] text-[14px] text-[#161722] lg:pr-[220px]">No 233 Main St. New York, United States</h4>
                        </div>
                        <div className="lg:pl-[50px] pl-[20px] pt-[20px]">
                            <button className="font-Roboto font-semibold lg:text-[18px] text-[14px] text-black border-2 border-black lg:w-[200px] w-[150px] lg:h-[60px] h-[40px] rounded hover:bg-black hover:text-white duration-500 ease-in-out">Register</button>
                        </div>
                    </div>
                    <div className="lg:w-[60%] w-full pt-[30px] lg:pt-0">
                        <img src={UpcomingWW} alt="upcoming" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Upcoming