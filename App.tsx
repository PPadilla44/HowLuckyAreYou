import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Main from './screens/Main';

export default function App() {



  return (
    <SafeAreaProvider>
      <Main />
      <StatusBar />
    </SafeAreaProvider>
  );
}
