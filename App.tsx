import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import { ClickerProvider } from './components/contexts/useClicker';
import { Platform } from 'react-native';


export default function App() {

  return (
    <SafeAreaProvider>
      <ClickerProvider>
        <Navigation />
      </ClickerProvider>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </SafeAreaProvider>
  );
}
