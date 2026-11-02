import { useState } from "react"
import "./TrendingCard.css"


export default function TrendingCard({product}){

    const [liked , setLiked] = useState(false)

    let addToCart = () => {

    }

    let addToWishList = () => setLiked(! liked)



    return(
        <div className="transition duration-400 pb-3 w-[270px] h-[350px] flex flex-col justify-around items-center shadow-xl hover:shadow-2xl">
            <div className="flex flex-col justify-center items-center">
                <div className="flex gap-2">
                    <div className="relative top-9 right-22 cursor-pointer" title="Add To Cart" onClick={addToCart}>
                        <i className="fa-light fa-cart-shopping"></i>
                    </div>
                    <div className="relative top-9 right-22 cursor-pointer" title="Add To Wishlist" onClick={addToWishList}>
                        <i className={liked ? "fa-solid fa-heart text-[#f00]" : "fa-regular fa-heart"}></i>
                    </div>
                </div>
                <div className="w-[247px] h-[244px] bg-[#F5F6F8] flex items-center justify-center">
                    <img className="w-full h-full flex justify-center items-center" src={product.thumbnail} alt={product.title.split(" ").slice(0, 2).join(" ")}/>
                </div>
            </div>
            <div>
                <p className="text-[#151875] font-lato font-bold">{product.title.split(" ").slice(0, 2).join(" ")}</p>
            </div>
            <div className="flex items-baseline gap-4">
                <p className="text-[#151875] text-[14px]">{product.price}</p>
            </div>
        </div>
    )
}