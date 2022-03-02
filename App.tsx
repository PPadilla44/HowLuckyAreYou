import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ClickerProvider } from './components/contexts/useClicker';
import Main from './screens/Main';

export default function App() {



  return (
    <SafeAreaProvider>
      <ClickerProvider>
        <Main />
      </ClickerProvider>
      <StatusBar />
    </SafeAreaProvider>
  );
}
