import React from 'react'

const Header = (props) => {
  return (
    <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary header-shadow">
            <a className="navbar-brand pointer" onClick={props.changeSidebarHandler}>
                <i className="fa fa-bars fa-lg text-white" aria-hidden="true"></i>
            </a>
        </nav>
    </header>
  )
}
export default Header;