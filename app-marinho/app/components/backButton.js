import { View, Text, SafeAreaView, Image } from "react-native";
import {  useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

const BackButton = () => {
    const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.back()}><Text style={{color: "white"}}>Back</Text></TouchableOpacity>
  );
};

export default BackButton;
