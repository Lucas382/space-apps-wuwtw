import { View, Text, SafeAreaView, Image } from "react-native";
import { Stack, useRouter, withLayoutContext } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import {
  BackgroundColors,
  styles,
  images,
  forFade,
  animais,
} from "../assets/configs";
import { ScrollView } from "react-native-gesture-handler";

const Animais = () => {
  const router = useRouter();

  const animal = animais[0];

  return (
    <SafeAreaView style={{ ...styles.page, flex: 1 }}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          headerBackVisible: true,
          headerStyle: { backgroundColor: BackgroundColors.dark },
          headerTintColor: "#fff",
          cardStyleInterpolator: forFade,
        }}
      />
      <LinearGradient
        style={{ ...styles.container }}
        colors={[BackgroundColors.dark, BackgroundColors.bright]}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ ...styles.headingText }}>Espécies Em Risco</Text>
          <View style={{ ...styles.slideBox }}>
            <Image source={animal.img} style={{ ...styles.image }} />
            <Text
              style={{
                ...styles.headingText,
                fontSize: 30,
                textAlign: "justify",
              }}
            >
              {animal.nome}
            </Text>
            <Text
              style={{
                ...styles.secondaryText,
                fontSize: 16,
                marginTop: 16,
                textAlign: "justify",
                lineHeight: 20,
              }}
            >
              {animal.texto}
            </Text>
            <Text
              style={{
                ...styles.secondaryText,
                fontSize: 16,
                marginTop: 16,
                textAlign: "justify",
                lineHeight: 20,
              }}
            >
              {animal.rota}
            </Text>
            <Text
              style={{
                ...styles.secondaryText,
                fontSize: 16,
                marginTop: 16,
                textAlign: "justify",
                lineHeight: 20,
              }}
            >
              {animal.habitat}
            </Text>
            <Text
              style={{
                ...styles.secondaryText,
                fontSize: 16,
                marginTop: 16,
                textAlign: "justify",
                lineHeight: 20,
              }}
            >
              {animal.populacao}
            </Text>
            <Text
              style={{
                ...styles.secondaryText,
                fontSize: 16,
                marginTop: 16,
                textAlign: "justify",
                lineHeight: 20,
              }}
            >
              {animal.ameacas}
            </Text>
            <Text
              style={{
                ...styles.secondaryText,
                fontSize: 16,
                marginTop: 16,
                textAlign: "justify",
                lineHeight: 20,
              }}
            >
              Oceano: {animal.oceano}
            </Text>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Animais;
