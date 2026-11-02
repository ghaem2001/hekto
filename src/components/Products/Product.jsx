import { useProducts } from "../../context/ProductsContext";
import ProductCard from "../ProductCard/ProductCard";

import "./Product.css"



export default function Product(){

    const {products , loading , error} = useProducts()

    if (loading) return <div className="mt-30 flex justify-center items-center text-center gap-3">
                            <span className="font-semibold text-[22px]">Loading</span>
                            <span className="loading loading-spinner loading-sm"></span>
                        </div>;

    if (error) return <p className="p-10 text-center text-red-500">{error}</p>;



    return(
        <div className="grid grid-cols-1 items-cente max-w-360 lg:gap-x-20 lg:gap-y-20 lg:grid-cols-4">
            {products.map((p) => (
                <ProductCard key={p.id} item={p}/>
            ))};
        </div>
    );
};