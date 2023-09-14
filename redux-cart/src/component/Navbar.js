import react from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const store = useSelector((state) => state.cart);
 
  return (
    <>
      <div style={{ height: "90px" }}>
      <Link to="/cart">Cart-{store.cart.length}</Link>
      </div>
    </>
  );
};

export default Navbar;
