import React, {useState} from 'react';

const Temperatura = () => {

    const [temperatura, setTermperatura] = useState(19)
    const Subir = () => {
        setTermperatura(temperatura + 1)
    }
    const Bajar = () => {
        setTermperatura(temperatura - 1)
    }

    return (
        <div className='Texto container'>
            <h2>La temperatura es: {temperatura} °C</h2>
            <p>
                {
                    temperatura > 45 ? 'Estamos en el infierno!!':
                    temperatura > 28 ? 'Dios que caloor':
                    temperatura > 20 ? 'Hace calór':
                    temperatura > 15 ? 'Esta templado':
                    temperatura >= 5 ? 'Necesitas un jodido abrigo cabrón!':
                    temperatura >= -3 ? 'Se me congelan las puntas de los dedos':
                    '*TE HAS MUERTO CONGELADO*'
                }
            </p>
            <button className='btn btn-success' onClick={Subir}>Subir temp.</button>
            <button className='btn btn-danger' onClick={Bajar}>Bajar temp.</button>
        </div>
    )
}

export default Temperatura;