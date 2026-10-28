import Product from "../components/Products/Product";
import TrustSymbols from "../components/TrustSymbols/TrustSymbols";

export default function Shop(){
    return(
        <div className="min-w-100 mt-15">

            {/* desc page */}
            <div className="flex flex-col lg:flex-row justify-center lg:justify-around gap-10 items-center lg:items-baseline mt-7 lg:gap-5">
                <div className="flex flex-col items-center lg:items-start gap-2">
                    <p className="text-[18px] font-semibold text-[#151875]">Ecommerce Acceories & Fashion item</p>
                    <p className="text-[14px] text-[#8A8FB9]">About 9,620 results (0.62 seconds)</p>
                </div>
                <div>
                    <div className="flex justify-center items-center gap-5">
                        <div className="flex gap-2">
                            <p>Per Page :</p>
                            <input type="text" className="w-15 border"/>
                        </div>
                        <div className="flex gap-3">
                            <label>Sort By :</label>
                            <select className="border text-[14px] rounded-2xl p-1" name="sort" id="">
                                <option value="Best Match">select</option>
                                <option value="Best Match">Best Match</option>
                                <option value="Best Price">Best Price</option>
                                <option value="Popular">Popular</option>
                            </select>
                        </div>
                        <div className="hidden lg:flex">
                            <p>view:</p>
                        </div>
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <p>View:</p>
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