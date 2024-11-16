import React from 'react'
import { FaPrayingHands, FaHandHoldingHeart } from "react-icons/fa";
import { BsSoundwave } from "react-icons/bs";



const About = () => {
    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto">
                <p className="font-Roboto font-medium lg:text-[16px] text-[14px] text-black uppercase text-center lg:pt-[100px] pt-[30px]">sub-headline</p>
                <h3 className="font-Roboto font-bold lg:text-[54px] text-[24px] text-black uppercase text-center">a church that's relevant</h3>
                <div className="lg:flex items-center justify-between lg:mt-[50px] mt-[20px]">
                    <div className="lg:w-[32%] w-full bg-[#FFF5EB] lg:py-[70px] py-[40px] lg:border-b-[20px] border-b-[10px] border-b-[#FFD2A4]">
                        <div className="bg-[#FFD2A4] w-[60px] h-[60px] rounded-full text-[24px] text-black pl-[18px] pt-[18px] ml-[50px]">
                            <FaPrayingHands />
                        </div>
                        <h3 className="font-Roboto font-semibold lg:text-[30px] text-[24px] text-[black] ml-[50px] uppercase py-[20px]">About us</h3>
                        <p className="font-Roboto font-medium lg:text-[16px] text-[14px] text-[black] ml-[50px] lg:pr-[150px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="lg:w-[32%] w-full bg-[#FFF5EB] lg:py-[70px] py-[40px] lg:border-b-[20px] border-b-[10px] border-b-[#FFD2A4] mt-[30px] lg:mt-0">
                        <div className="bg-[#FFD2A4] w-[60px] h-[60px] rounded-full text-[24px] text-black pl-[18px] pt-[18px] ml-[50px]">
                            <BsSoundwave />
                        </div>
                        <h3 className="font-Roboto font-semibold lg:text-[30px] text-[24px] text-[black] ml-[50px] uppercase py-[20px]">Get involved</h3>
                        <p className="font-Roboto font-medium lg:text-[16px] text-[14px] text-[black] ml-[50px] lg:pr-[150px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="lg:w-[32%] w-full bg-[#FFF5EB] lg:py-[70px] py-[40px] lg:border-b-[20px] border-b-[10px] border-b-[#FFD2A4] mt-[30px] lg:mt-0">
                        <div className="bg-[#FFD2A4] w-[60px] h-[60px] rounded-full text-[24px] text-black pl-[18px] pt-[18px] ml-[50px]">
                            <FaHandHoldingHeart />
                        </div>
                        <h3 className="font-Roboto font-semibold lg:text-[30px] text-[24px] text-[black] ml-[50px] uppercase py-[20px]">Giving back</h3>
                        <p className="font-Roboto font-medium lg:text-[16px] text-[14px] text-[black] ml-[50px] lg:pr-[150px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About