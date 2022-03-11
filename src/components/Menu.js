import React from 'react';

function Menu() {
  return (
    <div className="menu-container">
      <ul className="left-side-menu">
        <ul>
          <li>
            <img
              src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/logo.png"
              alt="Sabka Bazaar Logo"
              className="logo"
            />
          </li>
        </ul>
        <ul className="left-side-menu-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
        </ul>
      </ul>

      <ul className="right-side-menu">
        <ul className="right-side-menu-links">
          <li>
            <a href="/signin">Sign In</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
        </ul>
        <ul>
          <li className="right-side-menu-cart-info">
            <img
              src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/cart.svg"
              alt="cart icon"
              className="cart-icon"
            />{' '}
            0 items
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Menu;
