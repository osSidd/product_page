import { getPages } from "../../functions/functions"

export default function Pagination({productQty, pageNo, products, togglePageNo}){

    const pages = getPages(products, productQty)

    return(
        <section className="bg-gray-100 mt-8">
            <ul className="flex items-center justify-center">
                {
                    pages.map(page => (
                        <li 
                            key={page} 
                            className={`py-4 px-6 
                                        ${pageNo === page ?
                                            'bg-blue-400 text-white' :
                                            'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }
                                        font-normal text-lg cursor-pointer `
                                    }
                            onClick={() => togglePageNo(page)}
                        >
                            {page}
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}