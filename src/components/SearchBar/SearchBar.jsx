export default function SearchBar(){
    return (
        <div className="relative h-9 w-9">

            <div className="absolute right-0 top-0 flex h-9 w-9 flex-row-reverse items-center overflow-hidden rounded-full bg-[#7E33E0] transition-all duration-500 hover:w-[220px] focus-within:w-[220px]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center">
                    <i class="text-white text-[19px] fa-solid fa-magnifying-glass"></i>
                </div>
                <input
                    type="text"
                    aria-label="Search"
                    className="min-w-0 flex-1 bg-transparent px-5 text-[18px] text-white outline-none"
                />
            </div>

        </div>
    )
}