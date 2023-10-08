import { View, Text, SafeAreaView, Image } from "react-native";
import { Stack, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { BackgroundColors, styles, images, forFade } from "../assets/configs";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = () => {
  const router = useRouter();

  const handleClick = (route) => {
    router.push(route);
  };

  return (
    <SafeAreaView style={{ ...styles.page, flex: 1 }}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          headerStyle: { backgroundColor: BackgroundColors.dark },
          cardStyleInterpolator: forFade
        }}
      />
      <LinearGradient
        style={{ ...styles.container }}
        colors={[BackgroundColors.dark, BackgroundColors.bright]}
      >
        <Text style={{ ...styles.headingText, marginTop: 24 }}>
          Selecione o que gostaria de visualizar
        </Text>
        <View style={{ ...styles.grid, marginTop: 48 }}>
          <TouchableOpacity
            style={{ ...styles.boxMenu }}
            onPress={() => handleClick("/mapa")}
          >
            <Image source={images.mapaIcone} style={{ ...styles.image }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.boxMenu }}
            onPress={() => handleClick("/animais")}
          >
            <Image source={images.orcaIcone} style={{ ...styles.image }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.boxMenu }}
            onPress={() => handleClick("/clima")}
          >
            <Image
              source={images.temperaturaIcone}
              style={{ ...styles.image }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.boxMenu }}
            onPress={() => handleClick("/agua")}
          >
            <Image source={images.aguaIcone} style={{ ...styles.image }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.boxMenu }}
            onPress={() => handleClick("/preservacao")}
          >
            <Image source={images.careIcone} style={{ ...styles.image }} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Home;
