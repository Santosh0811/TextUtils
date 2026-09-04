import React from 'react';
import PropTypes from 'prop-types';
import { LuSparkles } from "react-icons/lu";

const Navbar = ({ title = "TextUtils App", subTitle }) => {
    return (
        <nav className="app-navbar">
            <div className="navbar-content">
                <div className="brand-wrapper">

                    <div className="brand-icon">
                        <LuSparkles />
                    </div>

                    <div className="brand-text">
                        <span className="navbar-brand">
                            {title}
                        </span>

                        <span className="navbar-subtitle">
                            {subTitle}
                        </span>
                    </div>

                </div>
            </div>
        </nav>

    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
};

export default Navbar;