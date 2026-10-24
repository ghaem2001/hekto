export default function Shop(){
    return(
        <div className="flex justify-center">
            <div>
                <p>Ecommerce Acceories & Fashion item</p>
            </div>
            <div className="flex">
                <div className="flex">
                    <p>Per Page:</p>
                    <input type="text" />
                </div>
                <div className="flex gap-8">
                    <p>Sort By:</p>
                    <select name="sort" id="">
                        <option value="Best Match"></option>
                        <option value="Best Price"></option>
                        <option value="Popular"></option>
                    </select>
                </div>
                <div className="flex">
                    <p>View:</p>
                </div>
            </div>
        </div>
    )
}