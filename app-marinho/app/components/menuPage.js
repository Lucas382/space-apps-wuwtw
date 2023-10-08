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

const MenuPage = ({ title, routes }) => {
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

        <View style={{ ...styles.grid, marginTop: 48 }}>
          {routes.map((item) => (
            <TouchableOpacity
              style={{ ...styles.boxMenu }}
              onPress={() => handleClick(item.route)}
              key={item.route}
            >
              <Image source={item.img} style={{ ...styles.image }} />
            </TouchableOpacity>
          ))}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default MenuPage;
