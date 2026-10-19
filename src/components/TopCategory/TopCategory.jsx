import chair from "../../assets/pictures/Cantilever-chair1.png"

import "./TopCategory.css"

export default function TopCategory(){
    return(
        <div className="w-[269px] h-[345px] flex flex-col justify-center items-center">
            <div className="flex justify-center items-center rounded-[50%] w-[269px] h-[269px] bg-[#F6F7FB]">
                <img src={chair} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center mt-5 gap-1">
                <p className="text-[20px] text-[#151875]">Mini LCW Chair</p>
                <p className="text-[16px] text-[#151875]">$56.00</p>
            </div>
        </div>
    )
}