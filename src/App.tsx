import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Navbar } from './components/Navbar';
import 'font-awesome/css/font-awesome.min.css';
function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
