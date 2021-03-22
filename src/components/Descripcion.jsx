import React, {Fragment} from 'react';

const Descripcion = () => {
    const hermanas = ['Victoria', 'Jimena', 'Paula'];
    return(
        <Fragment>
            <h2 className='Texto'>Alfajores gourmet</h2>
            <ul>
                {
                hermanas.map( (x, index) =>
                    <p key={index} className='Texto'>{x}</p>
                    )
                }
            </ul>
        </Fragment>
    );
}

export default Descripcion;