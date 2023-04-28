import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div>
            <h1 style={{backgroundColor:'lavender'}}>Home Component</h1>
            <Link to={"/about"}>Go to About</Link> | <Link to={"/survey"}>Take the Survey</Link>
        </div>
    )
}

export default Home;