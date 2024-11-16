import React from 'react'
import LogoMM from "./assets/logo.png"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
    return (
        <section className="bg-[#161722] lg:py-[100px] py-[30px] lg:mt-[100px] mt-[30px]">
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="flex justify-between flex-wrap">
                    <div className="lg:w-[25%] w-[48%]">
                        <img src={LogoMM} alt="logo" />
                        <div className="">
                            <ul>
                                <li className="font-Roboto font-semibold lg:text-[18px] text-[14px] text-white pt-[20px]">© Copyright Finsweet 2022</li>
                                <li className="font-Roboto font-semibold lg:text-[18px] text-[14px] text-white pt-[10px]">(480) 555-0103</li>
                                <li className="font-Roboto font-semibold lg:text-[18px] text-[14px] text-white pt-[10px]">4517 Washington Ave. </li>
                                <li className="font-Roboto font-semibold lg:text-[18px] text-[14px] text-white pt-[10px]">finsweet@example.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:w-[15%] w-[48%]">
                        <ul>
                            <li className="font-Roboto font-semibold lg:text-[18px] text-[14px] text-white">Quicklinks</li>
                            <li className="font-Roboto font-semibold lg:text-[18px] text-[14px] text-white pt-[10px]">About us</li>
                            <li className="font-Roboto font-semibold lg:text-[18px] text-[14px] text-white pt-[10px]">Sermons</li>
                            <li className="font-Roboto font-semibold lg:text-[18px] text-[14px] text-white pt-[10px]">Events</li>
                            <li className="font-Roboto font-semibold lg:text-[18px] text-[14px] text-white pt-[10px]">Blog</li>
                        </ul>
                    </div>
                    <div className="lg:w-[10%] w-[48%]">
                        <h4 className="font-Roboto font-semibold text-[18px] text-white pt-[30px] lg:pt-0">Connect</h4>
                        <div className="flex items-center lg:gap-4 gap-3 pt-[20px] text-white">
                            <FaFacebookF />
                            <FaTwitter />
                            <FaLinkedinIn />
                        </div>
                    </div>
                    <div className="lg:w-[50%] w-[48%] relative">
                        <h3 className="font-Roboto font-bold lg:text-[54px] text-[18px] text-white uppercase pt-[30px] lg:pt-0">Subscribe to get Latest Updates and News</h3>
                        <input type="text" placeholder="Yourmail@gmail.com" className="font-Roboto font-medium lg:text-[16px] text-[14px] text-white outline-none pl-3 w-full lg:h-[60px] h-[40px] lg:mt-[50px] mt-[20px] bg-[#767676]" />
                        <button className="font-Roboto font-semibold text-[18px] text-[white] absolute top-[212px] right-0 bg-[#FFD2A4] w-[200px] h-[60px] lg:opacity-[100] opacity-0 uppercase">Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer