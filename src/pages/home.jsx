import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import Main from "../components/main/main"
import Sidebar from "../components/sidebar/sidebar"
import useProductContext from "../hooks/useProductContext"
import PageTemplate from "./page_template"

export default function Home(){

    const {state, dispatch} = useProductContext()

    return(
        <>
            <PageTemplate>
                <div className="grid grid-cols-12 gap-x-8 px-6 pt-9 pb-6">
                    <Sidebar products={state.originalProductList} filters={state.filters} dispatch={dispatch}/>
                    <Main products={state.products}/>
                </div>
            </PageTemplate>
        </>
    )
}