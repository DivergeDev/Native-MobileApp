import { Stack, useRouter, useRootNavigationState } from 'expo-router';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { View, ActivityIndicator } from 'react-native';

export default function RootLayout() {
  const rootNavigationState = useRootNavigationState();

  if (!rootNavigationState?.key) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <GluestackUIProvider config={config}>
      <Stack>
        <Stack.Screen 
          name="profile/index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="settings/index"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </GluestackUIProvider>
  );
} 