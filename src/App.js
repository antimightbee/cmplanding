import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import FrontPage from './components/FrontPage/FrontPage';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
    document.title = "Case Manager Pro";
  }, []);
  return (
    <div className="App">
      {/* <Header/> */}
      <FrontPage/>
      <Footer/>
    </div>
  );
}

export default App;
