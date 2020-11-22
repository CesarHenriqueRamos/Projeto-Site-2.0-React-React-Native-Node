import React, { useState } from 'react';
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
     } from 'reactstrap';
     const Menu = () => {
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);
      return (
        <Navbar color="dark" dark expand="md" className="fixed-top menu">
            <Container>
            <NavbarBrand href="/">Site</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="/#inicio">Inicio</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/#portifolio">Portifolio</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/#servico">Serviços</NavLink>
                </NavItem>
                </Nav>
            </Collapse>
            </Container>
        </Navbar>
        );
     }
     export default Menu;