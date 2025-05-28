import { FC } from 'react';
import {
  Box,
  ScrollView,
  VStack,
  HStack,
  Text,
  Pressable,
  Icon as GIcon,
  Switch,
  Divider,
} from '@gluestack-ui/themed';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Settings: FC = () => {
  const router = useRouter();

  return (
    <ScrollView flex={1} bg="$white">
      <VStack flex={1}>
        {/* Header */}
        <Box 
          pt="$16" 
          pb="$4" 
          px="$4" 
          bg="$white" 
          borderBottomWidth={1} 
          borderBottomColor="$blueGray100"
        >
          <HStack alignItems="center" space="md">
            <Pressable
              onPress={() => router.back()}
              p="$2"
              rounded="$full"
              hitSlop={10}
            >
              <Ionicons 
                name="chevron-back" 
                size={24}
                color="#64748B" 
              />
            </Pressable>
            <Text size="xl" fontWeight="$bold">Settings</Text>
          </HStack>
        </Box>

        {/* Settings List */}
        <VStack space="md" p="$4">
          {/* Notifications Setting */}
          <Pressable py="$4">
            <HStack justifyContent="space-between" alignItems="center">
              <HStack space="md" alignItems="center">
                <Ionicons 
                  name="notifications-outline" 
                  size={24}
                  color="#334155" 
                />
                <Text size="lg" color="$blueGray700">Push Notifications</Text>
              </HStack>
              <Switch defaultValue={true} size="md" />
            </HStack>
          </Pressable>
          
          <Divider my="$1" />

          {/* Dark Mode Setting */}
          <Pressable py="$4">
            <HStack justifyContent="space-between" alignItems="center">
              <HStack space="md" alignItems="center">
                <Ionicons 
                  name="moon-outline" 
                  size={24}
                  color="#334155" 
                />
                <Text size="lg" color="$blueGray700">Dark Mode</Text>
              </HStack>
              <Switch size="md" />
            </HStack>
          </Pressable>

          <Divider my="$1" />

          {/* Privacy Setting */}
          <Pressable 
            py="$4" 
            onPress={() => {}}
          >
            <HStack justifyContent="space-between" alignItems="center">
              <HStack space="md" alignItems="center">
                <Ionicons 
                  name="lock-closed-outline" 
                  size={24}
                  color="#334155" 
                />
                <Text size="lg" color="$blueGray700">Privacy</Text>
              </HStack>
              <Ionicons 
                name="chevron-forward" 
                size={20}
                color="#94A3B8" 
              />
            </HStack>
          </Pressable>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default Settings; 