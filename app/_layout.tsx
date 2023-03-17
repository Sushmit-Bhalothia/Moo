import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { ThemeProvider, createTheme } from '@rneui/themed';
import { Provider } from '../services/auth/provider';
import { Provider as LanguageProvider } from '../providers/LanguageProvider';
export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });
  return (
    <>
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

const theme = createTheme({
  components:{
    Text:{
      style:{
        fontFamily:'System',
        
      }
    },
    Button:{
      color:'primary',
    },
  },
  lightColors:{
    primary: 'blue',
    secondary: '#0ff',
    background: '#fff',
  },
  darkColors:{
    primary: 'blue',
    secondary: '#f1e',
  },
  
  mode:'light',
});



function RootLayoutNav() {

  return (
    <>
      <ThemeProvider theme={theme} >
        <LanguageProvider>
        <Provider>
        <Stack>
          <Stack.Screen name="(auth)/sign-in" options={{ headerShown: false }} />
          <Stack.Screen name="(menu)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
        </Provider>
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}
