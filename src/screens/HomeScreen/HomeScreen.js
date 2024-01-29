import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { firebase } from '../../firebase/config';

export default function HomeScreen(props) {
 

  const navigateToLogin = () => {
    // Navigate to the LoginScreen
    props.navigation.navigate('Login');
  };

  const navigateToOptionSelection = () => {
    
    props.navigation.navigate('OptionsSelection');
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={styles.buttonText}>Go to Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToOptionSelection}>
          <Text style={styles.buttonText}>Go to OptionsSelection</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
