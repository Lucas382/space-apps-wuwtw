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
import { useTranslation } from "react-i18next";

const Mapa = () => {
  const router = useRouter();
  // const { data: city, isLoading } = useCityName();
  const city = "Colombo";
  const { data } = useBaciaData();
  // const { data: location, isLoading: otherLoading } = useLocation();
  const isLoading = false;
  const otherLoading = false;
  const location = { latitude: -25.33167, longitude: -49.18417 };
  const { t } = useTranslation();

  if (isLoading || otherLoading) {
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
        style={{ ...styles.container }}
        colors={[BackgroundColors.dark, BackgroundColors.bright]}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ ...styles.headingText }}>{city}</Text>
          {location && (
            <MapView
              style={{ ...styles.map }}
              region={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 6.522,
                longitudeDelta: 7.521,
              }}
            >
              {data.map((item) => (
                <Marker
                  key={item["código Otto"]}
                  title={item["nome da bacia hidrográfica"]}
                  coordinate={{
                    latitude: item.latitude,
                    longitude: item.longitude,
                  }}
                />
              ))}
            </MapView>
          )}

          {data.map((item) => (
            <View key={item["código Otto"]} styles={{ marginBottom: 36 }}>
              <Text
                style={{
                  ...styles.headingText,
                  fontSize: 32,
                  marginTop: 16,
                  marginBottom: -8,
                }}
              >
                {item["nome da bacia hidrográfica"]}
              </Text>
              <View style={{ ...styles.slideBox }}>
                <Text
                  style={{
                    ...styles.headingText,
                    textAlign: "justify",
                    fontSize: 24,
                    marginTop: 0,
                  }}
                >
                  {item["nome do curso principal"]}
                </Text>
                <Text
                  style={{
                    ...styles.secondaryText,
                    textAlign: "justify",
                    marginTop: 12,
                  }}
                >
                  {t("map-af")} {item["principais Afluentes"]}
                </Text>
                <Text
                  style={{
                    ...styles.secondaryText,
                    textAlign: "justify",
                    marginTop: 12,
                  }}
                >
                  {t("map-sub")} {item["sub-bacias hidrográficas"]}
                </Text>
                {item["suprabacia(s)"] && (
                  <Text
                    style={{
                      ...styles.secondaryText,
                      textAlign: "justify",
                      marginTop: 12,
                    }}
                  >
                    {t("map-supra")} {item["suprabacia(s)"]}
                  </Text>
                )}
              </View>
            </View>
          ))}
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Mapa;
