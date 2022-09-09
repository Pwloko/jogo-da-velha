import { StyleSheet, Text, View } from 'react-native';

export default function Time(props) {
    return (
        <View style={style.container}>
            <Text>{props.time}</Text>
        </View>
    );
}     
    const style = StyleSheet.create({
        container: { 
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center', 
                padding: '20px' ,
                width: '149px',
                height: '55px',
                borderRadius: '40px'
              },
            
    });
