import "./TrendingCard.css"
import sofa from "../../assets/pictures/image 1171.png"

export default function TrendingCard(){
    return(
        <div className="pb-3 w-[270px] h-[350px] flex flex-col justify-around items-center shadow-2xl">
            <div className="w-[247px] h-[244px] bg-[#F5F6F8] flex items-center justify-center">
                <img src={sofa} alt="sofa picture" />
            </div>
            <div>
                <p className="text-[#151875] font-lato font-bold">Cantilever chair</p>
            </div>
            <div className="flex items-baseline gap-4">
                <p className="text-[#151875] text-[14px]">$26.00</p>
                <p className="text-[12px] text-[#1518754a] line-through">$42.00</p>
            </div>
        </div>
    )
}