import { createContext, useContext } from "react"
import { useEffect, useState } from "react";


    const ProductsContext = createContext()


export default function ProductsProvider({children}){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        async function getProducts(){
            try{
            const res = await fetch("https://dummyjson.com/products?limit=0");
            if(!res.ok) throw new Error("failed to render data");

            const data = await res.json();

            setProducts(data.products);

            }catch (err) {
                setError(err.message);

            }finally {
                setLoading(false);
            }
        };
        getProducts();

    }, []);



    return(
        <ProductsContext.Provider value={{products , loading , error}}>
            {children}
        </ProductsContext.Provider>
    )
}


export function useProducts(){
    return useContext(ProductsContext)
}


