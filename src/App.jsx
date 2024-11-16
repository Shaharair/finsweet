import About from "./About"
import Around from "./Around"
import Banner from "./Banner"
import Blog from "./Blog"
import Navbar from "./Components/Navbar"
import Footer from "./Footer"
import Service from "./Service"
import Upcoming from "./Upcoming"
import Welcome from "./Welcome"


function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <About/>
      <Welcome/>
      <Service/>
      <Upcoming/>
      <Around/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App
