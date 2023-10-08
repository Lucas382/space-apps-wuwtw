import { View, Text, SafeAreaView, Image } from "react-native";
import { Stack, useRouter, withLayoutContext } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import BackButton from "./components/backButton";
import { BackgroundColors, styles } from "../assets/configs";

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

        <View style={{flex:1, flexDirection: "row", gap: 32, padding: 12, flexShrink: 0}}>
            <View style={{flexGrow: 1}}>
                <View style={{...styles.boxInfo}}>
                    <Text style={{...styles.primaryText}}>Nível de Contaminação</Text>
                    <View>
                        <Text style={{...styles.primaryText}}>Muito Alto!</Text>
                    </View>
                    <Text style={{...styles.primaryText}}>Substâncias com os maiores riscos de gerar doenças crônicas, como câncer</Text>
                </View>
            </View>
            <View style={{borderWidth: 1, borderColor: "white", flexGrow: 1, flexShrink: 0}}>
            </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Agua;
