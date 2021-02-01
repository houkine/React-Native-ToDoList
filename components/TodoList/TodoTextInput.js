import React from 'react';
import { TextInput,Button,StyleSheet,Text , View,ScrollView} from 'react-native';

import PropTypes from 'prop-types';

const TodoTextInput = (props) => {
  let {newItem} = props;
  const onChangeText  = (value) => {
    props.setnewItem(value)
  }

  return (
    <TextInput
      style={styles.TextInput}
      onChangeText={text => onChangeText(text)}
      value={newItem}
      placeholder=''
    />
  );
}
TodoTextInput.propTypes = {
  newItem: PropTypes.string.isRequired,
  setnewItem: PropTypes.func.isRequired,
}
const styles = StyleSheet.create({
  TextInput:{
    width:'70%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 0,
    backgroundColor: 'white',
    marginRight:10,
  },
});
export default TodoTextInput;
