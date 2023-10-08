import { View, Text, SafeAreaView, Image } from "react-native";
import { Stack, useRouter, withLayoutContext } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { BackgroundColors, styles, images } from "../assets/configs";

const Agua = () => {
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
        }}
      />
      <LinearGradient
        style={{ ...styles.container }}
        colors={[BackgroundColors.dark, BackgroundColors.bright]}
      >
        <Text style={{ ...styles.headingText }}>qualidade da água local</Text>

        <View style={{ gap: 32, padding: 12, marginTop: 48 }}>
          <View style={{ ...styles.boxInfo }}>
            <Text style={{ ...styles.primaryText, fontSize: 30 }}>
              Nível de Contaminação
            </Text>
            <View style={{...styles.rowImage}}>
              <Image
                source={images.icone_muito_alto_risco}
                style={{ ...styles.icon }}
              />
              <Text style={{ ...styles.primaryText, fontSize: 22 }}>
                Muito Alto!
              </Text>
            </View>
            <Text style={{ ...styles.secondaryText, fontSize: 16 }}>
              Substâncias com os maiores riscos de gerar doenças crônicas, como
              câncer
            </Text>
          </View>
        </View>

        <View style={{ gap: 32, padding: 12 }}>
          <View style={{ ...styles.boxInfo }}>
            <Text style={{ ...styles.primaryText, fontSize: 30 }}>
              Substâncias Encontradas
            </Text>
            <View style={{...styles.rowImage}}>
              <Image
                source={images.icone_muito_alto_risco}
                style={{ ...styles.icon }}
              />
              <Text style={{ ...styles.primaryText, fontSize: 22 }}>
                Muito Alto!
              </Text>
            </View>
            <Text style={{ ...styles.secondaryText, fontSize: 16 }}>
              Substâncias com os maiores riscos de gerar doenças crônicas, como
              câncer
            </Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Agua;
