import React from 'react'

const Banner = () => {
  return (
    <section className="bg-ban">
        <div className="container px-3 lg:px-0 mx-auto bg-ban">
            <div className="">
                <p className="font-Roboto font-semibold text-[14px] text-[white] uppercase lg:pt-[100px] pt-[30px]">Welcome to our CHURCH</p>
                <h3 className="font-Roboto font-bold lg:text-[54px] text-[24px] text-[white] uppercase lg:pr-[1000px] pt-[10px]">Become a part of our community</h3>
                <div className="my-[30px]">
                    <button className="font-Roboto font-semibold lg:text-[16px] text-[14px] text-[white] border-2 border-[#FFD2A4] lg:px-[60px] px-[40px] lg:py-4 py-3 uppercase rounded hover:bg-[#FFD2A4] hover:text-[black] duration-500 ease-in-out">Learn more</button>
                </div>
                <p className="font-Roboto font-medium lg:text-[16px] text-[14px] text-[white] lg:pr-[1200px] lg:pb-[160px] pb-[70px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
            </div>
        </div>
    </section>
  )
}

export default Banner