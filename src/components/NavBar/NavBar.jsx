import { Link } from 'react-router-dom';
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
                <Link class="nav-link"  id="textos__navbar" aria-current="page" to="/" >
                  <img width={100} src="https://media.istockphoto.com/id/1090037044/vector/coffee-capsule-espresso-machine-flavor-minimal-color-flat-line-icon.jpg?b=1&s=170667a&w=0&k=20&c=Q4FADjpFW8fSkqIpxZSbag2iwUzeOtHFQQnOqUsu3ls=" alt="logo" />
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" id="textos__navbar" to="/category/1">CAPSULAS</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" id="textos__navbar" to="/category/2">EQUIPOS</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" id="textos__navbar" to="/category/3">ACCESORIOS</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" id="textos__navbar" to="/contacto">CONTACTO</Link>
              </li>
            </ul>
          </div>
        </div>
        <CartWidget />
      </nav>
    )
}

export default NavBar;