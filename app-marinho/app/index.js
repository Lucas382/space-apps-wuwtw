import { View, Text, SafeAreaView, Image } from "react-native";
import {Stack, useRouter} from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { BackgroundColors, styles, images } from "../assets/configs";
import { TouchableOpacity } from "react-native-gesture-handler";


const Home = () => {
    return (
        <SafeAreaView style={{...styles.page, flex: 1}}>
            <Stack.Screen options={{headerShadowVisible: false, headerTitle: "", headerStyle: {backgroundColor: BackgroundColors.dark}}}/>
            <LinearGradient style={{...styles.container}} colors={[BackgroundColors.dark, BackgroundColors.bright]}>
                <Text style={{...styles.headingText, marginTop: 24}}>Selectione o que gostaria de visualizar</Text>
                <View style={{...styles.grid, marginTop: 32}}>
                    <TouchableOpacity style={{...styles.boxMenu}}>
                        <Image source={images.mapaIcone} style={{...styles.image}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.boxMenu}}>
                        <Image source={images.orcaIcone} style={{...styles.image}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.boxMenu}}>
                        <Image source={images.temperaturaIcone} style={{...styles.image}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.boxMenu}}>
                        <Image source={images.aguaIcone} style={{...styles.image}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.boxMenu}}>
                        <Image source={images.careIcone} style={{...styles.image}}/>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
}


export default Home;


/*
const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{...styles.page, flex: 1}}>
            <Stack.Screen options={{headerShadowVisible: false, headerTitle: "", headerStyle: {backgroundColor: BackgroundColors.dark}}}/>
            <LinearGradient style={{...styles.container}} colors={[BackgroundColors.dark, BackgroundColors.bright]}>
                <View style={{...styles.imageContainer}}>
                    <Image source={images.tartarugaLogin} style={{...styles.image}}/>
                </View>
                <View style={styles.heading}>
                    <Text style={styles.headingText}>Bem vindo ao Aqualis</Text>
                </View>
                
            </LinearGradient>
        </SafeAreaView>
    );
}
*/