export default function HomeScreen() {
    return (
        <View>
            <Text>Bienvenido a la aplicación de gestión de clientes</Text>
            <Button title="Ver Clientes" onPress={() => navigation.navigate("ClienteScreen")} />
            <Button title="Agregar Cliente" onPress={() => navigation.navigate("ClienteForm")} />
        </View>
    );
}