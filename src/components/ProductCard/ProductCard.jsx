export default function ProductCard({item}){
    return(
        <div className="group mt-30 flex gap-1 flex-col justify-center items-center w-[270px] shadow-md hover:shadow-2xl transition duration-300 h-[400px] bg-[#fff]" key={item.id}>
            <div className="flex justify-center items-center w-62.5 h-70 bg-[#F6F7FB] group-hover:bg-[#eff1f7]">
                <img className="w-full h-full p-5 object-contain" src={item.thumbnail} alt={item.title}/>
            </div>
            <div className="flex flex-col gap-2 mt-3 items-center text-center">
                <div className="text-[18px] font-bold text-[#151875]">{item.title.split(" ").slice(0, 2).join(" ")}</div>
                <div className="flex gap-2">
                    <div className="w-[12px] h-[12px] hover:w-[15px] hover:h-[15px] rounded-[50%] bg-amber-300"></div>
                    <div className="w-[12px] h-[12px] hover:w-[15px] hover:h-[15px] rounded-[50%] bg-blue-600"></div>
                    <div className="w-[12px] h-[12px] hover:w-[15px] hover:h-[15px] rounded-[50%] bg-emerald-500"></div>
                </div>
                <div className="flex gap-4">
                    <div className="text-[16px] font-semibold text-[#151875]">$ {item.price}</div>
                </div>
            </div>
        </div>
    )
}