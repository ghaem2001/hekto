import { useEffect, useState } from "react";
import "./Product.css"



export default function Product(){


    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

useEffect(() => {

    async function getProducts() {
        try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("خطا در دریافت اطلاعات");

        const data = await res.json();

        setProducts(data);
        } catch (err) {
        setError(err.message);
        } finally {
        setLoading(false);
        }
    }
    getProducts();

}, []);



    return(
        <div>
            {products.map((product) => (
                <div className="mt-20 flex gap-3 flex-col w-[270px] h-[363px]" key={product.id}>
                    <div className="flex justify-center rounded-3xl items-center w-[270px] h-[280px] bg-[#F6F7FB]">
                        <img className="w-full h-full p-5 object-contain" src={product.image} alt="" />
                    </div>
                    <div className="flex flex-col gap- items-center text-center">
                        <div className="text-[18px] text-[#151875]">{product.title.split(" ","2")}</div>
                        <div className="flex gap-3">
                            <div className="w-[10px] h-[10px] bg-amber-300"></div>
                            <div className="w-[10px] h-[10px] bg-blue-600"></div>
                            <div className="w-[10px] h-[10px] bg-emerald-500"></div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-[14px] text-[#151875]">{product.price} </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}