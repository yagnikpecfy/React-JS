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
        <div className="d-flex">
          {/* <div className="bg-promary rounded mx-2" style={{heoght:'30px',width:'30px'}}></div> */}
          <button type="button" value={"red"} onClick={()=>props.toggleMode('danger')} className="btn btn-danger mx-1" style={{height:'30px',width:'30px'}}></button>
          <button type="button" value={"green"} onClick={()=>props.toggleMode('success')} className="btn btn-success mx-1" style={{height:'30px',width:'30px'}}></button>
          <button type="button" value={"yellow"} onClick={()=>{props.toggleMode('warning')}} className="btn btn-warning mx-1" style={{height:'30px',width:'30px'}}></button>
          <button type="button" value={"primary"} onClick={()=>{props.toggleMode('primary')}} className="btn btn-primary mx-1" style={{height:'30px',width:'30px'}}></button>

        </div>
        {/* <button type="button" value={"red"} onClick={props.colorMode} className="btn btn-danger">Red</button> */}
      
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
      </div>
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