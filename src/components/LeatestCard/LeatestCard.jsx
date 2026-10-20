import "./LeatestCard.css"
import chair3 from "../../assets/pictures/Cantilever-chair3.png"

export default function LeatestCard(){
    return(
        <div className="group w-[360px] h-[306px] flex flex-col gap-3">
            <div className="w-full h-[277px] rounded-[5px] bg-[#F7F7F7] group-hover:bg-white transition duration-300 flex justify-center p-5">
                <img src={chair3} alt="" />
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <p className="border-b-2 group-hover:text-[#FB2448] transition duration-400 border-b-[#EEEFFB]">Comfort Handy Craft</p>
                </div>
                <div className="flex gap-3">
                    <p className="text-[14px] text-[#151875]">$42.00</p>
                    <p className="text-[12px] text-[#FB2448] line-through decoration-2">$65.00</p>
                </div>
            </div>
        </div>
    )
}