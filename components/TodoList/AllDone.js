import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import PropTypes from 'prop-types';

const AllDone = (props) => {
    let {Todolist,Donelist} = props;
    

    const onPress = () => {
        if(Todolist.length == 0){
            Alert.alert('you have nothing left to do!');
        }else{
            // let newTodolist=[...Todolist];
            let newDonelist=[...Donelist];
            Todolist.forEach(item => {
                newDonelist.push(item)
            });
            props.setTodolist([]);
            props.setDonelist(newDonelist);
        }
    }
    return(
        <Button
            title="all done"
            onPress={() => onPress()}
        />
    );

    
}

AllDone.propTypes = {
    Todolist: PropTypes.array.isRequired,
    setTodolist: PropTypes.func.isRequired,
    Donelist: PropTypes.array.isRequired,
    setDonelist: PropTypes.func.isRequired,
}

export default AllDone;