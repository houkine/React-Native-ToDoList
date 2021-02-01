import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert,SectionList } from 'react-native';

import PropTypes from 'prop-types';

const TodoTextArea = (props) => {
    const {Todolist,Donelist} = props;
    const onDelete = (index) => {
        let newTodolist=[...Todolist];
        if(newTodolist.length == 0){
            Alert.alert('you have nothing left to do!');
        }else{
            newTodolist.splice(index,1);
            props.setTodolist(newTodolist);
        }
    }
    const onDone = (index) => {
        let newTodolist=[...Todolist];
        let newDonelist=[...Donelist];
        if(newTodolist.length == 0){
            Alert.alert('you have nothing left to do!');
        }else{
            newDonelist.push(newTodolist.splice(index,1));
            props.setTodolist(newTodolist);
            props.setDonelist(newDonelist);
        }
    }
    return(
        <View>
            <View>
                <Text style={styles.titleText}>
                    Tasks:
                </Text>
            </View>
            <View>
                {Todolist.map(
                    (item,index) => <Item item={item} index={index} key={index} onDelete={onDelete} onDone={onDone}/>
                )} 
            </View>
        </View>
    );

}
TodoTextArea.propTypes = {
    Todolist: PropTypes.array.isRequired,
    setTodolist: PropTypes.func.isRequired,
    Donelist: PropTypes.array.isRequired,
    setDonelist: PropTypes.func.isRequired,
}

const Item = (props) => {
    let { item,index } = props;
    return(
        <View style={styles.item}>
            <View style={styles.text}>
                <Text style={styles.baseText}>
                    {(index+1)+':\t'+item}
                </Text>
            </View>
            <View style={styles.button}>
                <View style={{marginHorizontal : 5,}}>
                    <Button 
                        title="done"
                        color="#909090"
                        onPress={() => props.onDone(index)}
                    />
                </View>
                <View style={{marginHorizontal : 5,}}>
                    <Button
                        title="delete"
                        color="#909090"
                        onPress={() => props.onDelete(index)}
                    />
                </View>
            </View>
        </View>
    );
}
  

const styles = StyleSheet.create({
    item:{
        marginHorizontal : '5%',
        marginVertical :4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderBottomWidth: 1,
        backgroundColor: 'white',
    },
    baseText: {
        fontSize: 15,
        // textAlign: 'center',
        textAlignVertical: 'center',
    },
    titleText:{
        fontSize: 20,
        fontWeight: "bold",
        // textAlign: 'center',
        textAlignVertical: 'center',
        color:'white',
    },
    text:{
        width:'60%',
        textAlignVertical: 'center',
    },
    button:{
        paddingVertical : 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
export default TodoTextArea;