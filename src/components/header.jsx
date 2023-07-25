import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from "../assets/amani-low-resolution-logo-color-on-transparent-background (1).png" 
import style from "../css/style.module.css";

export default function Header() {
  return (
    <header className={style.header}>
<div className={style.container}>
  <div className={style.logo}>
    <img src={logoImg} alt="logo" width="90px" />
  </div>
  <nav>
    <ul className={style.nav}>
      <li>
        <NavLink className={style.link} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className={style.link} to="/about">About</NavLink>
      </li>
    </ul>
  </nav>
</div>

    </header>
  )
}

