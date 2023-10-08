import { StyleSheet } from "react-native";
import tartarugaLogin from "./imgs/tartaruga_login.png";
import aguaIcone from "./imgs/icone_agua.png";
import careIcone from "./imgs/icone_care.png";
import mapaIcone from "./imgs/icone_mapa.png";
import orcaIcone from "./imgs/icone_orca.png";
import temperaturaIcone from "./imgs/icone_temperatura.png";
import icone_muito_alto_risco from "./imgs/icone_muito_alto_risco.png";
import icone_agua_tela_qualidade_de_agua from "./imgs/icone_agua_tela_qualidade_de_agua.png";
import grafico_qualidade_de_água_muito_ruim from "./imgs/grafico_qualidade_de_água_muito_ruim.png";

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
    justifyContent: "center",
    alignItems: "center",
  },
  boxInfo: {
    paddingVertical: 36,
    paddingHorizontal: 24,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
    rowGap: 22,
    width: "100%",
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
  secondaryText: {
    fontFamily: "RobotoCondensed-Regular",
    color: "white",
    textAlign: "center",
  },
  image: {
    width: "100%",
    objectFit: "contain",
  },
  icon: {
    objectFit: "contain",
  },
  rowImage: {
    flexDirection: "row",
    flexGrow: 0,
    gap: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  boxWrapper: {
    gap: 32,
    padding: 12,
    flexDirection: "row",
    margin: 4,
  },
});

const images = {
  tartarugaLogin: tartarugaLogin,
  aguaIcone: aguaIcone,
  careIcone: careIcone,
  mapaIcone: mapaIcone,
  orcaIcone: orcaIcone,
  temperaturaIcone: temperaturaIcone,
  icone_muito_alto_risco: icone_muito_alto_risco,
  icone_agua_tela_qualidade_de_agua: icone_agua_tela_qualidade_de_agua,
  grafico_qualidade_de_água_muito_ruim: grafico_qualidade_de_água_muito_ruim
};

const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

export { BackgroundColors, styles, images, forFade };
