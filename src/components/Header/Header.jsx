export default function Header(){
    return(
        <div className="flex justify-around items-center h-11 bg-[#7E33E0] font-medium">

            <div className="flex text-white gap-10">
                <p>ghaemde@gmail.com</p>
                <p>(+98)903-927-4202</p>
            </div>

            <div>
                <ul className="flex text-white gap-9">
                    <li>English</li>
                    <li>USD</li>
                    <li>Login</li>
                    <li>Wishlist</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}