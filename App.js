import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Placar from './componentes/Placar';
import Time from './componentes/Time';
import VezJogador from './componentes/VezJogador';
import Tabuleiro from './componentes/Tabuleiro';

const jogadorX = {marcador: require('./assets/x.png'),pontuacao: 0};
const jogadorO = {marcador: require('./assets/O.png'),pontuacao: 0};

const jogadores = {jogadorX, jogadorO};
export default function App() {
  return (
    <View style={styles.container}>
       <Placar jogadores={jogadores} />
       <Time time="00:06"/>
        <VezJogador vezjogador="Vez: Jogador x" />
        <Tabuleiro tabuleiro={[ 
          require('./assets/O.png'), require('./assets/x.png'), require('./assets/O.png'),
          require('./assets/x.png'), require('./assets/O.png'), require('./assets/x.png'),
          require('./assets/O.png'), require('./assets/x.png'), require('./assets/O.png')
        ]}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#afeeee',
      alignItems: 'center',
      opacity: 0.6
    }
 
});