import Template from "./templateCard"

export default function Brand(){

    const brands = [
        {brand: 'Nike', qty: 99},
        {brand: 'Nike', qty: 99},
        {brand: 'Nike', qty: 99},
        {brand: 'Nike', qty: 99},
    ]

    return(
        <Template heading='brand'>
            <ul>
                {
                    brands.map((brand, index) => (
                        <li key={index} className="flex items-center justify-between text-lg font-normal my-8">
                            <span>{brand.brand}</span>
                            <span>{brand.qty}</span>
                        </li>
                    ))
                }
            </ul>
        </Template>
    )
}