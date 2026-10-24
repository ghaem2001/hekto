import notFound from "../assets/pictures/404.png"
import PinkBtn from "../components/PinkBtn/PinkBtn"

export default function NotFound(){
    return(
        <div className="flex flex-col justify-center items-center gap-7 mt-10">
            <div className="w-230 h-130">
                <img className="w-full h-full" src={notFound} alt="" />
            </div>
            <div>
                <p className="text-[24px] text-[#152970] font-semibold">ooPs! The page you requested was not found!</p>
            </div>
            <div>
                <PinkBtn/>
            </div>
        </div>
    )
}