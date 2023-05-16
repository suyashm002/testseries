import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Header from './components/Layout/Header';
import { Provider } from './components/Context';
import NavBar from './components/NavBar';

export default function App() {
  return (
   <Provider>
    <NavBar/>
    <RoutesPages/>
    <Footer/>
   </Provider>
  );
}

