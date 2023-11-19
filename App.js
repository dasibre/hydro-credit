import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Header from "./src/components/Header";
import Main from "./src/components/Main";
import PhoneNumber from "./src/screens/PhoneNumber";
import Gated from "./src/screens/Gated";
import Otp from "./src/screens/Otp";

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator
        initialRouteName="PhoneNumber"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Gated" component={Gated} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

{/* <SafeAreaView style={styles.container}>
      <Header />
      <Main />
      <StatusBar style="auto" />
    </SafeAreaView> */}