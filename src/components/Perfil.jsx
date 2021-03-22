import React, {Fragment} from 'react';
import Cards from './Cards'

const Perfil = (props) => {
    const {nombre, apellido} = props
    const name = nombre + " " + apellido
    return (
        <Fragment>
            <Cards
            nombre={name}
            texto="Descripción.."
            />
        </Fragment>
    )
}

export default Perfil;