import "./OfferCard.css"
import car from "../../assets/pictures/Group.png"

export default function OfferCard(){
    return(
        <div className="w-[270px] h-[320px] gap-7 flex flex-col justify-center items-center shadow-2xl">
            <div>
                <img src={car} alt="" />
            </div>
            <div>
                <p className="text-[22px] text-[#151875]">24/7 Support</p>
            </div>
            <div className="font-lato font-semibold text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </div>
        </div>
    )
}