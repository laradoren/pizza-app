import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Stack } from 'expo-router';
import React from 'react';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@components/useColorScheme';
import { Pressable } from 'react-native';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}

export default function MenuStack() {
  const colorScheme = useColorScheme();

  return (
   <Stack screenOptions={{

    headerRight: () => (
            <Link href="/cart" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="shopping-cart"
                    size={20}
                    color={Colors[colorScheme ?? 'light'].tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
   }}>
      <Stack.Screen name="index" options={{title: "Menu"}}/>
   </Stack>
  );
}
