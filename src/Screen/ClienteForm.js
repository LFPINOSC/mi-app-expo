export default function ClienteForm() {
    const { agregarCliente } = useClienteServicio();
    const handleSubmit = (e) => {
        e.preventDefault();
        const nombre = e.target.nombre.value;
        const email = e.target.email.value;
        const telefone = e.target.telefone.value;
        agregarCliente(nombre, email, telefone);
        e.target.reset();
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="nombre" placeholder="Nombre" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="telefone" placeholder="Telefone" required />
            <button type="submit">Agregar Cliente</button>
        </form>
    );
}