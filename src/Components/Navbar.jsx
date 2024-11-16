import React, { useState } from 'react'
import NavbarRR from "../assets/logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";


const Navbar = () => {

    let [show, setShow] = useState(false)

    return (
        <section className="bg-[#0D0D0D] lg:py-[20px] py-[10px]">
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="flex items-center">
                    <div className="lg:w-[20%]">
                        <img src={NavbarRR} alt="navbar" />
                    </div>
                    <div className="lg:w-[80%]">
                        <ul className={`lg:flex items-center gap-[50px] absolute top-[50px] left-0 lg:static duration-700 ease-in-out pt-[50px] lg:pt-0 ${show == true ? "bg-[gray] w-[250px] h-[350px]" : "left-[-200px]"}`}>
                            <li className="font-Roboto font-semibold text-[18px] text-center lg:text-start text-[white] uppercase">Home</li>
                            <li className="font-Roboto font-semibold text-[18px] text-center lg:text-start text-[white] uppercase pt-[20px] lg:pt-0">About Us</li>
                            <li className="font-Roboto font-semibold text-[18px] text-center lg:text-start text-[white] uppercase pt-[20px] lg:pt-0">Sermon</li>
                            <li className="font-Roboto font-semibold text-[18px] text-center lg:text-start text-[white] uppercase pt-[20px] lg:pt-0">Blog</li>
                            <div className="lg:pl-[450px] pl-[50px] pt-[50px] lg:pt-0">
                                <button className="font-Roboto font-semibold lg:text-[18px] text-[14px] text-[white] uppercase border-2 border-[#FFD2A4] lg:px-[40px] px-[30px] lg:py-4 py-3 rounded hover:bg-[#FFD2A4] hover:text-[black] duration-500 ease-in-out">Contact us</button>
                            </div>
                        </ul>
                        <div onClick={() => setShow(!show)} className="text-[24px] text-white lg:hidden pl-[170px]">
                            {show == true ? <RxCross1 /> : <FaBars />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar