import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import PropTypes from 'prop-types';

const AllDelete = (props) => {
    let {Todolist} = props;

    const onPress = () => {
        let newTodolist=[];
        if(Todolist.length == 0){
            Alert.alert('you have nothing left to do!');
        }else{
            props.setTodolist(newTodolist);
        }
    }
    return(
        <Button
            title="delete all"
            onPress={() => onPress()}
        />
    );

    
}

AllDelete.propTypes = {
    Todolist: PropTypes.array.isRequired,
    setTodolist: PropTypes.func.isRequired,
}

export default AllDelete;