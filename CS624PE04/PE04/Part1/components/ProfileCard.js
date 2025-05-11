import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const avatar = require('../assets/images/avatar.png');

export default function ProfileCard() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <TouchableOpacity onPress={toggleExpand}>
      <View style={styles.card}>
        <Image source={avatar} style={styles.avatar} />
        <Text style={styles.name}>Keerthi Gajjela</Text>
        <Text style={styles.role}>React Native Developer</Text>
        {expanded && (
          <Text style={styles.description}>
            Keerthi is a passionate developer who loves building beautiful mobile apps with JavaScript and React Native.
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#4285F4',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    margin: 10,
    elevation: 5,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  role: {
    fontSize: 14,
    color: '#eee',
  },
  description: {
    marginTop: 10,
    color: '#fff',
    textAlign: 'center',
  },
});
