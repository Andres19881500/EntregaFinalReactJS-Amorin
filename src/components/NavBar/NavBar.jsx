import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./styles/NavBar.scss";


const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-gray navbar-custom">
        <div class="container-fluid">
          <button class="navbar-toggler navbar-toggler-border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon-blanco"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link"  id="textos__navbar" aria-current="page" href="index.html">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="textos__navbar" href="">CAPSULAS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="textos__navbar" href="">EQUIPOS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="textos__navbar" href="">ACCESORIOS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="textos__navbar" href="">CONTACTO</a>
              </li>
            </ul>
          </div>
        </div>
        <CartWidget />
      </nav>
    )
}

export default NavBar;