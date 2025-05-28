import { 
  GluestackUIProvider, 
  Text, 
  View as GView, 
  Avatar as GAvatar,
  AvatarImage,
  AvatarFallbackText,
  Divider,
  Box,
  Pressable,
  ScrollView,
  VStack,
  HStack,
  Heading
} from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { View } from 'react-native';
import { useState } from 'react';

export const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState<'posts' | 'addons'>('posts');

  return (
    <ScrollView flex={1} bg="$white">
      <VStack flex={1}>
        {/* Profile Header Section */}
        <Box pt="$20" pb="$2" px="$4" bg="$white">
          <VStack space="md" alignItems="center">
            <GAvatar size="2xl">
              <AvatarImage 
                source={{ uri: 'https://github.com/shadcn.png' }} 
                alt="Profile Picture"
              />
              <AvatarFallbackText>JD</AvatarFallbackText>
            </GAvatar>
            
            <VStack space="xs" alignItems="center">
              <Heading size="xl">John Doe</Heading>
              <Text size="md" color="$blueGray500">@johndoe</Text>
            </VStack>

            <Text textAlign="center" color="$blueGray700" px="$4">
              Building amazing things with code. Full-stack developer passionate about UI/UX.
            </Text>

            <HStack space="xl" py="$2">
              <VStack alignItems="center">
                <Text size="lg" fontWeight="$bold">245</Text>
                <Text size="sm" color="$blueGray500">Following</Text>
              </VStack>
              <Divider orientation="vertical" />
              <VStack alignItems="center">
                <Text size="lg" fontWeight="$bold">12.4k</Text>
                <Text size="sm" color="$blueGray500">Followers</Text>
              </VStack>
            </HStack>
          </VStack>
        </Box>

        {/* Tabs Section */}
        <Box>
          <HStack>
            <Pressable 
              flex={1} 
              py="$2"
              onPress={() => setActiveTab('posts')}
            >
              <Box 
                alignItems="center"
                borderBottomWidth={0}
              >
                <Text 
                  color={activeTab === 'posts' ? '$blue500' : '$blueGray500'}
                  fontWeight={activeTab === 'posts' ? '$bold' : '$normal'}
                >
                  Posts
                </Text>
              </Box>
            </Pressable>
            
            <Pressable 
              flex={1} 
              py="$2"
              onPress={() => setActiveTab('addons')}
            >
              <Box 
                alignItems="center"
                borderBottomWidth={0}
              >
                <Text 
                  color={activeTab === 'addons' ? '$blue500' : '$blueGray500'}
                  fontWeight={activeTab === 'addons' ? '$bold' : '$normal'}
                >
                  Add-Ons
                </Text>
              </Box>
            </Pressable>
          </HStack>

          {/* Tab Content with Indicator */}
          <Box>
            <Box 
              position="absolute" 
              top={0}
              left={activeTab === 'posts' ? '0%' : '50%'}
              width="50%"
              height="$0.5"
              bg="$blue500"
            />
            <Box p="$2" minHeight={400}>
              {activeTab === 'posts' ? (
                <VStack space="sm">
                  <Text color="$blueGray700">Your posts will appear here</Text>
                </VStack>
              ) : (
                <VStack space="sm">
                  <Text color="$blueGray700">Your add-ons will appear here</Text>
                </VStack>
              )}
            </Box>
          </Box>
        </Box>
      </VStack>
    </ScrollView>
  );
}; 