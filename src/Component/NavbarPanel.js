import React from "react";
import myntra from "../Images/myntra.jpg"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavbarPanel = () => {
  const CartProduct=useSelector((state)=>state.cart);
  return (
    <div>
      <Navbar expand="lg" className="bg-light-gray">
        <Container fluid>
          <Navbar.Brand href="#" style={{fontSize:"22px"}}>
          <img
              src={myntra}
              alt="Logo"
              style={{ width: "46px",borderRadius:"50%" }}
            />
             &nbsp;&nbsp;Redux Toolkit</Navbar.Brand>
            <Nav>
              <Nav.Link style={{color:"black",fontSize:"22px",marginBottom:"8px"}} to="/" as={Link}>Products</Nav.Link>
            </Nav>
            <Navbar.Toggle />
          <Navbar.Collapse className=" justify-content-end">
            <Navbar.Text>
            <Nav.Link style={{color:"black",fontSize:"22px",marginBottom:"5px"}} to="/cart" as={Link}>My Bag {CartProduct.length}</Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarPanel;
