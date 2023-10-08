import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

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

    if(!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView}/>;
}

export default Layout;