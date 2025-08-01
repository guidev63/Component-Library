import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold, } from "@expo-google-fonts/roboto";

import { GluestackUIProvider, Text, Center } from "@gluestack-ui/themed";

import { config } from "./config/gluestack-ui.config";
import { Loading } from '@components/Loading';
import { SignIn } from '@screens/SignIn'
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? (
        <SignIn
        />
      ) : (
        <Loading
        />
      )}
    </GluestackUIProvider>
  );
}
