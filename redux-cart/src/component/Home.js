import react, { useEffect, useState } from "react";
import List from "./List";
import Navbar from "./Navbar";

const Home = () => {
  const [product, setProduct] = useState({});
  const fetchProduct = () => {
    const data = fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((responce) => {
        setProduct(responce);
      });
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <h3>Hi User</h3>
      <Navbar />
      <div
        style={{
          justifyContent: "space-evenly",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          marginTop: "5px"
        }}
      >
        <List props={product} />
      </div>
    </>
  );
};

export default Home;
