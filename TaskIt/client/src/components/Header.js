import React, { useState, useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    DropdownToggle,
    ButtonDropdown,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap';
import { UserProfileContext } from "../providers/UserProfileProvider";
import logo from "../images/logo2.png";
// import "./Header.css"

const Header = () => {
    const { logout, isAdmin } = useContext(UserProfileContext);
    const user = JSON.parse(localStorage.getItem("userProfile"));
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    const logoutAndReturn = () => {
        return logout().then(() => {
            toast.dark("You are now logged out");
            history.push("/login");
        });
    };
    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <img
                    src={logo}
                    alt="logo"
                    width="30"
                    height="30"
                    className="mr-1" />

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {user ? (
                            <>
                                <ButtonDropdown isOpen={isOpen} toggle={toggle}>
                                    <DropdownToggle caret color="warning">
                                        Board
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>New Board</DropdownItem>
                                        <DropdownItem>Personal</DropdownItem>
                                        <DropdownItem>Work</DropdownItem>

                                    </DropdownMenu>
                                </ButtonDropdown>

                            </>
                        ) : null}
                    </Nav>
                    {user ? (
                        <NavItem>
                            <Button color="warning" onClick={logoutAndReturn}>Logout</Button>{' '}
                        </NavItem>
                    ) : null}
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;