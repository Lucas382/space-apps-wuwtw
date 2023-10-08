import { View, Text, SafeAreaView, Image } from "react-native";
import { Stack, useRouter, withLayoutContext } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { BackgroundColors, styles, images, forFade } from "../assets/configs";
import { ScrollView } from "react-native-gesture-handler";

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
          cardStyleInterpolator: forFade
        }}
      />
      <LinearGradient
        style={{ ...styles.container }}
        colors={[BackgroundColors.dark, BackgroundColors.bright]}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ ...styles.headingText }}>qualidade da água local</Text>

          <View style={{ ...styles.boxWrapper, marginTop: 48 }}>
            <View style={{ ...styles.boxInfo }}>
              <Text style={{ ...styles.primaryText, fontSize: 30 }}>
                Nível de Contaminação
              </Text>
              <View style={{ ...styles.rowImage }}>
                <Image
                  source={images.icone_muito_alto_risco}
                  style={{ ...styles.icon }}
                />
                <Text style={{ ...styles.primaryText, fontSize: 22 }}>
                  Muito Alto!
                </Text>
              </View>
              <Text style={{ ...styles.secondaryText, fontSize: 18 }}>
                Substâncias com os maiores riscos de gerar doenças crônicas,
                como câncer
              </Text>
            </View>
          </View>

          <View style={{ ...styles.boxWrapper }}>
            <View style={{ ...styles.boxInfo, rowGap: 0, paddingBottom: 0 }}>
              <View
                style={{ ...styles.rowImage, justifyContent: "space-between" }}
              >
                <Text style={{ ...styles.primaryText, fontSize: 30, color: "red" }}>
                  Índice de Água
                </Text>
                <Image
                  source={images.icone_agua_tela_qualidade_de_agua}
                  style={{ ...styles.icon }}
                />
              </View>
              <Image
                source={images.grafico_qualidade_de_água_muito_ruim}
                style={{ ...styles.image, marginVertical: -8 }}
              />
            </View>
          </View>

          <View style={{ ...styles.boxWrapper }}>
            <View style={{ ...styles.boxInfo }}>
              <Text style={{ ...styles.primaryText, fontSize: 30 }}>
                Substâncias Encontradas
              </Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Agua;
