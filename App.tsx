import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import { ClickerProvider } from './components/contexts/useClicker';
import { OddsItemsProvider } from "./components/contexts/useOddsItems"
import { SettingsProvider, useSettings } from './components/contexts/useSettings';


export default function App() {

  const { state } = useSettings();

  const theme = state.data.appearance.appearance as "light" | "dark";

  return (
    <SafeAreaProvider>

      <SettingsProvider>
        <OddsItemsProvider>
          <ClickerProvider>
            <Navigation />
          </ClickerProvider>
        </OddsItemsProvider>
      </SettingsProvider>

      <StatusBar style={theme === 'dark' ? "light" : "dark"} />
    </SafeAreaProvider>
  );
}
