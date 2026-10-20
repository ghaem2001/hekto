export default function Header(){
    return(
        <div className="flex justify-center lg:justify-around items-center h-11 bg-[#7E33E0] font-medium">

            <div className="flex text-white gap-20 lg:gap-3">
                <p className="hidden lg:flex">ghaemde@gmail.com</p>
                <p className="hidden lg:flex">(+98)903-927-4202</p>
                <ul className="lg:hidden">created by</ul>
                <ul className="lg:hidden">setting</ul>
            </div>

            <div>
                <ul className="lg:flex hidden text-white gap-9">
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