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

if (loading) return <div className="flex justify-center items-center text-center gap-3">
        <span className="loading loading-spinner loading-sm"></span>
        <span className="text-[18px]">در حال بارگذاری</span>
    </div>;
    
if (error) return <p className="p-10 text-center text-red-500">{error}</p>;

    return(
        <div className="grid grid-cols-1 items-cente max-w-360 lg:gap-x-30 lg:gap-y-20 lg:grid-cols-4">
            {products.map((product) => (
                <div className="group mt-30 flex gap-1 flex-col justify-center items-center w-[270px] shadow-md hover:shadow-2xl transition duration-300 h-[400px] bg-[#fff]" key={product.id}>
                    <div className="flex justify-center items-center w-[250px] h-[280px] bg-[#F6F7FB] group-hover:bg-[#eff1f7]">
                        <img className="w-full h-full p-5 object-contain" src={product.image} alt="" />
                    </div>
                    <div className="flex flex-col gap-2 mt-3 items-center text-center">
                        <div className="text-[18px] font-bold text-[#151875]">{product.title.split(" ","2")}</div>
                        <div className="flex gap-2">
                            <div className="w-[12px] h-[12px] hover:w-[15px] hover:h-[15px] rounded-[50%] bg-amber-300"></div>
                            <div className="w-[12px] h-[12px] hover:w-[15px] hover:h-[15px] rounded-[50%] bg-blue-600"></div>
                            <div className="w-[12px] h-[12px] hover:w-[15px] hover:h-[15px] rounded-[50%] bg-emerald-500"></div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-[16px] font-semibold text-[#151875]">$ {product.price}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}