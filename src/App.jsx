import React, { useState } from "react";
import "./App.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import {Routes, Route} from 'react-router-dom'
import Home from "./Pages/home";
import DetailPost from "./Pages/Detail";
import CreatePost from "./Pages/create";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Login</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="post/:postId" element={<DetailPost/>}></Route>
        <Route path="post/create" element={<CreatePost/>}></Route>
      </Routes>
    </>
  );
}

export default App;
