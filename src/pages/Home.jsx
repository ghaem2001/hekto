import lamp from "../assets/pictures/home-lamp.png"
import sofa from "../assets/pictures/home-sofa.png"
import Featured from "../components/Featured/Featured"
import Leatest from "../components/Leatest/Leatest"
import PinkBtn from "../components/PinkBtn/PinkBtn"


export default function Home(){
    return(
        <div  className="h-800">

            {/* first banner */}
            <div className="w-full h-191 bg-[#F2F0FF] flex flex-col items-center">
                <div className="w-full h-full flex justify-around">
                    <div>
                        <img className="static right-4" src={lamp} alt="lamp picture" />
                    </div>
                    <div className="flex items-center">
                        <div className="static right-12 bottom-7 flex flex-col gap-4">
                            <p className="font-lato text-[#FB2E86]">Best Furniture For Your Castle....</p>
                            <p className="text-[53px] font-bold">New Furniture Collection Trends in 2020</p>
                            <p className="font-lato text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                            <PinkBtn/>
                        </div>
                        <div>
                            <img className="static right-10" src={sofa} alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 mb-10">
                    <button className="w-[10px] h-[10px] bg-[#FB2E86] rotate-45 border border-[#FB2E86]"></button>
                    <button className="w-[10px] h-[10px] rotate-45 border border-[#FB2E86]"></button>
                    <button className="w-[10px] h-[10px] rotate-45 border border-[#FB2E86]"></button>
                </div>
            </div>

            {/* Featured Products */}
            <div className="flex flex-col gap-7 justify-center items-center mt-30">
                <p className="text-[42px] font-bold text-[#1A0B5B]">Featured Products</p>
                <div className="flex gap-9">
                    <Featured/>
                    <Featured/>
                    <Featured/>
                    <Featured/>
                </div>
                <div className="flex rounded gap-2 mt-15">
                    <div className="w-[24px] h-[4px] bg-[#FB2E86]"></div>
                    <div className="w-[16px] h-[4px] bg-[#FEBAD7]"></div>
                    <div className="w-[16px] h-[4px] bg-[#FEBAD7]"></div>
                    <div className="w-[16px] h-[4px] bg-[#FEBAD7]"></div>
                </div>
            </div>

            {/* Leatest Products */}
            <div className="flex flex-col justify-center items-center mt-30">
                <div>
                    <p className="font-bold text-[42px] text-[#151875]">Leatest Products</p>
                </div>
                <div className="text-[#151875] text-[18px] flex gap-18 mt-12">
                    <p>New Arrival</p>
                    <p>Best Seller</p>
                    <p>Featured</p>
                    <p>Special Offer</p>
                </div>
                <div className="mt-18 grid grid-cols-3 gap-15">
                    <Leatest/>
                    <Leatest/>
                    <Leatest/>
                    <Leatest/>
                    <Leatest/>
                    <Leatest/>
                </div>
            </div>

        </div>
    )
}