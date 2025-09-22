function getBrandNQty(products){
    const brands = {}
    products.forEach(product => {
        if(brands[product.brand])
            brands[product.brand]++
        else
            brands[product.brand] = 1 
    })

    const arr = []
    let i = 0

    for(let key in brands){
        arr[i] = {brand: key, qty: brands[key]}
        i++
    }

    return arr
}

function getHotDeals(products){
    const brands = {}
    products.forEach(product => {
        if(product.isHot){
            if(brands[product.brand])
                brands[product.brand]++
            else
                brands[product.brand] = 1
        } 
    })

    const arr = []
    let i = 0

    for(let key in brands){
        arr[i] = {brand: key, qty: brands[key]}
        i++
    }

    return arr
}

function getColors(products){
    const colors = new Set()
    products.forEach(product => {
        product.colors.forEach(color => {
            colors.add(color)
        })
    })

    return [...colors]
}

function getPriceRange(products){
    const prices = []
    products.forEach(product => {
        prices.push(product.discountedPrice)
    })

    return {min: Math.min(...prices), max: Math.max(...prices)}

}

function getPdtQtyRange(products){
    const len = products.length
    const lenArr = []

    if(len <= 3)
        return [len]
    
    let i = 3
    while(i <= len){

        lenArr.push(i)

        if(len % i !== 0 && len - i <= 2){
            lenArr.push(len)
            break
        }

        i += 3
    }

    return lenArr
}

function getPages(products, pdtQty){
    const pdtLen = products.length
    const pageArr = []
    
    if(pdtQty === pdtLen)
        return [1]
    
    const quo = Math.floor(pdtLen / pdtQty)
    const rem = pdtLen % pdtQty
    let i
    
    for( i = 0; i < quo ; i++){
        pageArr[i] = i + 1
    }

    if(rem) pageArr[i] = i + 1

    return pageArr
}

function sortProducts(products, field){
    return products.toSorted((a, b) => {
        switch(field){
            case 'rating':
                return b['ratingValue'] - a['ratingValue']
            case 'price':
                return a['discountedPrice'] - b['discountedPrice']
            default:
                return a[field].localeCompare(b[field])
        }
    })
}

function getRatingArr(rating){
    if(rating === 5) return [1,2,3,4,5]
    if(rating > 4) return [1,2,3,4,4.5]
    if(rating  === 4) return [1,2,3,4]
    if(rating >= 3) return [1,2,3]
    if(rating >=2) return [1,2]
    return [1]
}

export {
    getBrandNQty,
    getHotDeals,
    getColors,
    getPriceRange,
    getPdtQtyRange,
    sortProducts,
    getPages,
    getRatingArr
}