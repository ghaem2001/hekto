import "./FeaturedCard.css"
import chair1 from "../../assets/pictures/Cantilever-chair1.png"

export default function FeaturedCard(){
    return(
        <div className="mt-3 w-[270px] h-[361px] rounded-[10px] shadow-2xl">
            <div className="rounded-[10px] flex justify-center items-center w-full h-[236px] bg-[#F6F7FB]">
                <img src={chair1} alt="chair picture"/>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 py-2">
                <p className="text-[18px] text-[#FB2E86] font-lato font-bold">Cantilever chair</p>
                <div className="flex gap-2">
                    <div className="w-[14px] h-[4px] rounded bg-[#05E6B7]"></div>
                    <div className="w-[14px] h-[4px] rounded bg-[#F701A8]"></div>
                    <div className="w-[14px] h-[4px] rounded bg-[#00009D]"></div>
                </div>
                <p className="text-[#151875] text-[14px]">Code - Y523201</p>
                <p className="text-[#151875] text-[14px] font-lato">$42.00</p>
            </div>
        </div>
    )
}