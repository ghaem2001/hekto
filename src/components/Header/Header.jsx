

export default function Header(){

    let openLoginModal = () => {
        const login = document.querySelector("#loginModal")
        const signUp = document.querySelector("#signUpModal")
        login.classList.remove("hidden")
        signUp.classList.add("hidden")
    }

    let closeLoginModal = () => {
        const login = document.querySelector("#loginModal")
        login.classList.add("hidden")
    }

    let openSignUpModal = () => {
        const signUp = document.querySelector("#signUpModal")
        const login = document.querySelector("#loginModal")
        signUp.classList.remove("hidden")
        login.classList.add("hidden")
    }

    let closeSignUpModal = () => {
        const signUp = document.querySelector("#signUpModal")
        signUp.classList.add("hidden")
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
                            <button onClick={openLoginModal}>Login</button>
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


            {/* Login Modal */}
            <div id="loginModal" className="hidden w-full h-screen z-100 fixed bg-[#0000008e]">

                <form className="fixed top-60 left-150 w-[544px] h-[474px] rounded-[10px] bg-white">
                    <button type="button" className="absolute top-0 left-128 text-[32px]" onClick={closeLoginModal}>x</button>
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
                            <button type="button" className="font-lato">Forgot your Password ?</button>
                        </div>
                        <div className="">
                            <button className="bg-[#FB2E86] text-white w-full h-[47px]">Sign In</button>
                        </div>
                        <div className="flex justify-center font-lato">
                            <p className="flex gap-3 text-[#9096B2]">Don’t have an Account ?
                                <button type="button" className="text-black" onClick={openSignUpModal}>Create account</button>
                            </p>
                        </div>
                    </div>
                </form>

            </div>



            {/* Sign Up Modal */}
            <div id="signUpModal" className="hidden w-full h-screen z-100 fixed bg-[#0000008e]">

                <form className="fixed top-60 left-150 w-[544px] h-[474px] rounded-[10px] bg-white">
                    <button type="button" className="absolute top-0 left-128 text-[32px]" onClick={closeSignUpModal}>x</button>
                    <div className="w-[432px] m-auto flex flex-col gap-5 mt-8" id="container">
                        <div className="flex flex-col justify-center items-center">
                            <p className="font-bold text-[32px]">Sign Up</p>
                            <p className="font-lato text-[17px text-[#9096B2]">Please creating your account to access site options</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="flex justify-center items-center gap-3">
                                <input className="border w-[210px] h-[52px] pl-3 text-[#9096B2] font-lato border-[#C2C5E1]" type="text" placeholder="First Name"/>
                                <input className="border w-[210px] h-[52px] pl-3 text-[#9096B2] font-lato border-[#C2C5E1]" type="text" placeholder="Last Name"/>
                            </div>
                            <div className="flex justify-center items-center">
                                <input className="border w-full h-[52px] pl-3 text-[#9096B2] font-lato border-[#C2C5E1]" type="text" placeholder="Email"/>
                            </div>
                            <div className="flex justify-center items-center">
                                <input className="border w-full h-[52px] pl-3 text-[#9096B2] font-lato border-[#C2C5E1]" type="text" placeholder="Phone Number"/>
                            </div>
                        </div>
                        <div className="">
                            <button className="bg-[#FB2E86] text-white w-full h-[47px]">Sign In</button>
                        </div>
                        <div className="flex justify-center font-lato">
                            <p className="flex gap-3 text-[#9096B2]">Do you have an account ?
                                <button type="button" className="text-black" onClick={openLoginModal}>Login</button>
                            </p>
                        </div>
                    </div>
                </form>

            </div>

        </div>
    )
}