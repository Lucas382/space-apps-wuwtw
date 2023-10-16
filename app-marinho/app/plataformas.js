import { View, Text, SafeAreaView, Image } from "react-native";
import { Stack, useRouter, withLayoutContext } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { BackgroundColors, styles, images, forFade } from "../assets/configs";
import { ScrollView } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import usePlatforms from "../helpers/usePlatforms";
import { useState, useTransition } from "react";
import fetchQualityOfWater from "../helpers/useQualityOfWater";
import { useTranslation } from "react-i18next";

const Plataformas = () => {
  const { t } = useTranslation();
  const { data: platforms, isLoading: bigLoading } = usePlatforms();
  const [isLoading, setIsLoading] = useState(false);
  const [currentPlatform, setCurrentPlatform] = useState({});

  console.log(platforms);

  const convertLabel = (label) => {
    if (label == "H1_AlkalinityTot") return t("label-alc");
    if (label == "H1_Salinity") return t("label-sal");
    if (label == "H1_OxygenSat") return t("label-satoxi");
    if (label == "H1_pH") return t("label-ph");
    if (label == "H1_TCO2") return t("label-conco2");
    if (label == "H1_WaterTemp") return t("label-watertemp");
    return -1;
  };

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
              paddingHorizontal: 100,
            }}
          >
            {t("water-title")}
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
                .filter((item) => convertLabel(item.measurement_label) != -1)
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
          )?.value < 9 &&
          currentPlatform?.result?.find(
            (item) => item.measurement_label == "H1_pH"
          )?.value > 6 ? (
            <View style={{ ...styles.boxWrapper, marginTop: -12 }}>
              <View style={{ ...styles.boxInfo }}>
                <Text style={{ ...styles.primaryText, fontSize: 30 }}>
                  {t("water-cont")}
                </Text>
                <View style={{ ...styles.rowImage }}>
                  <Image
                    source={images.verificadoIcone}
                    style={{ ...styles.icon }}
                  />
                  <Text style={{ ...styles.primaryText, fontSize: 22 }}>
                    {t("water-level1")}
                  </Text>
                </View>
                <Text style={{ ...styles.secondaryText, fontSize: 18 }}>
                  {t("water-subs1")}
                </Text>
              </View>
            </View>
          ) : !isLoading && currentPlatform?.result ? (
            <View style={{ ...styles.boxWrapper, marginTop: -12 }}>
              <View style={{ ...styles.boxInfo }}>
                <Text style={{ ...styles.primaryText, fontSize: 30 }}>
                  {t("water-cont")}
                </Text>
                <View style={{ ...styles.rowImage }}>
                  <Image
                    source={images.icone_muito_alto_risco}
                    style={{ ...styles.icon }}
                  />
                  <Text style={{ ...styles.primaryText, fontSize: 22 }}>
                    {t("water-level2")}
                  </Text>
                </View>
                <Text style={{ ...styles.secondaryText, fontSize: 18 }}>
                  {t("water-subs2")}
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
