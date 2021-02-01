import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

import PropTypes from 'prop-types';

const Header = (props) =>(
    <View>
        <Text style={styles.titleText}>
            To Do
        </Text>
    </View>
)

Header.propTypes = {
}
const styles = StyleSheet.create({
    
    titleText: {
      fontSize: 30,
    //   color:'green',
      fontWeight: "bold",
      textAlign: 'center',
      color:'white',
    }
});
export default Header;