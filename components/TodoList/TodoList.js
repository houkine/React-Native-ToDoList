import React from 'react';
import { TextInput,Button,View ,Alert,StyleSheet,ScrollView} from 'react-native';
import Header from './Header';
import Add from './Add';
import TodoTextInput from './TodoTextInput';
import TodoTextArea from './TodoTextArea';
import DoneTextArea from './DoneTextArea';
import AllDelete from './AllDelete';
import AllDone from './AllDone';

const TodoList = () => {

  const [newItem, setnewItem] = React.useState('');
  const [Todolist, setTodolist] = React.useState([]);
  const [Donelist, setDonelist] = React.useState([]);



  // load initial example lists for testing
  React.useEffect(()=>{
    setTodolist([
      'todo1 0:0  1/1/2000',
      'todo2 0:0  1/1/2000',
    ]);
  },[]);

  return (
    <View>
      <Header/> 
      <ScrollView style={{height:'70%',}}>
        <TodoTextArea Todolist={Todolist} setTodolist={setTodolist} Donelist={Donelist} setDonelist={setDonelist}/> 
        {/* <View style={styles.deleteBar}>
          <AllDelete Todolist={Todolist} setTodolist={setTodolist}/>
          <AllDone Todolist={Todolist} setTodolist={setTodolist} Donelist={Donelist} setDonelist={setDonelist}/>
        </View> */}
        <DoneTextArea Donelist={Donelist} setDonelist={setDonelist}/> 
      </ScrollView>
      <View style={styles.AddView}>
        <TodoTextInput style={styles.TodoTextInput} newItem={newItem} setnewItem={setnewItem}/>
        <Add newItem={newItem} setTodolist={setTodolist} setnewItem={setnewItem} Todolist={Todolist}/> 
      </View>
    </View> 
  );
}
const styles = StyleSheet.create({
  AddView:{
    marginHorizontal : '5%',
    justifyContent: 'center',
    flexDirection: 'row',
    bottom:0,
    backgroundColor: 'white',
  },
  deleteBar: {
    marginHorizontal : '20%',
    width:'60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button:{
  },
});
export default TodoList;