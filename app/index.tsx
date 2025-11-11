import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-6xl color-primary-dark font-bold">UniEats</Text>
      <Text className="text-2xl color-hint-dark text-center">
        Eat smart, eat fast, eat what you have.
      </Text>
      <Link href="/camera" className="mt-16">
        <Text className="text-2xl color-hint-dark text-center">
          Get Started! 📷
        </Text>
      </Link>
    </View>
  );
}
