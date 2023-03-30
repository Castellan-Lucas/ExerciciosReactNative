import * as React from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {

    const [homem, setHomem] = React.useState('')
    const [mulher, setMulher] = React.useState('')
    const [cerveja, setCerveja] = React.useState('');
    const [carne, setCarne] = React.useState('');
    const [pressed, setPressed] = React.useState(false);


    function calculaChurrasco(homem, mulher) {

        if (homem == '' || mulher == '') {
            alert('Preencha todos os campos')
        }

        var carne = 350 * homem + 280 * mulher
        var cerveja = 2 * homem + 1.5 * mulher
        setCarne(carne)
        setCerveja(cerveja)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                Digite a quantidade de homens e de mulheres que irão no churrasco para saber a quantidade total de carne e cerveja que será necessária.
            </Text>

            <TextInput onChangeText={(text) => { setHomem(text), setPressed(false) }} placeholder={'Insira a quantidade de Homens'} keyboardType="number" style={styles.input} />
            <TextInput onChangeText={(text) => { setMulher(text), setPressed(false) }} placeholder={'Insira a quantidade de Mulheres'} keyboardType="number" style={styles.input} />

            <TouchableOpacity onPress={() => { calculaChurrasco(homem, mulher); setPressed(true) }} style={styles.button}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
            {
                homem && mulher && pressed &&
                <Text style={styles.total}>Será necessário {cerveja} litros de cerveja e {carne} gramas de carne</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        flex: 'flex-start',
        marginHorizontal: 30,
        marginVertical: 20,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#1E90FF',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'center',
        borderRadius: 50,
        paddingVertical: 8,
        width: '40%',
        alignSelf: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#FFF',
    },
    total: {
        fontSize: 16,
        marginTop: 10
    }
});