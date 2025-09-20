import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Sidebar from './components/sidebar/sidebar'

import useProductContext from "./hooks/useProductContext";

export default function App(){

  const {state} = useProductContext()

  return(
    <div>
      <Header/>
      <div className="grid grid-cols-12 gap-x-8 px-6 pt-9 pb-6">
        <Sidebar products={state.products}/>
        <Main products={state.products}/>
      </div>
      <Footer/>
    </div>
  )
}