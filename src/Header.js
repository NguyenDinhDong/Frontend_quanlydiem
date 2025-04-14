import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const user = JSON.parse(localStorage.getItem('user-info'));  // Lấy thông tin người dùng từ localStorage
  const navigate = useNavigate();

  // Hàm đăng xuất
  function Logout() {
    localStorage.clear();
    navigate("/login");  // Chuyển hướng về trang đăng nhập
  }

  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">EcommApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            {user ? (
              <>
                <Nav.Link as={Link} to="/">Product List</Nav.Link>
                <Nav.Link as={Link} to="/add">Add Product</Nav.Link>
                <Nav.Link as={Link} to="/update">Update Product</Nav.Link>
                <Nav.Link as={Link} to="/search">Search Product</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
          {user && (
            <Nav>
              <NavDropdown title={user.name || "User"} id="navbarScrollingDropdown">
                <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
