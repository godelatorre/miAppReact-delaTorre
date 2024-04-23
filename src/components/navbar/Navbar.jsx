import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import CartWidget from '../cartwidget/CartWidget';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navegador() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <h1 className="text-center mt-3" lang="en" style={{ color: 'limegreen', fontFamily: 'cursive', padding: '10px' }}>DexterSeed</h1>
      <Navbar expand="lg" className="bg-body-tertiary Navegador">
        <Container>
          <Navbar.Brand as={NavLink} to='/' className="d-flex justify-content-center">
            <img
              src="/img/logo.jpg"
              width="50"
              height="50"
              className="d-inline-block align-top"
              style={{ borderRadius: '50%' }}
              alt="Logo"
            />

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
          <Navbar.Collapse id="basic-navbar-nav" className={showMenu ? 'show' : ''}>
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to='/home' className="text-white">HOME</Nav.Link>
              <NavDropdown title={<span className="semas-dropdown">SEMAS</span>} id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to='/semas/Automaticas'>Automaticas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to='/semas/Fotoperiodicas'>FotoPeriodicas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to='/semas/Medicinal' >CBD Medicinal</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to='/Comentanos' className="text-white">COMÉNTANOS</Nav.Link>
            </Nav>
            <div className="ms-auto">
              <NavLink to='/cart' style={{ textDecoration: 'none' }}>

                <CartWidget />

              </NavLink>

            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navegador;