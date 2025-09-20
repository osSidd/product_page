export default function ViewMoreBtn({viewMore, toggleView}){
    return (
        <button className="capitalize mx-auto block font-semibold cursor-pointer" onClick={toggleView}>
            {viewMore ? 'view more' : 'view less' }
        </button>

    )
}