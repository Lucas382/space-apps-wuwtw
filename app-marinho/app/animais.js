import { View, Text, SafeAreaView, Image } from "react-native";
import { Stack, useRouter, withLayoutContext } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { BackgroundColors, styles, images, forFade } from "../assets/configs";
import { ScrollView } from "react-native-gesture-handler";

const Animais = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ ...styles.page, flex: 1 }}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          headerBackVisible: true,
          headerStyle: { backgroundColor: BackgroundColors.dark },
          headerTintColor: "#fff",
          cardStyleInterpolator: forFade
        }}
      />
      <LinearGradient
        style={{ ...styles.container }}
        colors={[BackgroundColors.dark, BackgroundColors.bright]}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ ...styles.headingText }}>Animais</Text>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Animais;
