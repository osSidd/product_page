import Template from "./templateCard";

export default function Prices({price, togglePrice}){

    const {min, max} = price

    return(
        <Template heading='prices'>
            <div className="px-6">
                <div className="flex items-center justify-between my-2">
                    <span className="capitalize">ranger&#58;</span>
                    <span>&#36;{min} - &#36;{max}</span>
                </div>
                <div className="w-full">
                    <label htmlFor="max">max
                        <input id="max" onChange={togglePrice} type="range" value={max} max={350} min={min + 50} step={5} className="w-full" name="max"/>
                    </label>
                    <label htmlFor="min">min
                        <input id="min" onChange={togglePrice} type="range" value={min} min={30} max={max - 50} step={5}     className="w-full" name="min"/>
                    </label>
                </div>
            </div>
        </Template>

    )
}