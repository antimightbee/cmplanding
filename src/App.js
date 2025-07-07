import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FrontPage from "./components/pages/FrontPage/FrontPage"
import { useEffect } from 'react';
import MainRouter from './components/Router/MainRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  useEffect(() => {
    document.title = "Case Manager Pro";
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <MainRouter />
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
