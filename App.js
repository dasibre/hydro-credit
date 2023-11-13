import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Header from "./src/components/Header";
import Main from "./src/components/Main";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Main />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
