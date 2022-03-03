import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import { ClickerProvider } from './components/contexts/useClicker';
import useColorScheme from './hooks/useColorScheme';


export default function App() {

  // const theme = useColorScheme();
  const theme = "dark";

  return (
    <SafeAreaProvider>
      <ClickerProvider>
        <Navigation />
      </ClickerProvider>
      <StatusBar style={theme === 'dark' ? "light" : "dark"} />
    </SafeAreaProvider>
  );
}
