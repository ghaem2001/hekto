import "./Nav.css"
import SearchBar from "../SearchBar/SearchBar"


import { Link } from "react-router-dom"

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
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/Shop">Shop</Link>
                        </li>
                        <li>
                            <Link to="/Blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/About">About Us</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Search Bar */}
                <SearchBar/>

            </div>
    )
}