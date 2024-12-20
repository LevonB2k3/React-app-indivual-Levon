import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BirthdayInput from './components/BirthdayInput';
import CountdownDisplay from './components/CountdownDisplay';
import { calculateCountdown } from './utils'; 

const App = () => {
  const [birthday, setBirthday] = useState('');
  const [countdown, setCountdown] = useState('');

  // Automatically update the countdown every minute
  useEffect(() => {
    const interval = setInterval(() => {
      calculateCountdown(birthday, setCountdown); // Use the utility function
    }, 60000); // Update every 60 seconds

    // Clean up interval on component unmount to avoid memory leaks
    return () => clearInterval(interval);
  }, [birthday]); // Re-run the effect when the birthday changes

  // Initial countdown calculation when the app starts (if the birthday is already provided)
  useEffect(() => {
    if (birthday) {
      calculateCountdown(birthday, setCountdown); // Calculate immediately when the birthday is entered
    }
  }, [birthday]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Birthday Countdown</Text>
      
      <BirthdayInput birthday={birthday} setBirthday={setBirthday} />
      
      {birthday && <CountdownDisplay countdown={countdown} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;