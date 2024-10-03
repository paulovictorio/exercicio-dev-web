import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Switch, Alert } from 'react-native';

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';


class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        name: '',
        input: '',
        sexo: 0,
        escolhaSexos: [
            {key: 1, nome: 'Masculino', valor: '0'},
            {key: 2, nome: 'Feminino', valor: '0'}
        ],
        valor: 0,
        status: false 
      };
  
      this.entrar = this.entrar.bind(this);
    }
  
    entrar(){
      if(this.state.input === ''){
        alert('Digite seu nome');
        return;
      } else {
  
      this.setState({nome: 'Bem Vindo: ' + this.state.input});
    
    const sexoSelecionado = this.state.escolhaSexos[this.state.sexo].nome;
    const estadoCivil = this.state.status ? "Solteiro" : "Casado";
    const informacoes = 
    `
        Nome: ${this.state.input}
        Sexo: ${sexoSelecionado}
        Limite: ${this.state.valor.toFixed(2)} R$
        Estado Civil: ${estadoCivil}
    `;

    console.log(informacoes)
    Alert.alert("Conta Criada", `${informacoes}`, [{ text: "OK" }]);
      }
}
  
    render() {
        let sexos = this.state.escolhaSexos.map( (v, k) => {
            return <Picker.Item key={k} value={k} label={v.nome} />
        })

        return(
        
        
          <View style={styles.container}>
  
            <TextInput 
            style={styles.input}
            placeholder="Digite seu nome"
            underlineColorAndroid="transparent"
            onChangeText={ (texto) => this.setState({input: texto}) }
            />

          
            <Text style={styles.logo}>Escolha seu Sexo</Text>
            <Picker
            selectedValue={this.state.sexo}
            onValueChange={ (itemValue, itemIndex) => this.setState({sexo: itemIndex}) }
            >
            {sexos}
            </Picker>

            <Text style={styles.logo}>Escolha seu Limite</Text>
            <Slider 
             minimumValue={0}
             maximumValue={1000}
             onValueChange={ (valorSelecionado)=> this.setState({valor: valorSelecionado}) }
             value={this.state.valor}
             minimumTrackTintColor="#00FF00"
             maximumTrackTintColor="#FF0000"
            />

            <Text style={{textAlign: 'center', fontSize: 30}}>
                {this.state.valor.toFixed(1)} R$
            </Text>

            <Switch
              value={this.state.status}
              onValueChange={ (valueSwitch)=> 
                this.setState({ status: valueSwitch })
              }
              thumbColor="#FF0000"
            />

            <Text style={{textAlign: 'center', fontSize: 30}}>
                {(this.state.status) ? "Solteiro" : "Casado"}
            </Text>
  
            <Button title="Criar Conta" onPress={this.entrar} />
  
  
          </View>
        );    
    }
  }
  const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    input:{
      height: 45,
      borderWidth: 1,
      borderColor: '#222',
      margin: 10,
      fontSize: 20,
      padding: 10, 
    },
    logo:{
        textAlign: 'center',
        fontSize: 28
    }
  });
  export default App;