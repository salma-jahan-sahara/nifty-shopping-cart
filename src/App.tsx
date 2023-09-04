// import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { About } from './pages/About';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button> */}
    </Container>
  );
}

export default App;
