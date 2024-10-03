import React, { Component } from 'react';
import { View, StylesSheet, Text} from 'react-native';
import { Switch } from 'react-native/Libraries/Components/Switch/Switch';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            valor: 0
        };
    }

  render(){
    return (
        <View style={styles.container}>
            <Switch
              value={this.state.valor}
              onValueChange={ (valueSwitch)=> 
                this.setState({ status: valueSwitch })
              }
              thumbColor="#FF0000"
            />

        <Text style={{textAlign: 'center', fontSize: 30}}>
            {(this.state.status) ? "Ativo" : "Inativo"}
        </Text>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:50
    },
});