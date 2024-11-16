import React from 'react'
import WelcomeFF from "./assets/welcome.png"
import WelcomeHH from "./assets/welcome1.png"
import WelcomeKK from "./assets/welcome2.png"
import { FaArrowRight } from "react-icons/fa";


const Welcome = () => {
    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto">
                <h5 className="font-Roboto font-medium text-[14px] text-black uppercase text-center lg:pt-[100px] pt-[50px]">Sub-Headeline</h5>
                <h3 className="font-Roboto font-bold lg:text-[54px] text-[24px] text-black uppercase text-center">love and compassion</h3>
                <p className="font-Roboto font-medium lg:text-[16px] text-[14px] text-black lg:pl-[350px] lg:pr-[300px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div className=" relative">
                    <button className="font-Roboto font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#FFD2A4] lg:w-[200px] w-[100px] lg:h-[60px] h-[40px] rounded uppercase absolute lg:ml-[650px] ml-[115px] lg:mt-[50px] mt-[20px] hover:bg-[#FFD2A4] duration-500 ease-in-out">Read more</button>
                </div>
                <div className="flex items-center justify-between">
                    <div className="w-[32%]">
                        <img className="lg:w-[500px]" src={WelcomeFF} alt="welcome" />
                    </div>
                    <div className="w-[32%]">
                        <img className="lg:w-[500px] lg:h-[750px] lg:pt-[150px] pt-[80px]" src={WelcomeHH} alt="welcome1" />
                    </div>
                    <div className="w-[32%]">
                        <img className="lg:w-[500px]" src={WelcomeKK} alt="welcome2" />
                    </div>
                </div>
                <div className="">
                    <h5 className="font-Roboto font-medium text-[14px] text-black uppercase lg:pt-[50px] pt-[30px] text-center">our mission & vision</h5>
                    <h3 className="font-Roboto font-bold lg:text-[54px] text-[24px] text-black uppercase text-center">celebrate WITH US</h3>
                    <p className="font-Roboto font-medium lg:text-[16px] text-[14px] text-black lg:pl-[550px] lg:pr-[500px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="flex items-center lg:gap-4 gap-3 justify-center">
                        <h4 className="font-Roboto font-semibold lg:text-[18px] text-[16px] text-black">Read More</h4>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Welcome