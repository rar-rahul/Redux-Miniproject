import logo from './logo.svg';
import './style.css';
import Main from './component/Main';
import Navbar from './component/Navbar';
import { Provider } from 'react-redux';
import { store } from './store/index';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Main/>
    </div>
    </Provider>
  );
}

export default App;
