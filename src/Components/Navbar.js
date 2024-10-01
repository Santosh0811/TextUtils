import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
    const handleColorRed = () => {
        document.body.style.backgroundColor = "#9d3b3b"
        props.setMode("dark")
        props.settextColor({color:"white"})
        props.showAlert("success", "Background Color change to Light Red")
    }
    const handleColorGreen = () => {
        document.body.style.backgroundColor = "#355535"
        props.setMode("dark")
        props.showAlert("success", "Background Color change to Light Green")
    }
    const handleColorBlue = () => {
        document.body.style.backgroundColor = "#3b3b68"
        props.setMode("dark")
        props.showAlert("success", "Background Color change to Light Blue")
    }
    const handleColorGrey = () => {
        document.body.style.backgroundColor = "grey"
        props.setMode("dark")
        props.showAlert("success", "Background Color change to Grey")
    }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/">{props.aboutus}</a>
            </li>
        </ul>
        {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
        <div style={{display:"flex", gap:"15px", marginRight:"15px"}}>
        <span class="border border-dark" onClick={handleColorRed} style={{width:"25px", height:"25px", backgroundColor:"#9d3b3b"}}></span>
        <span class="border border-dark" onClick={handleColorGreen} style={{width:"25px", height:"25px", backgroundColor:"#355535"}}></span>
        <span class="border border-dark" onClick={handleColorBlue} style={{width:"25px", height:"25px", backgroundColor:"#3b3b68"}}></span>
        <span class="border border-dark" onClick={handleColorGrey} style={{width:"25px", height:"25px", backgroundColor:"grey"}}></span>
        </div>


        <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
        <label className="form-check-label" style={props.textColor} htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
        </div>

        </div>
    </div>
    </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutus : PropTypes.string.isRequired

}

Navbar.defaultProps = {
    title : "Set Title Here",
    aboutus : "Set About Here"
}
