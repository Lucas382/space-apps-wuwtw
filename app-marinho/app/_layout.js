import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View, } from "react-native";
import { BackgroundColors } from "../assets/configs";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        "BebasNeueRegular": require("../fonts/BebasNeue-Regular.ttf"),
        "RobotoCondensed-Regular": require("../fonts/RobotoCondensed-Regular.ttf")
    });

    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if(!fontsLoaded) return <View style={{backgroundColor: BackgroundColors.dark}}/>;

    
    return <Stack onLayout={onLayoutRootView} cardOverlay={() => <View style={{backgroundColor: BackgroundColors.dark}}/>}/>
}

export default Layout;