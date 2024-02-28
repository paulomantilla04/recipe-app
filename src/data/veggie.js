import wok from '../assets/wok-verduras.webp';
import ceviche from '../assets/ceviche-panela.webp';
import empanadas from '../assets/empanadas.webp';
import verduras from '../assets/verduras-gratinadas.webp';
import pasta from '../assets/pasta.webp';

const veggie = {
    wok: {
        title: "Wok de Verduras",
        time: 40,
        difficulty: "Fácil",
        image: wok,
        ingredients: [
          "1/2 taza de salsa de soya",
          "1/2 cucharadita de azúcar morena",
          "1 cucharada de jugo de limón",
          "1 cucharada de jugo de naranja",
          "1 cucharada de jengibre, finamente picado",
          "2 cucharadas de aceite de ajonjolí",
          "1 taza de cebolla cambray, en rebanadas delgadas",
          "1 cucharada de ajo, finamente picado",
          "1 taza de zanahoria, en rebanadas delgadas",
          "1 taza de pimiento verde, en tiras delgadas",
          "1 taza de setas, en tiras",
          "1 taza de brócoli, cortado en arbolitos pequeños",
          "1 taza de edamame, precocido",
          "2 tazas de fideo de huevo, cocido",
          "al gusto de nuez de la India, tostada, para decorar"
        ],
        steps: [
          "Mezcla la salsa de soya, el azúcar morena, el jugo de limón, el jugo de naranja y el jengibre en un bowl. Mezcla muy bien y reserva.",
          "Calienta el aceite de ajonjolí en un wok a fuego medio, agrega la cebolla de cambray y el ajo y cocina por 2 minutos. Posteriormente, añade la zanahoria, el pimiento verde, las setas, el brócoli y los edamames y cocina de 5 a 7 minutos.",
          "Cuando las verduras estén cocidas, pero crujientes, incorpora los fideos, la salsa de soya preparada y cocina por 2 minutos más. Reserva el wok de verduras.",
          "Sirve en un bowl y decora con nuez de la India tostada."
        ],
        link:"vegetariano/1",
        category: "Vegetariano"

    },
    ceviche: {
        title: "Ceviche de Panela",
        time: 45,
        difficulty: "Fácil",
        image: ceviche,
        ingredients: [
          "1 taza de jugo de limón",
          "1/2 taza de aceite de oliva",
          "1 cucharadita de orégano molido",
          "1/4 taza de vinagre de chiles",
          "Sal al gusto",
          "Pimienta al gusto",
          "3 tazas de queso panela, en cubos medianos",
          "1 taza de pepino, en cubos medianos",
          "1 taza de tomate verde, en cubos medianos",
          "1 taza de cebolla morada, finamente picada",
          "Al gusto de hojas de cilantro, para decorar",
          "Al gusto de cebolla morada, en tiras delgadas, para decorar",
          "Al gusto de tostadas horneadas, para acompañar"
        ],
        steps: [
          "Mezcla el jugo de limón, el aceite de oliva, el orégano molido, el vinagre de chiles, la sal y la pimienta en un bowl hasta integrar todos los ingredientes. Reserva.",
          "Agrega el queso panela, el pepino, el tomate verde y la cebolla morada en un bowl. Posteriormente, baña con la vinagreta y refrigera el ceviche por 1 hora.",
          "Sirve el ceviche de panela en un bowl, decora con hojas de cilantro y cebolla morada. ¡Disfruta con tostadas horneadas!"
        ],
        link:"vegetariano/2",
        category: "Vegetariano"
    },
    empanadas: {
        title: "Empanadas Vegetarianas",
        time: 55,
        difficulty: "Fácil",
        image: empanadas,
        ingredients: [
          "2 cucharadas de aceite de oliva, para el relleno",
          "1/2 taza de cebolla, finamente picada, para el relleno",
          "1 cucharada de ajo, finamente picado, para el relleno",
          "1 taza de pimiento rojo, en cubos pequeños, para el relleno",
          "2 tazas de champiñón, en cubos pequeños, para el relleno",
          "1 taza de hongo portobello, en cubos pequeños, para el relleno",
          "1 taza de elote amarillo, desgranado, para el relleno",
          "1 taza de puré de tomate, para el relleno",
          "1 cucharadita de paprika, para el relleno",
          "Sal al gusto",
          "Pimienta molida al gusto",
          "1 taza de queso manchego, rallado",
          "15 discos para empanada",
          "1 huevo, revuelto, para barnizar",
          "Al gusto de chimichurri, para acompañar"
        ],
        steps: [
          "Calienta el aceite de oliva en una sartén a fuego medio. Agrega la cebolla, el ajo y el pimiento y cocina por 5 minutos o hasta que los vegetales estén un poco dorados. Posteriormente, añade los champiñones y los portobello y cocina por 10 minutos o hasta que suelten todo el líquido. Incorpora el elote amarillo, el puré de tomate, la paprika, la sal y la pimienta, luego mezcla muy bien y cocina a fuego bajo por 10 minutos o hasta que todo el líquido se evapore. Deja enfriar por 10 minutos.",
          "Coloca las discos de empanada sobre una charola con papel encerado, agrega de una a dos cucharadas del relleno, añade un poco de queso manchego y barniza toda la orilla de las empanadas con el huevo batido. Dobla y usa un tenedor para cerrar y que no se salga el relleno. Barniza las empanadas con el huevo.",
          "Hornea las empanadas vegetarianas a 180 °C por 30 minutos.",
          "Sirve las empanadas vegetarianas en una tabla y acompaña con chimichurri."
        ],
        link:"vegetariano/3",
        category: "Vegetariano"
    },
    verduras: {
        title: "Verduras Gratinadas",
        time: 50,
        difficulty: "Fácil",
        image: verduras,
        ingredients: [
          "Suficiente aceite vegetal",
          "1 taza de cebolla morada, en cubos grandes",
          "3 tazas de champiñón, a la mitad",
          "2 tazas de pimiento verde, en cubos grandes",
          "2 tazas de pimiento rojo, en cubos grandes",
          "1 1/2 tazas de zanahoria, en rodajas",
          "1 taza de coliflor, en ramilletes",
          "1 cucharada de orégano",
          "Suficiente sal",
          "Suficiente pimienta",
          "1 taza de Mayonesa con Aceite de Ajonjolí, para el gratinado",
          "2 cucharadas de fécula de maíz, para el gratinado",
          "2 tazas de queso manchego, rallado, para el gratinado",
          "1/4 cucharaditas de nuez moscada, para el gratinado",
          "Suficiente sal, para el gratinado",
          "Suficiente pimienta, para el gratinado",
          "2 cucharadas de eneldo, finamente picado",
          "Al gusto de eneldo, en ramitas"
        ],
        steps: [
          "Calienta una olla a temperatura media y agrega el aceite vegetal, la cebolla morada, los champiñones, los pimientos, la zanahoria y la coliflor. Sazona con orégano, sal y pimienta. Cocina por 8 minutos aproximadamente, luego retira del calor y reserva.",
          "Mezcla la Mayonesa con Aceite de Ajonjolí, la fécula de maíz, el queso manchego, la nuez moscada, el eneldo, la sal y la pimienta en un tazón.",
          "Pasa las verduras a un refractario y vierte sobre ellas la mezcla de Mayonesa con Aceite de Ajonjolí. Tapa con aluminio.",
          "Hornea las verduras a 200°C por 10 minutos, retira el aluminio y hornea por 5 minutos más o hasta que la superficie esté dorada.",
          "Sirve las verduras gratinadas directamente del refractario y decora con ramitas de eneldo."
        ],
        link:"vegetariano/4",
        category: "Vegetariano"
    },
    pasta: {
        title: "Pasta Verde",
        time: 23,
        difficulty: "Fácil",
        image: pasta,
        ingredients: [
          "5 litros de agua",
          "Suficiente sal",
          "500 gramos de Fettuccine",
          "3/4 taza de chile poblano, limpio y en tiritas, para la salsa",
          "1/2 taza de calabaza, en cubos, para la salsa",
          "1/4 taza de nuez, para la salsa",
          "1 diente de ajo, tatemado, para la salsa",
          "1/2 taza de cilantro, para la salsa",
          "3/4 taza de crema ácida, para la salsa",
          "3/4 taza de caldo de vegetales, para la salsa",
          "Suficiente sal",
          "Suficiente pimienta",
          "1 cucharada de aceite vegetal",
          "1/2 taza de chile poblano, limpio y en tiritas, para decorar",
          "1/2 taza de grano de elote amarillo, para decorar",
          "1/4 taza de queso añejo, para decorar"
        ],
        steps: [
          "Calienta el agua en una olla y una vez que rompa a hervor, añade suficiente sal, mezcla hasta diluir y agrega el Fettuccine. Cocina de 10 a 12 minutos, retira y escurre.",
          "Licúa el chile poblano, la calabaza, las nueces, el ajo, el cilantro, la crema, la sal y la pimienta hasta obtener una mezcla homogénea.",
          "Calienta el aceite en una sartén a fuego medio, vierte la salsa y reduce un poco, luego añade sal y pimienta a tu gusto. Una vez que la salsa de chile poblano esté lista, incorpora el Fettuccine y mezcla bien. Finalmente, agrega el chile poblano y los granos de elote.",
          "Sirve la pasta verde con chile poblano y decora con granos de elote y un poco de queso."
        ],
        link:"vegetariano/5",
        category: "Vegetariano"
    }

}

export default veggie;