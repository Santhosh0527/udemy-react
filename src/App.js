import Navbar from "./components/Navbar"
import Catagories from "./components/Catagories"
import Saleimage from "./components/Saleimage"
import Recommended from "./components/Recommended"
import Topics from "./components/Topics"
import Popular from "./components/Popular"
import Footer from "./components/Footer"

function App(){
    return(<div>
        <Navbar></Navbar>
        <Catagories></Catagories>
        <Saleimage></Saleimage>
        <Recommended></Recommended>
        <Topics></Topics>
        <Popular></Popular>
        <Footer></Footer>
      </div>)
}
export default App