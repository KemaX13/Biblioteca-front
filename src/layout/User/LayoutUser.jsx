import React from 'react';
import { Outlet } from 'react-router-dom';
import "./LayoutUser.css";

function LayoutUser() {
  return (
    <div className="LayoutUser">
      <div className="headerUser">
        <div className="logo">
          <img src="/src/assets/logo.png" alt="biblioteca-llucmajor" className="logoImg"/>
        </div>
        <div className="menu-mobile">
          <img src="/src/assets/mobile-menu.png" alt="Menú" className="icon-mobile" />
          <img src="/src/assets/user.png" alt="Usuario" className="icon-mobile" />
          <img src="/src/assets/fav.png" alt="Favoritos" className="icon-mobile" />
          <img src="/src/assets/search.png" alt="Buscador" className="icon-mobile" />
        </div>
        <div className="menu-desktop">
          <nav className="menu-desktop">
            <ul className="menu-categories">
              <li><a href="#categorias">Categorías</a></li>
              <li><a href="#actividades">Actividades</a></li>
              <li><a href="#tu-biblioteca">Tu biblioteca</a></li>
            </ul>
            <div className="icons-desktop">
              <img src="/src/assets/user.png" alt="Usuario" className="icon-desktop" />
              <img src="/src/assets/fav.png" alt="Favoritos" className="icon-desktop" />
              <img src="/src/assets/search.png" alt="Buscador" className="icon-desktop" />
            </div>
          </nav>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default LayoutUser;
