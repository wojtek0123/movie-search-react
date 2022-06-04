import { Link } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

const Searcher = () => {
	return (
    <>
      <Navigation />
      <h1 style={{'marginTop': '10em'}}>Searcher</h1>
      <Link to='/'>Home</Link>
    </>
  )
};

export default Searcher;
