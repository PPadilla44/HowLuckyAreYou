import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import { ClickerProvider } from './components/contexts/useClicker';


export default function App() {

  return (
    <SafeAreaProvider>
      <ClickerProvider>
        <Navigation />
      </ClickerProvider>
      <StatusBar />
    </SafeAreaProvider>
  );
}
