import "./Footer.css"

export default function Footer(){
    return(
        <div className="w-full h-133 absolute bottom-0 left-0">

            {/* Top Side */}
            <div className="w-full flex justify-around items-center h-119.75 bg-[#EEEFFB] text-[#8A8FB9]">

                <div>
                    <div className="relative bottom-10">
                        <h2 className="text-black font-bold text-[38px]">Hekto</h2>
                    </div>
                    <div className="flex">
                        <div className="flex justify-between items-center rounded font-lato w-[377px] h-[44px] bg-white">
                            <p className="relative left-12">Enter Email Address</p>
                            <button className="rounded w-[135px] h-[39px] bg-[#FB2E86] text-white text-center" type="button">Sign Up</button>
                        </div>
                    </div>
                    <div>
                        <p className="font-lato relative top-5">Contact Info</p>
                    </div>
                    <div>
                        <p className="font-lato relative top-7">17 Princess Road, London, Greater London NW1 8JR, UK</p>
                    </div>
                </div>

                <div className="flex flex-col gap-7">
                    <div>
                        <h3 className="text-black text-[22px]">
                            Categories 
                        </h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <p>Laptops & Computers</p>
                        </div>
                        <div>
                            <p>Cameras & Photography</p>
                        </div>
                        <div>
                            <p>Smart Phones & Tablets</p>
                        </div>
                        <div>
                            <p>Video Games & Consoles</p>
                        </div>
                        <div>
                            <p>Waterproof Headphones</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-7">
                    <div>
                        <h3 className="text-black text-[22px]">
                            Customer Care 
                        </h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <p>My Account</p>
                        </div>
                        <div>
                            <p>Discount</p>
                        </div>
                        <div>
                            <p>Returns</p>
                        </div>
                        <div>
                            <p>Orders History</p>
                        </div>
                        <div>
                            <p>Order Tracking</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-7">
                    <div>
                        <h3 className="text-black text-[22px]">
                            Pages
                        </h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <p>Blog</p>
                        </div>
                        <div>
                            <p>Browse the Shop</p>
                        </div>
                        <div>
                            <p>Category</p>
                        </div>
                        <div>
                            <p>Pre-Built Pages</p>
                        </div>
                        <div>
                            <p>Visual Composer Elements</p>
                        </div>
                        <div>
                            <p>WooCommerce Pages</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Side */}
            <div className="w-full h-13.25 bg-[#E7E4F8] flex justify-around items-center">
                <div>
                    <p className="text-[#9DA0AE]">
                        ©Webecy - All Rights Reserved
                    </p>
                </div>
                <div className="flex gap-3">
                    <div className="w-[20px] h-[20px] rounded-[50%] bg-[#151875]"></div>
                    <div className="w-[20px] h-[20px] rounded-[50%] bg-[#151875]"></div>
                    <div className="w-[20px] h-[20px] rounded-[50%] bg-[#151875]"></div>
                </div>
            </div>

        </div>
    )
}