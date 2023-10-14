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
import useCityName from "../helpers/useCity";
import useBaciaData from "../helpers/useBaciaData";
import useLocation from "../helpers/useLocation";
import MapView, { Marker } from "react-native-maps";
import usePlatforms from "../helpers/usePlatforms";
import { useEffect, useState } from "react";
import fetchQualityOfWater from "../helpers/useQualityOfWater";

const convertLabel = (label) => {
  if (label == "H1_AlkalinityTot") return "Alcalinidade Total";
  if (label == "H1_Salinity") return "Salinidade";
  if (label == "H1_OxygenSat") return "Saturação de Oxigênio";
  if (label == "H1_pH") return "pH";
  if (label == "H1_TCO2") return "Concentração de CO2";
  if (label == "H1_WaterTemp") return "Temperatura da Água";
};

const Plataformas = () => {
  const router = useRouter();
  const otherLoading = false;
  const { data: platforms, isLoading: bigLoading } = usePlatforms();
  const [isLoading, setIsLoading] = useState(false);
  const [currentPlatform, setCurrentPlatform] = useState({});

  if (bigLoading) {
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
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ paddingTop: 16 }}
          >
            <Text style={{ ...styles.secondaryText, fontSize: 18 }}>
              Loading...
            </Text>
          </ScrollView>
        </LinearGradient>
      </SafeAreaView>
    );
  }

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
        style={{ ...styles.container, width: "100%" }}
        colors={[BackgroundColors.dark, BackgroundColors.bright]}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              ...styles.headingText,
              width: "100%",
              textAlign: "center",
              flex: 1,
              paddingHorizontal: 80,
            }}
          >
            Qualidade da Água
          </Text>
          {platforms?.at(0) && (
            <MapView
              style={{
                ...styles.map,
              }}
              region={{
                latitude: 40,
                longitude: -110,
                latitudeDelta: 60,
                longitudeDelta: 80,
              }}
            >
              {platforms?.map((item) => (
                <Marker
                  key={item["id"]}
                  title={item["name"]}
                  image={images.plataformaIcone}
                  coordinate={{
                    latitude: item.lat,
                    longitude: item.lon,
                  }}
                  onPress={async () => {
                    console.log(item["id"]);
                    setIsLoading(true);
                    const data = await fetchQualityOfWater(item["id"]);
                    setCurrentPlatform(data);
                    setIsLoading(false);
                  }}
                />
              ))}
            </MapView>
          )}

          {isLoading && (
            <Text style={{ ...styles.secondaryText }}>Loading...</Text>
          )}

          {!isLoading && currentPlatform?.result && (
            <View style={{ ...styles.slideBox, marginTop: -12 }}>
              {currentPlatform?.result
                .filter(
                  (item) =>
                    item.measurement_label != "H1_OmegaAragSat" &&
                    item.measurement_label != "H2_CO2"
                )
                .map((item) => (
                  <Text
                    style={{
                      ...styles.secondaryText,
                      textAlign: "justify",
                      fontSize: 16,
                    }}
                    key={item.measurement_label}
                  >
                    {convertLabel(item.measurement_label)}: {item.value}{" "}
                    {item.units}
                  </Text>
                ))}
            </View>
          )}

          {!isLoading &&
          currentPlatform?.result?.find(
            (item) => item.measurement_label == "H1_pH"
          ).value < 9 &&
          currentPlatform?.result?.find(
            (item) => item.measurement_label == "H1_pH"
          ).value > 6 ? (
            <View style={{ ...styles.boxWrapper, marginTop: -12 }}>
              <View style={{ ...styles.boxInfo }}>
                <Text style={{ ...styles.primaryText, fontSize: 30 }}>
                  Nível de Contaminação
                </Text>
                <View style={{ ...styles.rowImage }}>
                  <Image
                    source={images.verificadoIcone}
                    style={{ ...styles.icon }}
                  />
                  <Text style={{ ...styles.primaryText, fontSize: 22 }}>
                    Normal!
                  </Text>
                </View>
                <Text style={{ ...styles.secondaryText, fontSize: 18 }}>
                  Substâncias detectadas dentro do limite de segurança
                </Text>
              </View>
            </View>
          ) : !isLoading && currentPlatform?.result ? (
            <View style={{ ...styles.boxWrapper, marginTop: -12 }}>
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
          ) : (
            ""
          )}
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Plataformas;
