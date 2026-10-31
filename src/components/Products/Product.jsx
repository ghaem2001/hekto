import { useEffect, useState } from "react";
import "./Product.css"



export default function Product(){


    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        async function getProducts(){
            try {
            const res = await fetch("https://dummyjson.com/products?limit=0");
            if (!res.ok) throw new Error("failed to render data");

            const data = await res.json();

            setProducts(data.products);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        getProducts();

    }, []);

    if (loading) return <div className="mt-30 flex justify-center items-center text-center gap-3">
                            <span className="font-semibold text-[22px]">Loading</span>
                            <span className="loading loading-spinner loading-sm"></span>
                        </div>;

    if (error) return <p className="p-10 text-center text-red-500">{error}</p>;

    return(
        <div className="grid grid-cols-1 items-cente max-w-360 lg:gap-x-20 lg:gap-y-20 lg:grid-cols-4">
            {products.map((p) => (
                <div className="group mt-30 flex gap-1 flex-col justify-center items-center w-[270px] shadow-md hover:shadow-2xl transition duration-300 h-[400px] bg-[#fff]" key={p.id}>
                    <div className="flex justify-center items-center w-62.5 h-70 bg-[#F6F7FB] group-hover:bg-[#eff1f7]">
                        <img className="w-full h-full p-5 object-contain" src={p.thumbnail} alt={p.title}/>
                    </div>
                    <div className="flex flex-col gap-2 mt-3 items-center text-center">
                        <div className="text-[18px] font-bold text-[#151875]">{p.title.split(" ").slice(0, 2).join(" ")}</div>
                        <div className="flex gap-2">
                            <div className="w-[12px] h-[12px] hover:w-[15px] hover:h-[15px] rounded-[50%] bg-amber-300"></div>
                            <div className="w-[12px] h-[12px] hover:w-[15px] hover:h-[15px] rounded-[50%] bg-blue-600"></div>
                            <div className="w-[12px] h-[12px] hover:w-[15px] hover:h-[15px] rounded-[50%] bg-emerald-500"></div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-[16px] font-semibold text-[#151875]">$ {p.price}</div>
                        </div>
                    </div>
                </div>
            ))};
        </div>
    );
};