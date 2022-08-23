
import Search from './Search';
import CartWidget from './CartWidget';

function NavBar() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">CURQUETAS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Galeria</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Arma Tu Pedido</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Nosotros</a>
              </li>
            <i class="bi bi-cart"></i>
            </ul>
            <Search Buscar ="Productos"/>
            <CartWidget/>
          </div>
        </div>
      </nav>
      </>
    );
  }
  
  export default NavBar;
  

  

  