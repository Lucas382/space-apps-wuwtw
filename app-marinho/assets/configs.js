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
import meandrina_brasiliensis from "./imgs/meandrina_brasiliensis.jpg";
import plataformaIcone from "./imgs/plataformaIcone.png";
import verificadoIcone from "./imgs/icone_verificado.png";

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
  map: {
    width: "100%",
    maxWidth: 300,
    height: 400,
    margin: 36,
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
  plataformaIcone: plataformaIcone,
  verificadoIcone: verificadoIcone,
};

const animais = [
  {
    nome: "Meandrina brasiliensis",
    texto:
      "Esta espécie de coral amplamente distribuída é endêmica do Brasil e pode ser comum localmente. A nível global, os dados populacionais específicos de espécies são limitados; no entanto, os recifes de coral diminuíram globalmente e espera-se que continuem a diminuir rapidamente devido ao aumento das condições severas de branqueamento sob stress térmico causado pelas alterações climáticas, bem como por uma variedade de outras ameaças. Nossa análise de características de vulnerabilidade específicas da espécie indica que esta espécie é altamente suscetível às principais ameaças relacionadas à degradação dos recifes de coral (por exemplo, doenças e branqueamento). Aplicamos duas abordagens analíticas envolvendo dois conjuntos de dados globais diferentes sobre corais e o mapa de distribuição das espécies como proxies para inferir o declínio populacional. Com base nos dados globais de monitorização da cobertura de coral, esta espécie sofreu um declínio inferido de cerca de 27% nas últimas três gerações, ou desde 1989. Com base no início previsto de condições anuais de branqueamento severo (ASB) através de SSP2-4.5 e SSP5-8.5 Nos cenários de dados do modelo climático global, infere-se que esta espécie diminuirá em pelo menos 80% nas próximas três gerações, ou até 2050. Uma vez que a espécie se qualifica para uma categoria mais elevada no âmbito do declínio projetado, portanto, listamo-la como Criticamente Ameaçada A3c. São necessárias medidas de conservação e investigação taxonómica. A mudança no status da avaliação anterior reflete declínios atualizados calculados a partir de dados aprimorados sobre a perda de cobertura de coral modelada no Brasil de 1978 a 2019 e a data projetada de branqueamento severo anual, juntamente com um melhor conhecimento das características das espécies.",
    oceano: "Atlântico ocidental",
    rota: "Esta espécie está distribuída no Atlântico ocidental ao largo do Brasil, de São Luís, no estado do Maranhão, ao sul até o Rio de Janeiro. Não está presente na região mais ampla do Caribe. A faixa de profundidade é de 5 a 30 m.",
    habitat:
      "Esta espécie é encontrada em águas claras e protegidas com substratos horizontais ou de entulho.\n A idade na primeira maturidade da maioria dos corais construtores de recifes é normalmente de três a oito anos (Wallace 1999). Com base nisso, inferimos que a idade média dos indivíduos maduros desta espécie é superior a oito anos. Com base nos tamanhos médios e nas taxas de crescimento, inferimos também que a duração média de uma geração é de 10 anos. A longevidade não é conhecida, mas é provável que seja superior a 10 anos. Portanto, quaisquer taxas de declínio populacional estimadas para efeitos desta avaliação da Lista Vermelha são medidas ao longo de um período de 30 anos.",
    populacao:
      "Esta espécie às vezes é comum localmente. \nAs informações populacionais de nível global específicas para cada espécie são limitadas. No entanto, os recifes de coral estão a sofrer graves declínios a nível global devido ao aumento da temperatura da água causado pelas alterações climáticas (Hughes et al. 2018). Para efeitos desta avaliação da Lista Vermelha, utilizámos características de vulnerabilidade específicas da espécie e duas abordagens analíticas baseadas em dois conjuntos de dados globais de corais para inferir tendências populacionais passadas (GCRMN 2021) e futuras (PNUMA 2020) \nAbordagem 1: Tendência futura da população\nO início projetado do branqueamento severo anual (ASB) foi aplicado como proxy para estimar o declínio populacional em nível global. ASB representa a data em que um recife de coral provavelmente sofrerá condições severas de branqueamento anualmente, e além da qual a espécie sofrerá um declínio superior a 80%, uma vez que não se espera que recupere (van Hooidonk et al. 2014 ) . ASB é definido como pelo menos oito semanas de aquecimento de graus (AQS) que ocorrem durante um período de três meses dentro de um ano, e onde uma AQS ocorre quando a temperatura da superfície do mar está pelo menos 1°C acima da média mensal máxima (van Hooidonk et al . 2014; 2015). Definimos o início da ASB como correspondendo a um declínio de 80% ou mais, no entanto, isto é conservador, uma vez que outros estudos descobriram que é improvável que os corais recuperem com apenas duas incidências de ASB por década (Obura et al. 2022  )  . ",
    ameacas:
      "Esta espécie é moderadamente suscetível ao branqueamento. Corais branqueados têm sido observados no leste do Brasil desde o verão de 1982/1983 (ZMAN Leão pers. obs.), mas os primeiros registros publicados de branqueamento de corais datam do verão de 1993/1994, após a ocorrência de um El-Niño mundial. evento (Castro e Pires 1999; 2001). Desde então, há registros de corais branqueados coincidentes com todas as ocorrências de anomalia de temperatura da água do mar ao longo desta parte da costa brasileira (Leão  et al.  2008). Parece haver uma forte ligação entre o branqueamento de corais e os períodos de temperaturas elevadas da superfície do mar ao longo da costa do Brasil. Por outro lado, as doenças dos corais floresceram em todo o mundo desde a década de 1980 (Harvell  et al.  1999; 2002; Rosenberg e Loya 2004), mas só recentemente a incidência de doenças dos corais nos recifes brasileiros aumentou (Francini-Filho  et al . 2008). ). Tanto o branqueamento dos corais como as doenças parecem intensificar-se à medida que a temperatura da superfície do mar aumenta, e estas ameaças estão a afectar principalmente os  recifes costeiros onde esta espécie ocorre .\n Em geral, a principal ameaça aos corais são as alterações climáticas globais, em particular, os extremos de temperatura que levam ao branqueamento  e ao aumento da susceptibilidade a doenças, ao aumento da gravidade dos eventos e tempestades ENSO e à acidificação dos oceanos. As doenças dos corais emergiram como uma séria ameaça aos recifes de coral em todo o mundo e uma das principais causas da deterioração dos recifes (Weil et al . 2006). O número de doenças e espécies de corais afectadas, bem como a distribuição de doenças aumentaram dramaticamente na última década (Green e Bruckner 2000, Porter et al . 2001, Sutherland et al . 2004, Weil 2004). Epizootias de doenças de coral resultaram em perdas significativas de cobertura de coral e foram implicadas no declínio dramático de acroporídeos em Florida Keys (Aronson e Precht 2001, Porter et al. 2001, Patterson et al . 2002). No Indo-Pacífico, as doenças também estão a aumentar, com surtos de doenças recentemente notificados na Grande Barreira de Corais (Willis et al . 2004), Ilhas Marshall (Jacobson 2006) e no noroeste das Ilhas Havaianas (Aeby et al. 2006). O aumento dos níveis de doenças dos corais na Grande Barreira de Corais foi correlacionado com o aumento da temperatura dos oceanos (Boyett  et al . 2007), apoiando a previsão de que os níveis de doenças aumentarão com o aumento das temperaturas da superfície do mar. As ameaças localizadas aos corais incluem pesca, desenvolvimento humano (indústria, assentamento, turismo e transporte), mudanças na dinâmica das espécies nativas (competidores, predadores, patógenos e parasitas), espécies invasoras (competidores, predadores, patógenos e parasitas), pesca com dinamite, pesca química, poluição da agricultura e indústria, poluição doméstica, sedimentação e atividades recreativas e turísticas humanas. A gravidade destas ameaças combinadas para a população global de cada espécie de coral individual não é conhecida. ",
    img: meandrina_brasiliensis,
  },
];

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export { BackgroundColors, styles, images, forFade, animais };
