import { StyleSheet } from "react-native";
import tartarugaLogin from "./imgs/tartaruga_login.png";
import aguaIcone from "./imgs/icone_agua.png";
import careIcone from "./imgs/icone_care.png";
import mapaIcone from "./imgs/icone_mapa.png";
import orcaIcone from "./imgs/icone_orca.png";
import temperaturaIcone from "./imgs/icone_temperatura.png";

const BackgroundColors = {
  bright: "#06A0C4",
  dark: "#040A2D",
};

const styles = StyleSheet.create({
  page: {
    fontFamily: "BebasNeueRegular",
    flex: 1,
    justifyContent: "space-around",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
  grid: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    columnGap: 36,
    rowGap: 48,
    padding: 24,
    flexWrap: "wrap",
  },
  boxMenu: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: "#82C1D0",
    padding: 6,
  },
  boxInfo: {
    padding: 6,
    width: "60%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
  heading: {
    flex: 1,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "auto",
  },
  headingText: {
    textTransform: "uppercase",
    fontFamily: "BebasNeueRegular",
    color: "white",
    textAlign: "center",
    marginTop: 32,
    fontSize: 34,
  },
  primaryText: {
    textTransform: "uppercase",
    fontFamily: "BebasNeueRegular",
    color: "white",
    textAlign: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    objectFit: "contain",
    flexGrow: 1,
  },
  imageContainer: {
    flex: 1,
    position: "relative",
    width: "100%",
  },
});

const images = {
  tartarugaLogin: tartarugaLogin,
  aguaIcone: aguaIcone,
  careIcone: careIcone,
  mapaIcone: mapaIcone,
  orcaIcone: orcaIcone,
  temperaturaIcone: temperaturaIcone,
};

export { BackgroundColors, styles, images };
