import { getPdtQtyRange } from "../../functions/functions"

export default function FilterSection({products, productQty, view, sortValue, toggleView, toggleSort, toggleProductQty}){
    
    const qtyOptions = getPdtQtyRange(products)
    const sortOptions = ['name', 'price', 'brand', 'rating']
    
    return (
        <aside className="flex items-center justify-between px-6 py-4 my-4 bg-gray-100 ">
            <p className="text-lg font-normal">{products.length} items</p>
            <form action="" className="">
                <label htmlFor="" className="text-lg font-normal capitalize">sort by
                    <select name="" id="" value={sortValue} onChange={toggleSort} className=" capitalize cursor-pointer mx-8" >
                        {
                            sortOptions.map(option => (
                                <option key={option} value={option} className="text-lg font-normal capitalize">{option}</option>
                            ))
                        }
                    </select>
                </label>
                <label htmlFor="" className="text-lg font-normal capitalize ml-16">show
                    <select onChange={toggleProductQty} name="" id="" value={productQty} className="text-lg px-4 font-normal mx-8 cursor-pointer">
                        {
                            qtyOptions.map(option => (
                                <option key={option} value={option} className="text-lg font-normal cursor-pointer">{option}</option>
                            ))
                        }
                    </select>
                </label>
            </form>
            <div className="flex items-center justify-between gap-x-2">
                <img onClick={() => toggleView('grid')} className={`cursor-pointer p-2 ${view === 'grid' ? 'bg-gray-200 ' : null} `} src="./grid.svg" alt="grid view icon" />
                <img onClick={() => toggleView('list')} className={`cursor-pointer p-2.5 ${view === 'list' ? 'bg-gray-200' : null} `} src="./list.svg" alt="list view icon" />
            </div>
        </aside>
    )
}