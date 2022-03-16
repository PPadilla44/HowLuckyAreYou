import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import { ClickerProvider } from './components/contexts/useClicker';
import { OddsItemsProvider } from "./components/contexts/useOddsItems"
import useColorScheme from './hooks/useColorScheme';


export default function App() {

  const theme = useColorScheme();

  return (
    <SafeAreaProvider>
      <OddsItemsProvider>
        <ClickerProvider>
          <Navigation />
        </ClickerProvider>
      </OddsItemsProvider>
      <StatusBar style={theme === 'dark' ? "light" : "dark"} />
    </SafeAreaProvider>
  );
}
