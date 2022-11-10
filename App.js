import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useFonts } from "expo-font"
import AppNavigator from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/store';
import { init } from './src/db';

export default function App() {
  init()
  .then(()=>{
    console.log("Initialized database")
  })
  .catch((err) => {
    console.log("Initializing db failed")
    console.log(err)
  })
  const [loaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
    'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf')
  })
  
  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
