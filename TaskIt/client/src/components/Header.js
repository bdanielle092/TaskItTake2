import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import {
    Navbar,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import { UserProfileContext } from "../providers/UserProfileProvider";
import logo from "../images/logo2.png";
import "./Header.css"



const Header = () => {
    const { logout } = useContext(UserProfileContext);
    const user = JSON.parse(localStorage.getItem("userProfile"));
    const history = useHistory();





    const logoutAndReturn = () => {
        return logout().then(() => {
            toast.dark("You are now logged out");
            history.push("/login");
        });
    };

    const goToBoardForm = () => {
        history.push("/BoardForm");
    }

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <img
                    src={logo}
                    alt="logo"
                    width="30"
                    height="30"
                    className="mr-1" />



                <Nav className="mr-auto logout" navbar>
                    {user ? (
                        <>


                            <NavItem >
                                <Button color="warning" onClick={goToBoardForm} >New Board</Button>{' '}
                            </NavItem>

                            <NavItem className="logoutButton">
                                <Button color="warning" onClick={logoutAndReturn}>Logout</Button>{' '}
                            </NavItem>
                        </>
                    ) : null}
                </Nav>

            </Navbar>
        </div>
    );
};

export default Header;