import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  
  const [name, setName] = useState('Welcome! Are you a Donor, Driver, or Donee?');
  
  const pressDonor = () => {
    setName('Thanks for being a donor!');
  }
  const pressDriver = () => {
    setName('Your paychecks are subsidized.');
  }
  const pressDonee = () => {
    setName('You have come to the right place for handouts.');
  }

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <View style={styles.buttonContainer}>
        <Button title='Donor' onPress={pressDonor} />
        <Button title='Driver' onPress={pressDriver} />
        <Button title='Donee' onPress={pressDonee} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A0E5FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20
  }
});
