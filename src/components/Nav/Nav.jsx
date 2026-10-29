import { Link } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import "./Nav.css"

export default function Nav(){
    return(
            <div className="z-1000 bg-white sticky top-0 w-full h-19.5 flex justify-around items-center text-[#0D0E43] border-b border-[#E7E6EF]">

                {/* Logo */}
                <div className="">
                    <h1 className="lg:relative left-50 font-bold text-[34px]">
                        <Link to="/">Hekto</Link>
                    </h1>
                </div>

                {/* Site Pages */}
                <div>
                    <ul className="hidden lg:flex lg:gap-10">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>Pages</li>
                        <li>Products</li>
                        <li>Blog</li>
                        <li>
                            <Link to="/Shop">Shop</Link>
                        </li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Search Bar */}
                <SearchBar/>

            </div>
    )
}