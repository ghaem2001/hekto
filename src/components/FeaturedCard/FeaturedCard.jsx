import "./FeaturedCard.css"

import { useState } from "react"
import { useNavigate } from "react-router-dom"



export default function FeaturedCard({product}){

    const navigate = useNavigate

    const [liked , setLiked] = useState(false)

    
    let addToWishList = () => setLiked(! liked)

    let addToCart = () => {
        navigate("/Cart")
    };




    return(
        <div className="group mt-3 w-[270px] h-[361px] rounded-[10px] shadow-xl hover:shadow-2xl hover:overflow-hidden cursor-pointer">
            <div className="rounded-t-[10px] flex flex-col justify-center items-center w-full h-[236px] bg-[#F6F7FB]">
                <div className="flex gap-2">
                    <div className="relative top-6 right-24 cursor-pointer" title="Add To Cart" onClick={addToCart}>
                        <i className="fa-light fa-cart-shopping"></i>
                    </div>
                    <div className="relative top-6 right-24 cursor-pointer" title="Add To Wishlist" onClick={addToWishList}>
                        <i className={liked ? "fa-solid fa-heart text-[#f00]" : "fa-regular fa-heart"}></i>
                    </div>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                    <img className="w-full h-full flex justify-center items-center" src={product.thumbnail} alt={product.title.split(" ").slice(0, 2).join(" ")}/>
                </div>
            </div>
            <div className="group-hover:bg-[#2F1AC4] flex flex-col justify-center items-center gap-3 py-2">
                <p className="text-[18px] transition duration-500 group-hover:text-white text-[#FB2E86] font-lato font-bold">{product.title.split(" ").slice(0, 2).join(" ")}</p>
                <div className="flex gap-2">
                    <div className="w-[14px] h-[4px] rounded bg-[#05E6B7]"></div>
                    <div className="w-[14px] h-[4px] rounded bg-[#F701A8]"></div>
                    <div className="w-[14px] h-[4px] rounded bg-[#00009D] group-hover:bg-[#FFEAC1]"></div>
                </div>
                <p className="transition duration-500 group-hover:text-white text-[#151875] text-[14px]">barCode : {product.meta.barcode}</p>
                <p className="transition duration-500 group-hover:text-white text-[#151875] text-[14px] font-lato">{product.price}</p>
            </div>
        </div>
    )
}