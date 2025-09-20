import { useFonts, Inter_500Medium, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './navigation/RootNavigator';

export default function App() {
    let [fontsLoaded] = useFonts({
        Inter_500Medium,
        Inter_700Bold,
        Inter_800ExtraBold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}
