import chair from "../../assets/pictures/Cantilever-chair1.png"
import GreenBtn from "../GreenBtn/GreenBtn"

import "./TopCategory.css"

export default function TopCategory(){
    return(
        <div className="group w-[269px] h-[345px] flex flex-col justify-center items-center">
            <div className="flex flex-col gap-1 justify-center group-hover:shadow-2xl transition duration-400 items-center rounded-[50%] w-[269px] h-[269px] bg-[#F6F7FB]">
                <img src={chair} alt="chair picture" />
                <div className="opacity-0 group-hover:opacity-100 transition duration-400">
                    <GreenBtn/>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-5 gap-1">
                <p className="text-[20px] text-[#151875]">Mini LCW Chair</p>
                <p className="text-[16px] text-[#151875]">$56.00</p>
            </div>
        </div>
    )
}