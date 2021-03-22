import React from 'react';

const Cards = (props) => {

    const {nombre, texto} = props

    return(
        <div className="card" style={{width: '25rem'}}>
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{texto}</p>
            </div>
        </div>
    )
}

export default Cards;