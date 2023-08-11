import './Hero.css'
import './UncontrolledExample'
import UncontrolledExample from './UncontrolledExample'


const Hero = () => {
  return (
    <div className="hero">
            <div className="left">
                    <h1>Vica Code</h1>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
            </div>
            <div className="right">
                <UncontrolledExample/>
            </div>
    </div>
  )
}

export default Hero