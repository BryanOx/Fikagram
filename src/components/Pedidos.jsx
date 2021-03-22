import React, {useState} from 'react';
import uniqid from 'uniqid'

const Pedidos = () => {

    const [nombre, setNombre] = useState('')
    const [usuario, setUsuario] = useState('')
    const [carrito, setCarrito] = useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId] = useState('')

    const [edicion, setEdicion] = useState(false)
    const [error, setError] = useState(null)

    const [listaPedidos, setListaPedidos] = useState([])

    const addPedido = (e) => {
        e.preventDefault()
        if(!nombre.trim() || !usuario.trim() || !carrito.trim() || !fecha.trim()) {
            setError('¡Hay campos vacíos!')
            return
        }
        const pedido = {
            id : uniqid(),
            nombre : nombre,
            usuario : usuario,
            carrito : carrito,
            fecha : fecha
        }
        setListaPedidos([...listaPedidos, pedido]);
        resetInputs()
        setError(null)
    }

    const delPedido = (id) => {
        const nuevaArrray = listaPedidos.filter(item => item.id !== id)
        setListaPedidos(nuevaArrray)
    }

    const edit = (i) => {
        setEdicion(true)
        setNombre(i.nombre)
        setUsuario(i.usuario)
        setCarrito(i.carrito)
        setFecha(i.fecha)
        setId(i.id)
    }

    const editarPedido = (e) => {
        e.preventDefault()
        const nuevoArray = listaPedidos
        .map(i => i.id === id ? {id:id,
            nombre:nombre,
            usuario:i.usuario,
            carrito:carrito,
            fecha:fecha} : i)
        setListaPedidos(nuevoArray)
        setEdicion(false)
        resetInputs()
    }

    const resetInputs = () => {
        setNombre('')
        setUsuario('')
        setCarrito('')
        setFecha('')
    }

    return(
        <div className="container mt-5">
            <h2>Listado de pedidos:</h2>
            <div className="row">
                <div className="col">
                    <h2>Listado de nombres</h2>
                    <ul className="list-group">
                        {
                            listaPedidos.map(
                                i => 
                                <li key={i.id} className="list-group-item">
                                    {i.nombre} - {i.carrito} - fecha lim: {i.fecha}
                                    <button onClick={() => {delPedido(i.id)}} className="btn btn-outline-danger float-right">X</button>
                                    <button onClick={() => {edit(i)}} className="btn btn-outline-warning float-bottom float-right">Edit</button>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h2>Formulario</h2>
                    <form onSubmit={edicion ? editarPedido : addPedido} className="form-group">
                        <label>Nombre</label>
                        <input 
                        onChange={(e)=>{setNombre(e.target.value)}}
                        className="form-control mb-3" 
                        type="text" 
                        placeholder="Ej: Victoria"
                        value={nombre}
                        />
                        <label>Usuario de Instagram</label>
                        <input 
                        onChange={(e)=>{setUsuario(e.target.value)}}
                        className="form-control mb-3" 
                        type="text" 
                        placeholder="Ej: @fikauy"
                        value={usuario}
                        />
                        <label>Encargar</label>
                        <input 
                        onChange={(e)=>{setCarrito(e.target.value)}}
                        className="form-control mb-3" 
                        type="text" 
                        placeholder="Ej: Alfaoreo box 6"
                        value={carrito}
                        />
                        <label>Fecha entrega</label>
                        <input 
                        onChange={(e)=>{setFecha(e.target.value)}}
                        className="form-control mb-3" 
                        type="text" 
                        placeholder="Ej: {:FECHA:}"
                        value={fecha}
                        />
                        <input 
                        className="form-control btn btn-success" 
                        type="submit" 
                        value={edicion ? 'Editar pedido' : 'Registrar pedido'}
                        />
                    </form>
                    {
                        error != null ? (
                            <div className="alert alert-danger">{error}</div>
                        ):(
                            <div></div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Pedidos;