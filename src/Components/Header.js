import React from 'react'
import logo from '../assets/jpeg/25401754.png';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header class="header">
    <div class="header__content">
      <Link to="/">
      <div class="header__logo-container">
        <div class="header__logo-img-cont">
          <img
            src={logo}
            alt="Cyrille"
            className="header__logo-img"
          />
        </div>
        <span class="header__logo-sub">Cyrille Otieno</span>
      </div>
      </Link>
      <div class="header__main">
        <ul class="header__links">
          <li class="header__link-wrapper">
            <a href="./index.html" class="header__link"> Home </a>
          </li>
          <li class="header__link-wrapper">
            <a href="./index.html#about" class="header__link">About </a>
          </li>
          <li class="header__link-wrapper">
            <a href="./index.html#projects" class="header__link">
              Projects
            </a>
          </li>
          <li class="header__link-wrapper">
            <a href="./index.html#contact" class="header__link"> Contact </a>
          </li>
        </ul>
        <div class="header__main-ham-menu-cont">
          <img
            src="./assets/svg/ham-menu.svg"
            alt="hamburger menu"
            class="header__main-ham-menu"
          />
          <img
            src="./assets/svg/ham-menu-close.svg"
            alt="hamburger menu close"
            class="header__main-ham-menu-close d-none"
          />
        </div>
      </div>
    </div>
    <div class="header__sm-menu">
      <div class="header__sm-menu-content">
        <ul class="header__sm-menu-links">
          <li class="header__sm-menu-link">
            <a href="./index.html"> Home </a>
          </li>

          <li class="header__sm-menu-link">
            <a href="./index.html#about"> About </a>
          </li>

          <li class="header__sm-menu-link">
            <a href="./index.html#projects"> Projects </a>
          </li>

          <li class="header__sm-menu-link">
            <a href="./index.html#contact"> Contact </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  );
};

export default Header;
