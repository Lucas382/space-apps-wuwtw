import { View, Text, SafeAreaView, Image } from "react-native";
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
        <Text style={{ ...styles.headingText, marginTop: 24 }}>{title}</Text>

        <View style={{ ...styles.slideBox }}>
            <Text style={{...styles.secondaryText, fontSize: 20}}>{data.texts[slide]}</Text>
            <View style={{width: "100%", padding: 16, borderColor: "white", borderWidth: 1, marginTop: 16, marginTop: 48, flexDirection: "row", borderRadius: 100}}>
                {slide < data.texts.length}
                <TouchableOpacity><Text style={{...styles.secondaryText, fontSize: 20}}>Next</Text></TouchableOpacity>
            </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SlidePage;
