import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';


class Pessoas extends Component{
    render(){
        return(
            <View style={styles.areaPessoa}>
            <Text>AWOOOOOOOGAAAAAAAAAAAAAAH</Text>
            <Text style={styles.textPessoa}>Nome: {this.props.data.nome}</Text>
            <Text style={styles.textPessoa}>Idade: {this.props.data.idade}</Text>
                <Text style={styles.textPessoa}>Email: {this.props.data.email}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    areaPessoa:{
        backgroundColor: '#222',
        height: 150,
        marginBottom: 25,
        padding: 15
    },
    textPessoa:{
        color: '#FFF'
    }
});

export default Pessoas;