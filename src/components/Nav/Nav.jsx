import "./Header.css"

export default function Header(){


    return(
        <div className="bg-white">

            {/* Logo */}
            <div>Hekto</div>

            {/* Site Pages */}
            <div>
                <ul>
                    <li>Home</li>
                    <li>Pages</li>
                    <li>Products</li>
                    <li>Blog</li>
                    <li>Shop</li>
                    <li>Contact</li>
                </ul>
            </div>

            {/* Search Bar */}
            <div>
                <div>
                    <div></div>
                </div>
            </div>

        </div>
    )
}