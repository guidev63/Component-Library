import { Text, View,StatusBar  } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto"
export default function App() {
 const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular
  })
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', 
     backgroundColor:"#202024",
    }}
    >
       <StatusBar  barStyle="light-content" backgroundColor="transparent"
       translucent />

       
      {fontsLoaded ? <Text>Home</Text>:<View />}
    </View>
  );
}

