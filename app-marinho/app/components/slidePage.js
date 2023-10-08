import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import {
  BackgroundColors,
  styles,
  images,
  forFade,
} from "../../assets/configs";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { A } from "@expo/html-elements";

const SlidePage = ({ title, data }) => {
  const router = useRouter();

  const [slide, setSlide] = useState(0);

  return (
    <SafeAreaView style={{ ...styles.page, flex: 1 }}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          headerBackVisible: true,
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: BackgroundColors.dark },
          cardStyleInterpolator: forFade,
        }}
      />
      <LinearGradient
        style={{ ...styles.container }}
        colors={[BackgroundColors.dark, BackgroundColors.bright]}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ ...styles.headingText, marginTop: 24 }}>{title}</Text>

          <View style={{ ...styles.slideBox }}>
            <Text style={{ ...styles.secondaryText, fontSize: 20 }}>
              {data.texts[slide]}
            </Text>
            {slide > 0 && (
              <TouchableOpacity onPress={() => setSlide(slide - 1)}>
                <View style={styles.slideButton}>
                  {slide < data.texts.length}

                  <Text style={{ ...styles.secondaryText, fontSize: 20 }}>
                    Back
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            {slide < data.texts.length - 1 && (
              <TouchableOpacity onPress={() => setSlide(slide + 1)}>
                <View style={styles.slideButton}>
                  {slide < data.texts.length}

                  <Text style={{ ...styles.secondaryText, fontSize: 20 }}>
                    Next
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
          {slide == data.texts.length - 1 && (
            <View style={{ padding: 12 }}>
              <Text style={{ ...styles.secondaryText, fontSize: 16 }}>
                Mais informações em:{" "}
                <A
                  href={data.source}
                  style={{ textDecorationLine: "underline" }}
                >
                  {data.source}
                </A>
              </Text>
            </View>
          )}
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SlidePage;
