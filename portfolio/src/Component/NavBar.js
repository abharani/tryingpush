import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
function BasicExample() {
  return (
    <Navbar className='Container' bg="primary" expand="lg">
      
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >
                <Link to='/Home'>Home</Link></Nav.Link>
            <Nav.Link ><Link to='/About'>About</Link></Nav.Link>
            <Nav.Link >
                <Link to='/Skills'>Skills</Link></Nav.Link>
                <Nav.Link >
                <Link to='/Portfolio'>Portfolio</Link></Nav.Link>
                <Nav.Link >
                <Link to='/Calculator'>Calculator</Link></Nav.Link>
                <Nav.Link >
                <Link to='/Home'>Home</Link></Nav.Link>
            




            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
}

export default BasicExample;