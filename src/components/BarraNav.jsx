import React, {Fragment} from 'react';
import { Link } from "react-router-dom";

const BarraNav = () => {

    return(
        <Fragment>
            <nav className="navbar navbar-light" style={{backgroundColor: "#e6d2d2"}}>
                <div className="container-fluid">
                    <div className="btn-group">
                        <button className="btn btn-outline-secondary">
                            <Link to="/">Inicio</Link>
                        </button>
                        <button className="btn btn-outline-secondary">
                            <Link to="/catálogo">Catálogo</Link>
                        </button>
                        <button className="btn btn-outline-secondary">
                            <Link to="/encargar">Encargar</Link>
                        </button>
                        <button className="btn btn-outline-secondary">
                            <Link to="/perfil">Perfil</Link>
                        </button>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default BarraNav;