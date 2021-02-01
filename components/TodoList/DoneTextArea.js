

import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert,SectionList } from 'react-native';

import PropTypes from 'prop-types';

const DoneTextArea = (props) => {
    const Donelist = [...props.Donelist];
    const onDelete = (index) => {
        let newDonelist=[...Donelist];
        if(newDonelist.length == 0){
            Alert.alert('you have nothing left in done list!');
        }else{
            newDonelist.splice(index,1);
            props.setDonelist(newDonelist);
        }
    }
    return(
        <View>
            <View>
                <Text style={styles.titleText}>
                    {"\n"}
                    Complete:
                </Text>
            </View>
            <View>
                {Donelist.map(
                    (item,index) => <Item item={item} index={index} key={index} onDelete={onDelete}/>
                )} 
            </View>
        </View>
    );
}
DoneTextArea.propTypes = {
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
export default DoneTextArea;