import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [ sidebar, toggleSidebar ] = useState('none');
    const toogleHandler = () => sidebar === 'none' ? toggleSidebar('block') : toggleSidebar('none');
    return(
    <div className="navbar">
        <i className="fa fa-bars nav-toggle" aria-hidden="true" onClick={toogleHandler}></i>
        <div className="navbar-brand">
        <Link to='/'><h1 className="heading">FlipMarket</h1></Link>
            <form className='search-bar'>
                <input type="text" placeholder="Search.."/>
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
        <div className="nav-sidebar" style={{display : sidebar}}>
            <i className="fa fa-times" aria-hidden="true" onClick={toogleHandler}></i>
        </div>
        <div className="navbar-links">
            <button>Login</button>
            <Link to='/cart'><span className='cart-button'><i className="fa fa-shopping-cart" aria-hidden="true"></i>Cart</span></Link>

        </div>
    </div>);
}


export const CategoryNav = () => {
    return (<div className="category-bar">
        <span className="nav-category">Electronics<i className="fa fa-angle-down" aria-hidden="true"></i></span>
        <span className="nav-category">Electronics<i className="fa fa-angle-down" aria-hidden="true"></i></span>
        <span className="nav-category">Electronics<i className="fa fa-angle-down" aria-hidden="true"></i></span>
        <span className="nav-category">Electronics<i className="fa fa-angle-down" aria-hidden="true"></i></span>
        <span className="nav-category">Electronics<i className="fa fa-angle-down" aria-hidden="true"></i></span>
        <span className="nav-category">Electronics<i className="fa fa-angle-down" aria-hidden="true"></i></span>
        <span className="nav-category">Electronics<i className="fa fa-angle-down" aria-hidden="true"></i></span>
    </div>);
}


export const Dropdown = () => {
    return(
    <span className="dropdown">
        <button className="dropbtn">Login</button>
    </span>);
}