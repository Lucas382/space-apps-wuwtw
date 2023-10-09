import { View, Text, SafeAreaView, Image } from "react-native";
import { Stack, useRouter, withLayoutContext } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { BackgroundColors, styles, images, forFade } from "../assets/configs";
import { ScrollView } from "react-native-gesture-handler";
import useMeteoFetch from "../helpers/useMeteoFetch";

const Clima = () => {
  //const { data, isLoading, refetch } = useMeteoFetch();

  //console.log("Data:", data);

  // if (isLoading) {
  //   <SafeAreaView style={{ ...styles.page, flex: 1 }}>
  //     <Stack.Screen
  //       options={{
  //         headerShadowVisible: false,
  //         headerTitle: "",
  //         headerBackVisible: true,
  //         headerStyle: { backgroundColor: BackgroundColors.dark },
  //         headerTintColor: "#fff",
  //         cardStyleInterpolator: forFade,
  //       }}
  //     />
  //     <LinearGradient
  //       style={{ ...styles.container }}
  //       colors={[BackgroundColors.dark, BackgroundColors.bright]}
  //     >
  //       <ScrollView
  //         showsVerticalScrollIndicator={false}
  //         style={{ paddingTop: 16 }}
  //       >
  //         <Text style={{ ...styles.secondaryText, fontSize: 18 }}>
  //           Loading...
  //         </Text>
  //       </ScrollView>
  //     </LinearGradient>
  //   </SafeAreaView>;
  // }

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
            Hoje, 08, Outubro, 2023
          </Text>
          <Text style={{ ...styles.headingText, marginTop: 12, fontSize: 48 }}>
            Brasil
          </Text>
          <Text
            style={{ ...styles.secondaryText, fontSize: 18, marginTop: 12 }}
          >
            Colombo
          </Text>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={{ ...styles.climaBox }}>
              <Image source={images.nublado} style={{ ...styles.image }} />
              <Text
                style={{ ...styles.headingText, fontSize: 72, marginTop: 8 }}
              >
                10°C
              </Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Clima;
