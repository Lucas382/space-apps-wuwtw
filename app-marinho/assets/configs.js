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
import terra_icone from "./imgs/terra_icone.png";
import moeda_icone from "./imgs/moeda_icone.png";
import mar_icone from "./imgs/mar_icone.png";
import peixe_icone from "./imgs/peixe_icone.png";
import chuva from "./imgs/chuva.png";
import neve from "./imgs/neve.png";
import nublado from "./imgs/nublado.png";
import raios from "./imgs/raios.png";
import saurida_brasiliensis from "./imgs/saurida_brasiliensis.jpg";

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
  slideBox: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
    padding: 24,
    marginVertical: 32,
    marginHorizontal: 16,
    backgroundColor: "rgba(127, 193, 208, 0.49)",
    justifyContent: "center",
    alignItems: "center",
  },
  slideButton: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderColor: "white",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 1,
    marginTop: 16,
    marginTop: 48,
    flexDirection: "row",
    borderRadius: 100,
  },
  climaBox: {
    backgroundColor: "#60D1EA",
    marginTop: 64,
    aspectRatio: 1,
    paddingHorizontal: 18,
    paddingVertical: 22,
    borderRadius: 1000,
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
  grafico_qualidade_de_água_muito_ruim: grafico_qualidade_de_água_muito_ruim,
  terra_icone: terra_icone,
  moeda_icone: moeda_icone,
  mar_icone: mar_icone,
  peixe_icone: peixe_icone,
  chuva: chuva,
  neve: neve,
  nublado: nublado,
  raios: raios,
};

const animais = [
  {
    nome: "Saurida brasiliensis",
    texto:
      "Esta espécie  é amplamente distribuída, comum e abundante localmente onde ocorre em fundos moles da plataforma continental. Não há grandes ameaças conhecidas, portanto, está listado como de menor preocupação.",
    oceano: "Atlântico",
    rota: "No Atlântico oriental, ocorre desde a Mauritânia até Angola, incluindo as ilhas de Cabo Verde, a ilha de Ascensão e as ilhas de São Tomé e Príncipe. A distribuição do Atlântico oriental provavelmente representa uma espécie diferente. Sua faixa de profundidade é de 10 a 450 m.",
    habitat:
      "Esta espécie demersal é encontrada em profundidades entre 10-450 m em fundos lamacentos sobre a plataforma continental (McEachran e Fechhelm 1998, Polanco 2006). Alimenta-se de peixes e seu comprimento máximo é de 11,5 cm (Anderson et al. 1966), mas comumente atinge entre 5 e 8 cm SL (Russell no prelo).",
    populacao:
      "Esta espécie é comum e abundante localmente; existem 523 registros nominais na Fishnet2, com até 227 indivíduos em um único lote. Foi o terceiro peixe mais abundante capturado em redes comerciais de camarão no sistema da Lagoa Alvarado, no México, durante as estações norte, seca e chuvosa (Pelaez-Rodriguez et al. 2005 ). Foi a quinta espécie larval mais abundante em três habitats de recife diferentes no Caribe do Panamá (Lemberget et al. 2009). A informação populacional é limitada para esta espécie no Atlântico Centro-Leste; no entanto, existem 52 registros de museus desta espécie com contagens de lotes de até 34 indivíduos (acessado através do portal FishNet2, ww.fishnet2.net, agosto de 2015).",
    ameacas:
      "Não parece haver nenhuma ameaça substancial a esta espécie. Poderia ser potencialmente afectado pela sua ocorrência como captura acessória de arrasto de camarão em partes da sua área de distribuição.",
    img: saurida_brasiliensis,
  },
];

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export { BackgroundColors, styles, images, forFade, animais };
