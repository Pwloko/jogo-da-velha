import { StyleSheet, View } from 'react-native';
import Jogador from './Jogador';
export default function Placar(props) {
    
    const {jogadorX, jogadorO} = props.jogadores;

    return (
        <View style={styles.container}>
            <Jogador jogador={jogadorX} />
            <Jogador jogador={jogadorO} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
        borderStyle: 'solid',
        borderColor: '#FFFFFF',
        borderRadius: 20,
        margin: 39,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        flexDirection: 'row', 
    }
});
