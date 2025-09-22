import { useState } from "react"
import Main from "../components/main/main"
import Sidebar from "../components/sidebar/sidebar"
import useProductContext from "../hooks/useProductContext"
import PageTemplate from "./page_template"

export default function Home(){

    const {state, dispatch} = useProductContext()

    const [sidebarView, setSidebarView] = useState(true)

    function toggleSidebarView(){
        setSidebarView(prev => !prev)
    }

    return(
        <>
            <PageTemplate cart={state.cart}>
                <div className="grid grid-cols-12 gap-x-8 px-6 pt-9 pb-6 relative">
                    <div className={` ${!sidebarView ? " absolute top-12   left-8" : " hidden" } flex items-center justify-center w-10 h-10 bg-gray-200`}>
                        <img onClick={toggleSidebarView} className="w-6 h-6" src="./show.svg"  alt="show sidebar icon"/>

                    </div>
                    <Sidebar 
                        products={state.originalProductList} 
                        filters={state.filters} 
                        dispatch={dispatch}
                        sidebarView={sidebarView}
                        toggleSidebarView={toggleSidebarView}
                    />
                    <Main 
                        products={state.products} 
                        sidebarView={sidebarView} 
                        cart={state.cart}
                        dispatch={dispatch}
                    />
                </div>
            </PageTemplate>
        </>
    )
}