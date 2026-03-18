import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to Q-Synapse!</Text>
      <Button title="Get Started" onPress={() => alert('Q-Synapse Security Platform')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;