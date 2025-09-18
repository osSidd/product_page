import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Sidebar from './components/sidebar/sidebar'

export default function App(){
  return(
    <div>
      <Header/>
      <div className="grid grid-cols-12 gap-x-8 px-6 pt-9 pb-6">
        <Sidebar/>
        <Main/>
      </div>
      <Footer/>
    </div>
  )
}

// image placement in public and assets