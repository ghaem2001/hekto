import blogImg from "../../assets/pictures/JIUjvqe2ZHg.png"

import "./BlogCard.css"

export default function BlogCard(){
    return(
        <div className="flex flex-col items-start shadow-xl hover:shadow-2xl rounded-[5px] transition duration-400">
            <div>
                <img src={blogImg} alt="Blog Image" className="rounded-[5px]"/>
            </div>
            <div className="flex flex-col gap-2 p-5">
                <div className="flex gap-10 text-[14px] text-[#151875]">
                    <p>SaberAli</p>
                    <p>21 August,2020</p>
                </div>
                <div className="flex flex-col mt-2 gap-3">
                    <p className="text-[18px] text-[#151875] hover:text-[#FB2E86] font-bold transition">Top esssential Trends in 2021</p>
                    <p className="text-[#72718F] font-lato">More off this less hello samlande lied much <br /> over tightly circa horse taped mightly</p>
                    <p  className="text-[#151875] hover:text-[#FB2E86] hover:underline font-lato hover:decoration-2 transition">Read More</p>
                </div>
            </div>
        </div>
    )
}