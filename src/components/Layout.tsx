import { StatusBar } from 'expo-status-bar';
import { PropsWithChildren } from 'react';
import { View } from 'react-native';

export function Layout({ children }: PropsWithChildren) {
  return (
    <View className="bg-white flex-1 items-center justify-center">
      {children}
      <StatusBar style="auto" />
    </View>
  );
}
