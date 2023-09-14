import Home from "./component/Home";
import Cart from "./component/Cart";
import "./styles.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </Router>
       
      </div>
    </Provider>
  );
}
