import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import { ClickerProvider } from './components/contexts/useClicker';
import { OddsItemsProvider } from "./components/contexts/useOddsItems"
import { SettingsProvider } from './components/contexts/useSettings';


export default function App() {

  return (
    <SafeAreaProvider>

      <SettingsProvider>
        <OddsItemsProvider>
          <ClickerProvider>
            <Navigation />
          </ClickerProvider>
        </OddsItemsProvider>
      </SettingsProvider>

    </SafeAreaProvider>
  );
}
