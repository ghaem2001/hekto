import safa2 from "../../assets/pictures/image 19.png"

import "./TrendingSmallCard.css"


export default function TrendingSmallCard(){
    return(
        <div className="w-[267px] h-[74px] flex justify-center items-center gap-3">
            <div className="w-[107px] h-full bg-[#F5F6F8] flex justify-center items-center">
                <img src={safa2} alt="" />
            </div>
            <div className="flex flex-col gap">
                <p className="text-[#151875]">Executive Seat chair</p>
                <p className="text-[12px] text-[#151875] line-through">$32.00</p>
            </div>
        </div>
    )
}