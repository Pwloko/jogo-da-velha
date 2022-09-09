import { Image,StyleSheet, Text, View} from 'react-native';

export default function Jogador(props) {
    const {marcador, pontuacao} = props.jogador;

    return (
        <View style={styles.container}>
            <Image style={styles.imagem} source={marcador} />
            <Text style={styles.texto}>{pontuacao} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        width: '149px',
        height: '55px',
        borderRadius: '40px'
    },
    imagem: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }
});
