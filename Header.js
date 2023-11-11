import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
        <Image 
        style={styles.logo} 
        source={{uri: "https://www.hydrocredituniongh.com/wp-content/uploads/2021/06/hydro_logo-removebg-preview-1.png"}} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2, // Add a border at the bottom
    borderBottomColor: '#2c3e50', // Border color
  },
  logo: {
    width: 250,
    height: 50
  },
  headerText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default Header;