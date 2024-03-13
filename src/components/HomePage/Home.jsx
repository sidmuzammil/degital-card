import Nav from '../Navbar/Nav'
import IntroLeft from './IntroLeft'
import Introright from './Introright'
import "./Home.css"
import Cards from '../CradsSection/Cards'

const Home = () => {
  return (
    <div className='Home-conatiner'>
      <Nav />
      <div className="intro-section container">
        <div className="intro-left-section">
          <IntroLeft />
        </div>
        <div className="intro-right-section">
          <Introright />
        </div>
      </div>
      <Cards />

    </div>
  )
}
export default Home