import Product from "../components/Products/Product";
import TrustSymbols from "../components/TrustSymbols/TrustSymbols";

export default function Shop(){
    return(
        <div className="min-w-100 mt-15">

            {/* desc page */}
            <div className="flex flex-col lg:flex-row justify-center gap-10 items-center lg:items-baseline mt-7 lg:gap-5">
                <div className="flex flex-col items-center gap-2">
                    <p className="text-[18px] font-semibold text-[#151875]">Ecommerce Acceories & Fashion item</p>
                    <p className="text-[14px] text-[#8A8FB9]">About 9,620 results (0.62 seconds)</p>
                </div>
            </div>

            {/* products */}
            <div className="mt-10 flex items-center justify-center">
                <Product/>
            </div>

            {/* Trust Symbols */}
            <div className="mt-50">
                <TrustSymbols/>
            </div>
        </div>
    )
}