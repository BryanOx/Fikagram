import React, {Fragment, useState} from 'react';

const Contador = () => {

    const [numero, setNumero] = useState(0);
    
    const Aumentar = () => {
        setNumero(numero + 1)
    }
    const Disminuir = () => {
        setNumero(numero - 1)
    }

    return (
        <Fragment>
            <div className='Texto'>
                <h2>Cantidad del contador: {numero}</h2>
                <button className="btn btn-success" onClick={Aumentar}>Aumentar</button>
                <button className="btn btn-danger" onClick={Disminuir}>Disminuir</button>
            </div>
        </Fragment>
    )
}

export default Contador;