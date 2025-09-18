import Template from "./templateCard";

export default function Prices(){
    return(
        <Template heading='brand'>
            <div>
                <div className="flex items-center justify-between my-2">
                    <span className="capitalize">ranger&#58;</span>
                    <span>&#36;13.99 - &#36;25.99</span>
                </div>
                <input type="range" name="" min={2} max={99} step={2} id="" />
            </div>
        </Template>

    )
}