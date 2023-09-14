import react from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import{changeQty,removeCart} from "../Redux/cartslice"

const Cart = () => {
  const store = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const changeQuantity = (id,qty) => { 
            dispatch(changeQty({
                id:id,
                qty:qty
            }))
  }

  

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/">Home</Link>
        <b>Cart</b>
        <b>Subtotal:</b>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          {store.cart.map((prod) => (
            <div
              key={prod.title}
              style={{
                display: "flex",
                padding: 10,
                border: "1px solid grey",
                margin: 5,
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", gap: 10 }}>
                <img src="#" alt="imag" />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <span>Title</span>
                  <b>Price</b>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <button onClick={() => changeQuantity(prod.id,prod.qty - 1)}>-</button>
                <span>{prod.qty}</span>
                <button onClick={() => changeQuantity(prod.id,prod.qty + 1)}>+</button>
              </div>
              <div>
                <button onClick={() => dispatch(removeCart({id:prod.id}))}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
