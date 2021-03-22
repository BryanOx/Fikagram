import React, {useState} from 'react';

const Registro = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Registrar = (event) => {
        console.log('Pulsado')
        event.preventDefault()
        if(!nombre.trim()) {
            console.log('El nombre está vacío')
            return
        }
        if(!apellido.trim()) {
            console.log('El apellido está vacío')
            return
        }
        if(!telefono.trim()) {
            console.log('El telefono está vacío')
            return
        }
        if(!email.trim()) {
            console.log('El correo está vacío')
            return
        }
        if(!password.trim()) {
            console.log('La contraseña está vacía')
            return
        }
    };

    return (
        <div className="container">
            <form onSubmit={Registrar} action="" className="form-group mt-5 mb-5">
                
                <input 
                className="form-control mb-3" 
                type="text" 
                placeholder="Ej: Victoria"
                onChange={ (e) => {setNombre(e.target.value)}}
                />

                <input 
                className="form-control mb-3" 
                type="text" 
                placeholder="Ej: Silveira"
                onChange={ (e) => {setApellido(e.target.value)}}
                />

                <input 
                className="form-control mb-3" 
                type="text" 
                placeholder="Ej: 098765432 || +598 98 765 432"
                onChange={ (e) => {setTelefono(e.target.value)}}
                />

                <input 
                className="form-control mb-3" 
                type="email" 
                placeholder="Ej: reposteria@fika.com.uy"
                onChange={ (e) => {setEmail(e.target.value)}}
                />

                <input 
                className="form-control mb-3" 
                type="password" 
                placeholder="***"
                onChange={ (e) => {setPassword(e.target.value)}}
                />

                <input 
                className="form-control btn btn-success" 
                type="submit" 
                value="Registrarte"
                />

            </form>
        </div>
    )
}

export default Registro;