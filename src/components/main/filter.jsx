export default function FilterSection(){
    return (
        <aside className="flex items-center justify-between px-6 py-6 my-4 bg-gray-100 ">
            <p className="text-lg font-normal">13 items</p>
            <form action="" className="w-6/12">
                <label htmlFor="" className="text-lg font-normal capitalize">sort by
                    <select name="" id="" className="mx-8" >
                        <option value="" className="text-lg font-normal capitalize">name</option>
                    </select>
                </label>
                <label htmlFor="" className="text-lg font-normal capitalize ml-16">show
                    <select name="" id="" className="text-lg font-normal mx-8">
                        <option value="" className="text-lg font-normal">12</option>
                    </select>
                </label>
            </form>
            <div className="flex items-center justify-between gap-x-4">
                <img src="./grid.svg" alt="grid view icon" />
                <img src="./list.svg" alt="list view icon" />
            </div>
        </aside>
    )
}