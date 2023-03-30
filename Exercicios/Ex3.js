import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function App() {
    const [distancia, setDistancia] = useState('');
    const [precoAlcool, setPrecoAlcool] = useState('');
    const [precoGasolina, setPrecoGasolina] = useState('');
    const [valorAlcool, setValorAlcool] = useState('');
    const [valorGasolina, setValorGasolina] = useState('');

    const calcularValor = () => {
        const distanciaFloat = parseFloat(distancia);
        const precoAlcoolFloat = parseFloat(precoAlcool);
        const precoGasolinaFloat = parseFloat(precoGasolina);

        const consumoAlcool = 9; // km/litro
        const consumoGasolina = 11; // km/litro

        const litrosAlcool = distanciaFloat / consumoAlcool;
        const litrosGasolina = distanciaFloat / consumoGasolina;

        const valorTotalAlcool = litrosAlcool * precoAlcoolFloat;
        const valorTotalGasolina = litrosGasolina * precoGasolinaFloat;

        setValorAlcool(valorTotalAlcool.toFixed(2));
        setValorGasolina(valorTotalGasolina.toFixed(2));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Distância a ser percorrida (km)</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={distancia}
                onChangeText={setDistancia}
            />

            <Text style={styles.label}>Preço do litro de álcool (R$)</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={precoAlcool}
                onChangeText={setPrecoAlcool}
            />

            <Text style={styles.label}>Preço do litro da gasolina (R$)</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={precoGasolina}
                onChangeText={setPrecoGasolina}
            />

            <TouchableOpacity style={styles.button} onPress={calcularValor}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>

            <Text style={styles.resultado}>
                Valor gasto com álcool: R$ {valorAlcool}
            </Text>
            <Text style={styles.resultado}>
                Valor gasto com gasolina: R$ {valorGasolina}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    label: {
        fontSize: 18,
        marginTop: 10,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#0080ff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignSelf: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    resultado: {
        fontSize: 18,
        marginTop: 10,
    },
});