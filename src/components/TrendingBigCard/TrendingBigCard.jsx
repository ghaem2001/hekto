import desk from "../../assets/pictures/image 1161.png"

import "./TrendingBigCard.css"


export default function TrendingBigCard(){
    return(
        <div className="gap-4 w-[420px] h-[270px] bg-[#EEEFFB] flex flex-col justify-center items-center">
            <div className="mr-25">
                <p className="text-[26px] font-semibold text-[#151875]">23% off in all products</p>
                <p className="text-[#FB2E86] underline decoration-[#FB2E86] decoration-2">View Collection</p>
            </div>
            <div>
                <img className="ml-25" src={desk} alt="" />
            </div>
        </div>
    )
}