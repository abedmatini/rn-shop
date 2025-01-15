import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { StackScreenProps } from "@react-navigation/stack";

export const unstable_settings = {
  initialRouteName: "[slug]",
};

export default function ProductLayout(): JSX.Element {
  return (
    <Stack>
      <Stack.Screen
        name="[slug]"
        options={({ navigation }: StackScreenProps<any>) => ({
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              accessibilityRole="button"
              accessibilityLabel="Go back"
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack>
  );
}
