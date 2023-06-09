import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import RoutesPages from './Routes/Routes';
import { Provider } from './components/Context';

export default function App() {
  return (
   <Provider>
    <NavBar/>
    <RoutesPages/>
    <Footer/>
   </Provider>
  );
}

