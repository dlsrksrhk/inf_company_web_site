import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
