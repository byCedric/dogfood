import { Image, View } from 'react-native';

type GitHubAvatarProps = {
  url?: string;
};

export function GitHubAvatar(props: GitHubAvatarProps) {
  return (
    <View className="rounded-full border-4 border-gray-100">
      <Image
        accessibilityRole="image"
        source={{ uri: props.url }}
        className="w-32 h-32 rounded-full"
      />
    </View>
  );
}
