import React, { useState, useRef, useEffect } from "react";
import { Button } from "react-bootstrap";
import logo from "../images/logo.png";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

const GeneralNavbar = ({ proprole }) => {
    const [showBasic, setShowBasic] = useState(false);

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // You can store the dark mode preference in local storage or a state management system like Redux
    };

    const navigate = useNavigate();

    return (
        <MDBNavbar expand="lg" dark>
            <MDBContainer fluid>
                <MDBContainer onClick={() => navigate(`/`)} fluid style={{display: "flex", width: "100%", alignItems: "center", justifyContent: "center"}}>
                    <img style={{height: "50px", marginLeft: "250px"}} src={logo} alt="/"/>
                </MDBContainer>
            </MDBContainer>

            <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                        <MDBNavbarItem style={{margin: "0px 5px"}}>
                            <MDBNavbarLink
                                onClick={() => navigate(`/auth/login`)}
                                style={{
                                    width: "100%",
                                    backgroundColor: "#28a745",
                                    borderColor: "#28a745",
                                    marginLeft: "30%",
                                    padding: "7px 35px",
                                    borderRadius: "15px",
                                    boxShadow: "0px 7px #1a5928",
                                    color: "#fff",
                                    cursor: "pointer",
                                    transition: "0.6s ease"
                                }}
                                className="logHover"
                                >
                                Login
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem style={{margin: "0px 30px"}}>
                            <MDBNavbarLink
                                onClick={() => navigate(`/auth/register`)}
                                style={{
                                    width: "100%",
                                    backgroundColor: "#4285F4",
                                    borderColor: "#4285F4",
                                    marginLeft: "25%",
                                    padding: "7px 25px",
                                    borderRadius: "15px",
                                    boxShadow: "0px 7px #1a5928",
                                    color: "#fff",
                                    cursor: "pointer",
                                    transition: "0.6s ease"
                                }}
                                className="regHover"
                                >
                                Register
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
        </MDBNavbar>
    );
};
export default GeneralNavbar;
