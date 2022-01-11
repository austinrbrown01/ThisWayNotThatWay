import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect fixed='top' expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" bold >This way, not that way!</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav' />
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/">Support</Nav.Link>
          </Nav>
        </Container>

      </Navbar>
    </>
  );
}

export default Navigation;