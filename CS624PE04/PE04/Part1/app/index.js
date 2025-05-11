import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileCard from '../components/ProfileCard';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
});
