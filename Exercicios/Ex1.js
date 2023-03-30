import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

    const [homem, sethomem] = useState(0);
    const [mulher, setmulher] = useState(0);

    const [resultado, setResultado] = useState();

    const cadastro = () => {
        const carne = homem * 350 + mulher * 280;
        const cerveja = (homem * 2000) / 1000 + (mulher * 1500) / 1000;
        const resultCeva = cerveja
        const resultCarne = carne / 1000
        setResultado(`${resultCarne}kg`)
        alert(`${resultCeva}Litros`)

    }

    return (
        <View style={styles.container}>

            <TextInput placeholder='Digite a quantidade de Homens' style={styles.TextInput} onChangeText={text => sethomem(text)} />
            <TextInput placeholder='Digite a quantidade de mulheres' style={styles.TextInput} onChangeText={text => setmulher(text)} />


            <TouchableOpacity style={styles.btnCadastro} onPress={() => cadastro()}>
                <Text style={{ color: 'with', textAlign: 'center' }} >Calcular!</Text>
            </TouchableOpacity>
            <Text>
                {resultado}
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    TextInput: {
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingLeft: 10,
        marginTop: 20,
    },
    btnCadastro: {
        width: '100%',
        height: 40,
        backgroundColor: '#6e6cf5',
        borderRadius: 20,
        justifyContent: 'center',
        marginTop: 40
    }
});

