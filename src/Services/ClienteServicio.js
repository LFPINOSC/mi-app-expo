import { createContext, useContext, useState } from "react";
import Cliente from "../Entity/Cliente";

const ClienteServicio= createContext();
export function ClienteServicios({children}) {

    const [clientes, setClientes] = useState([]);
    const agregarCliente = (nombre, email, telefone) => {
        const nuevoCliente = Cliente(nombre, email, telefone);
        setClientes([...clientes, nuevoCliente]);
    };
    const eliminarClientes=(id)=>{
        setClientes((prev)=> prev.filter((cliente)=>cliente.id !== id));
    };
    const actualizarClientes=(id, clienteActualizado)=>{
        setClientes((prev)=> prev.map((cliente)=> 
            cliente.id === id ? clienteActualizado : cliente));
    };
    return(
        <ClienteServicio value={{clientes, agregarCliente, eliminarClientes, actualizarClientes}}>
            {children}
        </ClienteServicio>
    );
}

export function useClienteServicio(){
    return useContext(ClienteServicio);
}