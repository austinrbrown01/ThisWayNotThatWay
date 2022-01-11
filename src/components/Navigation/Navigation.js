import { Navbar, Nav, Container } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect fixed='top' expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">This way, not that way!</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/" hidden-xs>About</Nav.Link>
            <Nav.Link href="/" hidden-xs>Support</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </>
  );
}

export default Navigation;