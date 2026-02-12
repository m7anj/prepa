import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import MainButton from "./components/MainButton";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-6xl color-primary-dark">Prepa</Text>
      <Text className="text-1xl color-hint-dark text-center font-poppins">
        Eat smart, eat fast, eat what you have.
      </Text>
      <View className="mt-16">
        <MainButton onPress={() => router.push("/camera")}>
          Get Started!
        </MainButton>
      </View>
    </View>
  );
}
