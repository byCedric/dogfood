import { Text, View } from 'react-native';

type GitHubBioProps = {
  bio?: string;
};

export function GitHubBio(props: GitHubBioProps) {
  return (
    <View className="m-8">
      <Text
        accessibilityRole="summary"
        className="font-semibold text-base text-center text-stone-800">
        {props.bio}
      </Text>
    </View>
  );
}
