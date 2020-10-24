import React from "react";
import s from "./header.module.scss";
import { MdExitToApp } from "react-icons/md";

function Header() {
  return (
    <div className={s.header}>
      <span>Тестовое задание</span>
      <a href="#" className={s.header__icon}><MdExitToApp /></a>
    </div>
  );
}
export default Header;
