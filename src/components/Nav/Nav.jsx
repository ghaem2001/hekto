import "./Nav.css"

export default function Nav(){


    return(
            <div className="bg-white sticky top-0 w-full h-19.5 flex justify-around items-center text-[#0D0E43] border-b border-[#E7E6EF]">

                {/* Logo */}
                <div>
                    <h1 className="relative left-50 font-bold text-[34px]">Hekto</h1>
                </div>

                {/* Site Pages */}
                <div>
                    <ul className="flex gap-10">
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
                    <div className="w-50 h-7 border border-[#E7E6EF]"></div>
                    <button type="submit" className="w-9 h-7 bg-[#FB2E86]">search</button>
                </div>

            </div>
    )
}