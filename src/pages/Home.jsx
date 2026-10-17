import lamp from "../assets/pictures/home-lamp.png"
import sofa from "../assets/pictures/home-sofa.png"

export default function Home(){
    return(
        <div  className="h-500">

            {/* first banner */}
            <div className="w-full h-196 bg-[#F2F0FF] flex flex-col items-center">
                <div className="w-full h-full flex justify-around">
                    <div>
                        <img className="static right-4" src={lamp} alt="lamp picture" />
                    </div>
                    <div className="flex items-center">
                        <div className="static right-12 bottom-7 flex flex-col gap-4">
                            <p className="font-lato text-[#FB2E86]">Best Furniture For Your Castle....</p>
                            <p className="text-[53px] font-bold">New Furniture Collection Trends in 2020</p>
                            <p className="font-lato text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                            <button className="static top-5 rounded text-white w-[163px] h-[50px] bg-[#FB2E86] text-center">
                                Shop Now
                            </button>
                        </div>
                        <div>
                            <img className="static right-10" src={sofa} alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 static bottom-20">
                    <button className="w-[10px] h-[10px] bg-[#FB2E86] rotate-45 border border-[#FB2E86]"></button>
                    <button className="w-[10px] h-[10px] rotate-45 border border-[#FB2E86]"></button>
                    <button className="w-[10px] h-[10px] rotate-45 border border-[#FB2E86]"></button>
                </div>
            </div>

            {/* Featured Products */}
            <div className="flex flex-col gap-7 justify-center">
                <p>Featured Products</p>
                <div>
                    <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div className="w-[270px] h-[361px] flex flex-col border">
                            <p className="text-[18px] text-[#FB2E86] font-lato font-bold">Cantilever chair</p>
                            <div>
                                <div className="w-[14px] h-[4px] bg-[#05E6B7]"></div>
                                <div className="w-[14px] h-[4px] bg-[#F701A8]"></div>
                                <div className="w-[14px] h-[4px] bg-[#00009D]"></div>
                            </div>
                            <p className="text-[#151875] text-[14px]">Code - Y523201</p>
                            <p className="text-[#151875] text-[14px]">$42.00</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}