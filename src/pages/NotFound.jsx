import notFound from "../assets/pictures/404.png"
import PinkBtn from "../components/PinkBtn/PinkBtn"

export default function NotFound(){
    return(
        <div className="flex flex-col">
            <img src={notFound} alt="" />
            <p></p>
            <PinkBtn/>
        </div>
    )
}