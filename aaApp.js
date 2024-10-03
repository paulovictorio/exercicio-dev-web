import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';

import Pessoas from './src/Pessoas/Pessoas'

class App extends Component{
    constructor(props){
        super(props);
            this.state = {
                lista: [
                    {id: '1', nome:'Matheus', idade:50, email:'matheus@matheus.com'},
                    {id: '2', nome: 'Ana', idade: 28, email: 'ana@ana.com'},
                    {id: '3', nome: 'Carlos', idade: 35, email: 'carlos@carlos.com'},
                    {id: '4', nome: 'Julia', idade: 42, email: 'julia@julia.com'},
                    {id: '5', nome: 'Pedro', idade: 22, email: 'pedro@pedro.com'},
                    {id: '6', nome: 'Fernanda', idade: 30, email: 'fernanda@fernanda.com'},
                    {id: '7', nome: 'Rafael', idade: 47, email: 'rafael@rafael.com'},
                    {id: '8', nome: 'Sofia', idade: 25, email: 'sofia@sofia.com'},
                    {id: '9', nome: 'Miguel', idade: 39, email: 'miguel@miguel.com'}
                ]
            };
    }
    render(){
        return(
            <View style={styles.container}>

                <FlatList
                data={this.state.lista}
                keyExtractor={(item)=> item.id}
                renderItem={ ({item}) => <Pessoas data={item} /> }
                />

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
});
export default App;