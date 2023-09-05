import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
// import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Navbar } from './components/Navbar';
import 'font-awesome/css/font-awesome.min.css';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/products" element={<Products />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
