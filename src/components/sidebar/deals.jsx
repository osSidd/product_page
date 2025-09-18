import Template from "./templateCard"

export default function Deals(){

    const deals = [
        {brand: 'Nike', qty: 2},
        {brand: 'Nike', qty: 2},
        {brand: 'Nike', qty: 2},
        {brand: 'Nike', qty: 2},
        {brand: 'Nike', qty: 2},
        {brand: 'Nike', qty: 2},
        {brand: 'Nike', qty: 2},
        {brand: 'Nike', qty: 2},
        {brand: 'Nike', qty: 2},
        {brand: 'Nike', qty: 2},
    ]

    return(
        <Template heading='hot deals' headingCase="capitalize">
            <ul>
                {
                    deals.map((deal, index) => (
                        <li key={index} className="flex items-center justify-between text-lg font-normal my-6">
                            <span>{deal.brand}</span>
                            <span>{deal.qty}</span>
                        </li>
                    ))
                }
            </ul>
        </Template>
    )
}