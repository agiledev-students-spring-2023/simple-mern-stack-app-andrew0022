import { Link } from 'react-router-dom'
import './Aboutus.css'
import myPic from './myPic.jpg'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  return (
    <>
      <h1>About Us Page</h1>
      <p>Hi, my name is Andrew Huang and I am a junior at NYU majoring in Computer Science. Besides CS, my hobbies
        revolve around music, food, and exercise. I am currently taking electric guitar lessons through Steinhardt and 
        I have played the violin for ten years. I also love exploring different restaurants around the city and traveling
        to different countries to experience the food and culture. 
      </p>
      <img src={myPic} alt="My Picture" width="70" height="90"></img>
      
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
