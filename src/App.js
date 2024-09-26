import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import FrontPage from './components/FrontPage/FrontPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <FrontPage/>
      <Footer/>
    </div>
  );
}

export default App;
