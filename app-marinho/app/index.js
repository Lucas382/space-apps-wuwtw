import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import {Stack, useRouter} from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { BackgroundColors } from "../assets/colors";

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1}}>
            <Stack.Screen options={{headerShadowVisible: false, headerTitle: "", headerStyle: {backgroundColor: BackgroundColors.dark}}}/>
            <LinearGradient style={styles.container} colors={[BackgroundColors.dark, BackgroundColors.bright]}>
                <Text style={styles.heading}>Bem vindo ao Aqualis</Text>
            </LinearGradient>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    heading: {
        textTransform: "uppercase",
        color: "white",
        fontSize: 24,
    }
})

export default Home;