import { Container, Button, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import { FaCartShopping } from 'react-icons/fa6';
export function Navbar() {
  return (
    <NavbarBs sticky='top' className="bg-light text-dark shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to={'/'} as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to={'/products'} as={NavLink}>
            Products
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: '4rem', height: '4rem', position: 'relative' }}
          variant="outline-success"
          className=""
        >
          <FaCartShopping style={{ width: '2.5rem', height: '2.5rem' }} />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: '#fff',
              width: '1.8rem',
              height: '1.8rem',
              position: 'absolute',
              bottom: '0',
              right: '0',
            }}
          >
            10
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
}
