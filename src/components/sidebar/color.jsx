import Template from "./templateCard";

export default function Color(){

    return(
        <Template heading='color'>
            <ul className="flex items-center justify-between">
                <li className=" w-6 h-6 rounded-full bg-blue-500"></li>
                <li className=" w-6 h-6 rounded-full bg-blue-500"></li>
                <li className=" w-6 h-6 rounded-full bg-blue-500"></li>
                <li className=" w-6 h-6 rounded-full bg-blue-500"></li>
                <li className=" w-6 h-6 rounded-full bg-blue-500"></li>
                <li className=" w-6 h-6 rounded-full bg-blue-500"></li>
            </ul>
        </Template>
    )
}