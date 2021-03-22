import React, {Fragment} from 'react';

const MenuDesp = () => {
    return(
        <Fragment>
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-light p-4">
                    <h5 className="bg-light p-4">Collapsed content</h5>
                    <span className="text-muted">Toggleable via the navbar brand.</span>
                </div>
            </div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
            </nav>
        </Fragment>
    )
}

export default MenuDesp;