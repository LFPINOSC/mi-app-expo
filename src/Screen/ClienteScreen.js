import { View,Text, Button, FlatList } from "react-native";

export default function ClienteScreen() {
    const { clientes, eliminarClientes } = useClienteServicio();
    return (
        <View>
            { clientes.length === 0 ? (
                <Text>No hay clientes</Text>
            ) : (
               <FlatList
                  data={clientes}
                    keyExtractor={(cliente) => cliente.id}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.nombre}</Text>
                            <Text>{item.email}</Text>
                            <Text>{item.telefone}</Text>
                            <Button title="Eliminar" onPress={() => eliminarClientes(item.id)} />
                        </View>
                    )}
                />
            )}
        </View>
    );
}