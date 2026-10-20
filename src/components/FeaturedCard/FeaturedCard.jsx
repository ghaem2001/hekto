import "./FeaturedCard.css"
import chair1 from "../../assets/pictures/Cantilever-chair1.png"
import GreenBtn from "../GreenBtn/GreenBtn"

export default function FeaturedCard(){
    return(
        <div className="group mt-3 w-[270px] h-[361px] rounded-[10px] shadow-2xl hover:overflow-hidden">
            <div className="rounded-[10px] flex flex-col justify-center items-center w-full h-[236px] bg-[#F6F7FB]">
                <img src={chair1} alt="chair picture"/>
                <div className="opacity-0 group-hover:opacity-100 transition duration-500">
                    <GreenBtn/>
                </div>
            </div>
            <div className="group-hover:bg-[#2F1AC4] flex flex-col justify-center items-center gap-3 py-2">
                <p className="text-[18px] transition duration-500 group-hover:text-white text-[#FB2E86] font-lato font-bold">Cantilever chair</p>
                <div className="flex gap-2">
                    <div className="w-[14px] h-[4px] rounded bg-[#05E6B7]"></div>
                    <div className="w-[14px] h-[4px] rounded bg-[#F701A8]"></div>
                    <div className="w-[14px] h-[4px] rounded bg-[#00009D] group-hover:bg-[#FFEAC1]"></div>
                </div>
                <p className="transition duration-500 group-hover:text-white text-[#151875] text-[14px]">Code - Y523201</p>
                <p className="transition duration-500 group-hover:text-white text-[#151875] text-[14px] font-lato">$42.00</p>
            </div>
        </div>
    )
}