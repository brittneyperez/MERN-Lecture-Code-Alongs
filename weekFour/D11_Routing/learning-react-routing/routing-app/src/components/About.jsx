import { Link } from "react-router-dom";

const About = (props) => {
    return (
        <div>
            <h1 style={{backgroundColor:'lavenderblush'}}>About Component</h1>
            <Link to={"/"}>Go back to Home</Link>
        </div>
    )
}

export default About;