import React from 'react';

export const Navbar = () => {
    return(
    <div className="navbar">
        <div className="navbar-brand">
            <h1 className="heading">FlipMarket</h1>
            <form className='search-bar'>
                <input type="text" placeholder="Search.."/>
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>
        <div className="navbar-links">
            <span class="dropdown">
                <button class="dropbtn login">Login</button>
                <div class="dropdown-content">
                    <a href="/"><i class="fa fa-user" aria-hidden="true"></i>My Account</a>
                    <a href="/">Orders</a>
                    <a href="/">Redeem</a>
                </div>
            </span> 
            <span className='cart-button'><a href='/'><i class="fa fa-shopping-cart" aria-hidden="true"></i>Cart</a></span>

        </div>
    </div>);
}


export const CategoryNav = () => {
    return (<div className="category-bar">
        <span className="nav-category">Electronics<i class="fa fa-angle-down" aria-hidden="true"></i></span>
        <span className="nav-category">Electronics<i class="fa fa-angle-down" aria-hidden="true"></i></span>
        <span className="nav-category">Electronics<i class="fa fa-angle-down" aria-hidden="true"></i></span>
        <span className="nav-category">Electronics<i class="fa fa-angle-down" aria-hidden="true"></i></span>
        <span className="nav-category">Electronics<i class="fa fa-angle-down" aria-hidden="true"></i></span>
        <span className="nav-category">Electronics<i class="fa fa-angle-down" aria-hidden="true"></i></span>
        <span className="nav-category">Electronics<i class="fa fa-angle-down" aria-hidden="true"></i></span>
    </div>);
}


export const Dropdown = () => {
    return(
    <span class="dropdown">
        <button class="dropbtn">Login</button>
    </span>);
}