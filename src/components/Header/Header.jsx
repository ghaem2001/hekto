

export default function Header(){

    let showLoginModal = () => {
        const login = document.querySelector("#loginModal")
        login.classList.remove("hidden")
    }

    let hideLoginModal = () => {
        const login = document.querySelector("#loginModal")
        login.classList.add("hidden")
    }

    return(
        <div>

            <div className="flex justify-center lg:justify-around items-center h-11 bg-[#7E33E0] font-medium">

                <div className="flex text-white gap-20 lg:gap-3">
                    <p className="hidden lg:flex">ghaemde@gmail.com</p>
                    <p className="hidden lg:flex">(+98)903-927-4202</p>
                    <ul className="lg:hidden">created by</ul>
                    <ul className="lg:hidden">setting</ul>
                </div>

                <div>
                    <ul className="lg:flex lg:justify-center lg:items-center hidden text-white gap-9">
                        <li>
                            <button>English</button>
                        </li>
                        <li>
                            <button>USD</button>
                        </li>
                        <li>
                            <button onClick={showLoginModal}>Login</button>
                        </li>
                        <li>
                            <button>Wishlist</button>
                        </li>
                        <li>
                            <button>Cart</button>
                        </li>
                    </ul>
                </div>
            </div>


            <div id="loginModal" className="hidden w-full h-screen z-100 fixed bg-[#0000008e]">

                <form className="fixed top-60 left-150 w-[544px] h-[474px] rounded-[10px] bg-white">
                    <p className="absolute top-0 left-128 text-[32px]" onClick={hideLoginModal}>x</p>
                    <div className="w-[432px] m-auto flex flex-col gap-5 mt-10" id="container">
                        <div className="flex flex-col justify-center items-center">
                            <p className="font-bold text-[32px]">Login</p>
                            <p className="font-lato text-[17px text-[#9096B2]">Please login using account detail bellow</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <input className="border w-full h-[52px] pl-3 text-[#9096B2] font-lato border-[#C2C5E1]" type="text" placeholder="Email Address"/>
                            <input className="border w-full h-[52px] pl-3 text-[#9096B2] font-lato border-[#C2C5E1]" type="text" placeholder="Password"/>
                        </div>
                        <div>
                            <button className="font-lato">Forgot your Password ?</button>
                        </div>
                        <div className="">
                            <button className="bg-[#FB2E86] text-white w-full h-[47px]">Sign In</button>
                        </div>
                        <div className="flex justify-center font-lato">
                            <p className="flex gap-3 text-[#9096B2]">Don’t have an Account ?
                                <button className="text-black">Create account</button>
                            </p>
                        </div>
                    </div>
                </form>

            </div>

        </div>
    )
}