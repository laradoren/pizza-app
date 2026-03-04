import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

import { useColorScheme } from '@components/useColorScheme';

export default function AuthLayout() {
  return <AuthLayouttNav />;
}

function AuthLayouttNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
        </Stack>
    </ThemeProvider>
  );
}
