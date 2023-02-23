import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {

  // const handleClick=(e)=>{
  //   console.log(e.target.value)
  // }

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
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutUs}</Link>
        </li>
       
      
      </ul>

        <button type="button" value={"red"} onClick={props.colorMode} className="btn btn-danger">Red</button>
        {/* <button type="button" value={"yellow"} onClick={props.colorMode} className="btn btn-warning">Yellow</button>
        <button type="button" value={"green"} onClick={props.colorMode} className="btn btn-success">Green</button> */}

      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enebled Dark Mode</label>
      </div>

     
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>   
  )
}


Navbar.prototype={
  title:PropTypes.string.isRequired,
  aboutUs: PropTypes.string
}

Navbar.defaultProps={
  title:'First',
  aboutUs: 'Second'

}