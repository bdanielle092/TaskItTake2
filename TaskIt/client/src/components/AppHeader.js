// import React, { useState, useContext } from "react";
// import { Link, useHistory } from "react-router-dom";
// import { toast } from "react-toastify";
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     NavbarText,
// } from "reactstrap";
// import { UserProfileContext } from "../providers/UserProfileProvider";

// const AppHeader = () => {
//     const { logout, isAdmin } = useContext(UserProfileContext);
//     const user = JSON.parse(localStorage.getItem("userProfile"));
//     const history = useHistory();
//     const [isOpen, setIsOpen] = useState(false);

//     const toggle = () => setIsOpen(!isOpen);

//     const logoutAndReturn = () => {
//       return logout().then(() => {
//         toast.dark("You are now logged out");
//         history.push("/login");
//       });
//     };
//     return(

//     )
// }