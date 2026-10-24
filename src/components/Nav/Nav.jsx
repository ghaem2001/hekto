import "./Nav.css"

export default function Nav(){


    return(
            <div className="z-1000 bg-white sticky top-0 w-full h-19.5 flex justify-around items-center text-[#0D0E43] border-b border-[#E7E6EF]">

                {/* Logo */}
                <div className="">
                    <h1 className="lg:relative left-50 font-bold text-[34px]">Hekto</h1>
                </div>

                {/* Site Pages */}
                <div>
                    <ul className="hidden lg:flex lg:gap-10">
                        <li>Home</li>
                        <li>Pages</li>
                        <li>Products</li>
                        <li>Blog</li>
                        <li>Shop</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Search Bar */}
                <div className="flex">
                    <div className="w-35 flex justify-end items-center px-1 h-8 lg:w-50 lg:h-7 rounded-[20px] lg:rounded-none border border-[#E7E6EF]">
                        <button className="w-6 h-6 lg:hidden rounded-[50%] bg-[#FB2E86]">search</button>
                    </div>
                    <button type="submit" className="lg:w-9 lg:h-7 bg-[#FB2E86] hidden lg:flex">search</button>
                </div>

            </div>
    )
}