import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <h2>TravelTrucks</h2>
      </Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
