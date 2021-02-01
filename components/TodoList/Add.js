import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import PropTypes from 'prop-types';

const Add = (props) => {
    let {newItem,Todolist} = props;

    const onPress = () => {
        let newTodolist=[...Todolist];
        newTodolist.push(newItem+'    added on:'+getCurrentTime());
        props.setTodolist(newTodolist)
        props.setnewItem('');
    }
    return (
        <View style={{
            margin: 5,
        }}>
            <Button
                title="add task"
                color="#909090"
                onPress={() => onPress()}
            />
        </View>
    );
}
Add.propTypes = {
    newItem: PropTypes.string.isRequired,
    setnewItem: PropTypes.func.isRequired,
    Todolist: PropTypes.array.isRequired,
    setTodolist: PropTypes.func.isRequired,
}
const getCurrentTime = () => {
    let date = new Date();
    return date.getHours().toString()+':'+
        date.getMinutes().toString()+'\t'+
        date.getDate().toString()+'/'+
        (date.getMonth()+1).toString()+'/'+
        date.getFullYear().toString();
}
export default Add;