import Photo from "./components/photo"
import Name from "./components/name"
import CardBtns from "./components/buttons"
import About from "./components/about"
import Interests from "./components/interests"
import Footer from "./components/footer"

export default function App() {
  return (
    <div className="app-container">
      <Photo></Photo>
      <div className="main-section-container">
        <Name></Name>
        <CardBtns></CardBtns>
        <div className="second-section-container">
          <About></About>
          <Interests></Interests>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}