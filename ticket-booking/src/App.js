import logo from './logo.svg';
import './style.css'
import './App.css';
import { Provider } from 'react-redux'
import {store} from './store/store'

import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm'

function App() {
  return (
   <Provider store={store}>
    <div className="App">
     <Navbar/>
     <BookingForm/>
    </div>
    </Provider>
  );
}

export default App;
