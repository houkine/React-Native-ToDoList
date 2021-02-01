import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground,} from 'react-native';
import TodoList from './components/TodoList/TodoList';

export default function App() {
  let data=[
    {
      groupHeaderData: {title: 'Dashboard'},
      groupListData: ['Calls', 'Chart', 'Map']
    },
    {
      groupHeaderData: {title: 'Profile'},
      groupListData: ['User', 'Add contact', 'Calendar']
    },
    {
      groupHeaderData: {title: 'Messages'},
      groupListData: ['Inbox', 'Sent', 'Deleted']
    },
    {
      groupHeaderData: {title: 'Settings'},
      groupListData: ['Fill Beer', 'Adjust', 'Alarm']
    }
  ];

  return (
    <View style={styles.container}>
      <ImageBackground 
        style={{ width:'100%',height:'90%' }}
        imageStyle= {{opacity:0.5}}
        source={require('./assets/background/02.jpg')}>
        <TodoList style={styles.container}/>
        {/* <StatusBar style="auto" /> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width:'100%',
    height:'100%',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
