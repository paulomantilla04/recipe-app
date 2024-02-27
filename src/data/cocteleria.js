import baileys from '../assets/baileys.webp'
import mimosa from '../assets/mimosa.webp'
import cantarito from '../assets/cantarito.webp'
import tamarindo from '../assets/michelada-tamarindo.webp'
import negra from '../assets/michelada-negra.webp'

const cocteleria = {
    baileys: {
        title: "Baileys",
        time: 25,
        difficulty: "Fácil",
        image: baileys,
        ingredients: ["1 1/2 tazas de leche evaporada", "1 lt. de leche", "1 cdta. de bicarbonato", "1 cdta. de sal", "2 cds. de fécula de maíz", "1 1/2 tazas de leche condensada", "2 cds. de cocoa", "2 cds. de café soluble", "2 cds. de esencia de vainilla", "2 tazas de whisky"],
        steps: [
            "En una olla cocina la leche evaporada, la leche, el bicarbonato y la sal. Cocina por 5 minutos.",
            "En un bowl agrega una cucharada de la mezcla anterior y disuelve la fécula de maíz, agrégalo a la olla y cocina por 5 minutos hasta que espese.",
            "A fuego bajo agrega la leche condensada, la cocoa, el café y la vainilla. Cocina por 3 minutos y retira del fuego.",
            "Cambia a un bowl y agrega el whisky, bate para integrar y deja enfriar.",
            "Sirve en un vaso bajo con hielos y acompaña con unos ricos churros.",
        ],
    },
    mimosa: {
        title: "Mimosa",
        time: 5,
        difficulty: "Fácil",
        image: mimosa,
        ingredients: ["Jugo de 3 naranjas", "Suficiente de champagne, o vino espumoso", "1 rodaja de naranja, en cuartos para decorar", "2 cerezas en almíbar, para decorar"],
        steps: [
            "Sobre una tabla corta y exprime las naranjas para obtener el jugo.",
            "En una copa flauta vierte el jugo de naranja y rellena con la champaña, decora con un cuarto de naranja y una cereza."
        ],
    },
    cantarito: {
        title: "Cantarito",
        time: 20,
        difficulty: "Fácil",
        image: cantarito,
        ingredients: [
            "1 taza de pulpa de tamarindo, líquida, ideal para escarchar",
            "1/2 tazas de chile en polvo, para escarchar",
            "1 naranja, para cortar en gajos",
            "1 toronja, para cortar en gajos",
            "Suficiente de hielo",
            "2 limones, sin semillas",
            "1 cucharadita de sal",
            "1/4 tazas de jugo de naranja, sin semillas",
            "1/4 tazas de jugo de toronja, sin semillas",
            "1/4 tazas de tequila blanco",
            "Suficiente de refresco de toronja",
            "Suficiente de naranja, en cuartos, escarchada con chile para decorar",
            "Suficiente de toronja, en rodajas cortadas en cuartos, para decorar"
        ],
        
        steps: [
            "Coloca la pulpa de tamarindo en un plato extendido, enseguida pasa el cantarito boca abajo hasta cubrir la orilla perfectamente. Posteriormente, pasa el cantarito sobre un plato con chile en polvo para escarchar. Reserva.",
            "Corta cada extremo de la naranja y retira la cáscara, luego desliza el cuchillo cuidadosamente por cada gajo para obtener solo la fruta y repite el mismo procedimiento con la toronja. Reserva.",
            "Coloca el hielo en el cantarito ya escarchado con tamarindo y chile, exprime el limón, agrega la sal, el jugo de naranja, el jugo de toronja, el tequila, los gajos de naranja y toronja al gusto y rellena con el refresco de toronja. Finalmente, mezcla muy bien con ayuda de una cuchara o agitador.",
            "Decora el cantarito con más rodajas de naranja escarchada y toronja. Disfruta.",
        ],
    },
    tamarindo: {
        title: "Michelada de Tamarindo",
        time: 8,
        difficulty: "Fácil",
        image: tamarindo,
        ingredients: [
            "1/4 tazas de chile en polvo, para el escarchado",
            "1 cucharada de azúcar, para el escarchado",
            "Suficiente de jarabe de tamarindo, para el escarchado",
            "1/4 tazas de jarabe de tamarindo",
            "3 cucharadas de jugo de naranja",
            "2 cucharadas de jugo de limón",
            "1/2 cucharaditas de salsa maggi",
            "1 botella de cerveza clara",
            "Suficiente de jícama, para decorar",
            "Gomitas, de tamarindo, para decorar",
            "Suficiente de chamoy líquido, para decorar"
        ],
        steps: [
            "Mezcla el chile en polvo y el azúcar en un plato extendido. Baña el borde del tarro cervecero con pulpa de tamarindo y luego escarcha con la mezcla de chile y azúcar.",
            "Vierte el jarabe de tamarindo en el tarro escarchado, agrega el jugo de naranja, el jugo de limón y la salsa maggi; mezcla y añade la cerveza. Decora con jícama, gomitas de tamarindo y chamoy líquido."
        ],
    },
    negra: {
        title: "Michelada Negra",
        time: 15,
        difficulty: "Fácil",
        image: negra,
        ingredients: [
            "2 limones, rebanados en un plato",
            "1/4 tazas de sal de grano",
            "2 cucharadas de salsa de soya",
            "2 cucharadas de salsa inglesa",
            "1 cucharadita de sal",
            "1 cucharadita de chile en polvo",
            "1/4 tazas de jugo de limón",
            "1 cucharada de salsa picante",
            "1 taza de Clamato",
            "1 cerveza obscura",
            "Suficiente de pepino, rebanado finamente, para decorar",
            "Suficiente de aceituna, para decorar"
        ],
        steps: [
            "Para escarchar el tarro, pasa el tarro por el plato con la cama de limones rebanados y después voltéalo sobre el plato con sal de grano, cubriendo bien toda la parte superior del tarro. Reserva.",
            "En un bowl mezcla la salsa de soya con la salsa inglesa, sal, chile en polvo y limón.",
            "Vierte la mezcla anterior en el tarro y añade el Clamato.",
            "Agrega poco a poco la cerveza con el tarro.",
            "Decora tu tarro con un palillo y tres aceitunas y una rebanada de pepino."
        ],
    },
}

export default cocteleria;