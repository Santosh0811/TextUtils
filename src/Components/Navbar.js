import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar({ title = "Set Title Here", mode, setMode, settextColor, showAlert, toggleMode, textColor, btnText }) {
    const handleColorRed = () => {
        document.body.style.backgroundColor = "#9d3b3b";
        setMode("dark");
        settextColor({ color: "white" });
        showAlert("success", "Background Color changed to Pink");
    };

    const handleColorGreen = () => {
        document.body.style.backgroundColor = "#355535";
        setMode("dark");
        settextColor({ color: "white" });
        showAlert("success", "Background Color changed to Light Green");
    };

    const handleColorBlue = () => {
        document.body.style.backgroundColor = "#3b3b68";
        setMode("dark");
        settextColor({ color: "white" });
        showAlert("success", "Background Color changed to Purple");
    };

    const handleColorGrey = () => {
        document.body.style.backgroundColor = "grey";
        setMode("dark");
        settextColor({ color: "white" });
        showAlert("success", "Background Color changed to Grey");
    };

    const handleColorLight = () => {
        document.body.style.backgroundColor = "white";
        setMode("light");
        settextColor({ color: "black" });
        showAlert("success", "Background Color changed to Light");
    };

    const handleColorDark = () => {
        document.body.style.backgroundColor = "black";
        setMode("dark");
        settextColor({ color: "white" });
        showAlert("success", "Background Color changed to Dark");
    };

    return (
        <nav className={`navbar-${mode} bg-${mode}`}>
            <div className="container-fluid d-flex justify-content-between align-items-center p-2">
                <div>
                    <Link className="navbar-brand" to="/home">{title}</Link>
                </div>

                <div style={{ display: "flex", gap: "15px", marginRight: "15px" }}>
                    <span className="border border-dark" onClick={handleColorRed} style={{ width: "25px", height: "25px", backgroundColor: "#9d3b3b", cursor: "pointer" }}></span>
                    <span className="border border-dark" onClick={handleColorGreen} style={{ width: "25px", height: "25px", backgroundColor: "#355535", cursor: "pointer" }}></span>
                    <span className="border border-dark" onClick={handleColorBlue} style={{ width: "25px", height: "25px", backgroundColor: "#3b3b68", cursor: "pointer" }}></span>
                    <span className="border border-dark" onClick={handleColorGrey} style={{ width: "25px", height: "25px", backgroundColor: "grey", cursor: "pointer" }}></span>
                    <span className="border border-dark" onClick={handleColorLight} style={{ width: "25px", height: "25px", backgroundColor: "white", cursor: "pointer" }}></span>
                    <span className="border border-dark" onClick={handleColorDark} style={{ width: "25px", height: "25px", backgroundColor: "black", cursor: "pointer" }}></span>
                </div>
            </div>

        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutus: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    setMode: PropTypes.func.isRequired,
    settextColor: PropTypes.func.isRequired,
    showAlert: PropTypes.func.isRequired,
    toggleMode: PropTypes.func.isRequired,
    textColor: PropTypes.object.isRequired,
    btnText: PropTypes.string.isRequired,
};
