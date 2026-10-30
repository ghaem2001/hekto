export default function SearchBar(){
    return (
        <div className="p-4 overflow-hidden w-[20px] h-[20px] hover:w-[200px] bg-[#FB2E86] rounded-full flex group items-center duration-500">
            <div className="flex items-center justify-center fill-white">
                <svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={22} height={22}>
                    <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z" />
                </svg>
            </div>
            <input type="text" className="outline-none text-[18px] bg-transparent w-full text-white font-normal px-2" />
        </div>
    )
}
