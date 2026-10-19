// import pictures
import lamp from "../assets/pictures/home-lamp.png"
import sofa from "../assets/pictures/home-sofa.png"
import furniture from "../assets/pictures/Group 153.png"
import chair from "../assets/pictures/Group 154.png"

// import files
import FeaturedCard from "../components/FeaturedCard/FeaturedCard"
import LeatestCard from "../components/LeatestCard/LeatestCard"
import OfferCard from "../components/OfferCard/OfferCard"
import PinkBtn from "../components/PinkBtn/PinkBtn"
import TrendingCard from "../components/TrendingCard/TrendingCard"
import TrendingBigCard from "../components/TrendingBigCard/TrendingBigCard"
import TrendingSmallCard from "../components/TrendingSmallCard/TrendingSmallCard"
import TopCategory from "../components/TopCategory/TopCategory"


export default function Home(){
    return(
        <div  className="">

            {/* first banner */}
            <div className="w-full h-191 bg-[#F2F0FF] flex flex-col items-center">
                <div className="w-full h-full flex justify-around">
                    <div>
                        <img className="static right-4" src={lamp} alt="lamp picture" />
                    </div>
                    <div className="flex items-center">
                        <div className="static right-12 bottom-7 flex flex-col gap-4">
                            <p className="font-lato text-[#FB2E86]">Best Furniture For Your Castle....</p>
                            <p className="text-[53px] font-bold">New Furniture Collection <br /> Trends in 2020</p>
                            <p className="font-lato text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing <br/> in phasellus non in justo.</p>
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
                    <FeaturedCard/>
                    <FeaturedCard/>
                    <FeaturedCard/>
                    <FeaturedCard/>
                </div>
                <div className="flex gap-2 mt-15">
                    <div className="w-[24px] rounded h-[4px] bg-[#FB2E86]"></div>
                    <div className="w-[16px] rounded h-[4px] bg-[#FEBAD7]"></div>
                    <div className="w-[16px] rounded h-[4px] bg-[#FEBAD7]"></div>
                    <div className="w-[16px] rounded h-[4px] bg-[#FEBAD7]"></div>
                </div>
            </div>

            {/* Leatest Products */}
            <div className="flex flex-col justify-center items-center mt-30">
                <div>
                    <p className="font-bold text-[42px] text-[#151875]">Leatest Products</p>
                </div>
                <div className="font-lato text-[#151875] text-[18px] flex gap-18 mt-12">
                    <p>New Arrival</p>
                    <p>Best Seller</p>
                    <p>Featured</p>
                    <p>Special Offer</p>
                </div>
                <div className="mt-18 grid grid-cols-3 gap-15">
                    <LeatestCard/>
                    <LeatestCard/>
                    <LeatestCard/>
                    <LeatestCard/>
                    <LeatestCard/>
                    <LeatestCard/>
                </div>
            </div>


            {/* Offer Card */}
            <div className="flex flex-col gap-15 items-center mt-40">
                <div>
                    <p className="text-[42px] text-[#151875] font-bold">
                        What Shopex Offer!
                    </p>
                </div>
                <div className="flex justify-center gap-10">
                    <OfferCard/>
                    <OfferCard/>
                    <OfferCard/>
                    <OfferCard/>
                </div>
            </div>

            {/* Banner Trending */}
            <div className="w-full not-last-of-type:h-[579px] bg-[#F1F0FF] mt-50 flex justify-center items-center">
                <div>
                    <img src={furniture} alt="furniture picture" />
                </div>
                <div className="flex flex-col items-start gap-5">
                    <div>
                        <p className="text-[35px] font-bold text-[#151875]">
                            Unique Features Of leatest & <br /> Trending Poducts
                        </p>
                    </div>
                    <div>
                        <ul className="text-[#ACABC3] list-disc marker:text-2xl list-inside marker:text-[#F52B70]">
                            <li>All frames constructed with hardwood solids and laminates</li>
                            <li>Reinforced with double wood dowels, glue, screw - nails corner <br /> blocks and machine nails</li>
                            <li>Arms, backs and seats are structurally reinforced</li>
                        </ul>
                    </div>
                    <div className="flex justify-center items-center gap-7">
                        <div>
                            <PinkBtn/>
                        </div>
                        <div className="text-[14px]">
                            <p className="font-semibold">B&B Italian Sofa </p>
                            <p className="font-lato">$32.00</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trending Products */}
            <div className="flex flex-col justify-center items-center mt-30 gap-14">
                <div>
                    <p className="text-[42px] text-[#151875] font-bold">
                        Trending Products
                    </p>
                </div>
                <div className="flex justify-center items-center gap-10">
                    <TrendingCard/>
                    <TrendingCard/>
                    <TrendingCard/>
                    <TrendingCard/>
                </div>
                <div className="flex gap-10">
                    <TrendingBigCard/>
                    <TrendingBigCard/>

                    <div className="flex flex-col justify-between gap-2">
                        <TrendingSmallCard/>
                        <TrendingSmallCard/>
                        <TrendingSmallCard/>
                    </div>
                </div>
            </div>

            {/* Discount Item */}
            <div className="flex flex-col justify-center items-center mt-30">
                <div>
                    <p className="text-[42px] text-[#151875] font-bold">Discount Item</p>
                </div>
                <div className="flex gap-10 mt-7 text-[#151875] font-lato text-[18px]">
                    <p className="text-[#FB2E86] decoration-1 underline">Wood Chair</p>
                    <p>Plastic Chair</p>
                    <p>Sofa Colletion</p>
                </div>
                <div className="flex justify-center items-center gap-">
                    <div className="flex flex-col gap-6">
                        <div>
                            <p className="text-[35px] text-[#151875] font-bold">20% Discount Of All Products</p>
                        </div>
                        <div>
                            <p className="text-[21px] text-[#FB2E86]">Eams Sofa Compact</p>
                        </div>
                        <div>
                            <p className="text-[17px] text-[#B7BACB]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget<br/>feugiat habitasse nec, bibendum condimentum.</p>
                        </div>
                        <div>
                            <ul className="text-[#B8B8DC] grid grid-cols-2 gap-4">
                                <li>Material expose like metals</li>
                                <li>Clear lines and geomatric figures</li>
                                <li>Simple neutral colours.</li>
                                <li>Material expose like metals</li>
                            </ul>
                        </div>
                        <div className="mt-5">
                            <PinkBtn/>
                        </div>
                    </div>
                    <div>
                        <img src={chair} alt="chair picture" />
                    </div>
                </div>
            </div>

            {/* Top Categories */}
            <div className="flex flex-col justify-center items-center mt-30">
                <div>
                    <p className="text-[42px] text-[#151875] font-bold">Top Categories</p>
                </div>
                <div className="flex gap-13 mt-15">
                    <TopCategory/>
                    <TopCategory/>
                    <TopCategory/>
                    <TopCategory/>
                </div>
                <div className="flex justify-center items-center gap-4 mt-15">
                    <div className="w-[10px] h-[10px]  bg-[#FB2E86] rounded-[50%]"></div>
                    <div className="w-[10px] h-[10px] border border-[#FB2E86] rounded-[50%]"></div>
                    <div className="w-[10px] h-[10px] border border-[#FB2E86] rounded-[50%]"></div>
                </div>
            </div>







        </div>
    )
}