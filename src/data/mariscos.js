import ensalada from '../assets/ensalada-camarones.webp'
import aguachile from '../assets/aguachile.webp'
import ceviche from '../assets/ceviche.webp'
import camarones from '../assets/camarones-empanizados.webp'
import caldo from '../assets/caldo-pescado.webp'

const mariscos = {
    ensalada: {
        title: "Ensalada de Camarón",
        time: 25,
        difficulty: "Fácil",
        image: ensalada,
        ingredients: ["1 kilo camarón coctelero", "Jugo de 3 limones", "1-2 cebollas picadas", "3-4 jitomates picados", "4 chiles habaneros picados", "Cilantro", "Sal al gusto", "Aguacate", "Mayonesa"],
        steps: [
            "Lavamos todas las verduras y las picamos.",
            "Ponemos el camarón en un bowl y agregamos el limón.",
            "Agregamos todas las verduras y sal si lo desean e integramos.",
            "Servimos nuestro plato adornamos con aguacate y mayonesa."
        ]
    },
    aguachile: {
        title: "Aguachile de Camarón",
        time: 20,
        difficulty: "Fácil",
        image: aguachile,
        ingredients: ["Sal al gusto", "1 kg de camarón", "1/2 Cebolla morada en pluma", "2 Chiles verdes", "1/4 de diente de ajo", "Cilantro al gusto", "1 taza de jugo de limón", "1 Pepino cortado en media luna sin semilla"],
        steps: [
            "Limpiar camarones, retirar cabeza, cascara y cortar en mariposa, colocar sobre el plato en el que se vaya a presentar.",
            "Licuar jugo de limón, ajo, chile y cilantro.",
            "Bañar los camarones con el licuado, agregar pepino cortado en rebanadas y cebolla en plumas, terminar con pimienta recién molida.",
        ]
    },
    ceviche: {
        title: "Ceviche de pescado",
        time: 40,
        difficulty: "Fácil",
        image: ceviche,
        ingredients: ["400 gramos filete de pescado blanco cortado en cubos", "3/4 tazas jugo de limón verde", "100 gramos de cebolla morada finamente picada (o 1 cebolla)", "15 gramos de cilantro fresco finamente picado", "250 gramos pepino pelado sin semillas cortado en cubos"],
        steps: [
            "Marinar el pescado con el limón y dejarlo reposar durante 30 minutos en refrigeración hasta que se torne blanco.",
            "En un tazón aparte, combinar cebolla, jitomate, pepino y cilantro.",
            "Combinar el pescado sin el jugo junto con la mezcla anterior.",
            "Servir frío acompañado de tostadas de maíz horneadas."
        ],
    },
    camarones: {
        title: "Camarones Empanizados",
        time: 30,
        difficulty: "Media",
        image: camarones,
        ingredients: ["500 grs de camarones", " 1 vaso de harina", " 1 cucharadita de ajo en polvo", " 1 pizca de sal", " 1 pizca de pimienta", " 2 huevos", " 1 pizca de polvo para empanizar"],
        steps: [
            "Pela los camarones dejando solo la cola y córtalos por el lomo para retirarles el tubo digestivo de color negro. Una vez hecho esto, ya los habremos limpiado y dejado con forma de mariposa.",
            "Coge un recipiente y prepara la harina para empanizar los camarones. Para ello, mézclala con el ajo puro en polvo, sal y pimienta. Si quieres, puedes agregar más especias y variar las cantidades para adaptarlas a tu gusto.",
            "Aparte, bate los huevos y resérvalos en ese plato, no los mezcles con la harina. Coge un tercer plato y coloca el empanizador escogido. Puedes utilizar panko, pan molido..., lo que quieras que aporte un toque crujiente a los camarones empanizados.",
            "Coge una sartén grande con el aceite suficiente como para cubrir los camarones y ponla a fuego medio para que el aceite se caliente.",
            "Para rebozar los camarones, pasa cada uno de ellos primero por la harina preparada, procurando que se pegue muy bien por todos lados. Luego, pásalos por el huevo batido y, finalmente, por el polvo para empanizar.",
            "Fríe los camarones rebozados cuando el aceite esté caliente hasta que se doren. Una vez dorados, resérvalos sobre papel absorbente para retirar el exceso de aceite.",
            "¡Listo! Ya puedes servir la receta de camarones empanizados fritos, acompañada de tu salsa favorita, como por ejemplo salsa teriyaki, salsa de soya, salsa tártara, salsa bbq..."
        ],
    },
    caldo: {
        title: "Caldo de Pescado",
        time: 37,
        difficulty: "Media",
        image: caldo,
        ingredients: ["4 Piezas Jitomate", "3 Cubos Concentrado de Tomate con Pollo", "3 Piezas Chile guajillo sin semillas y remojadas en agua caliente", "1/2 Litro Agua", "2 Litros de Agua", "2 Piezas Papa peladas y en cubos", "4 Piezas Zanahorias peladas y en cubos", "800 Gramos Pescado con hueso, en trozo"],
        steps: [
            "Licúa los jitomates con el Concentrado de Tomate con Pollo, los chiles guajillo y ½ litro de agua, cuela y calienta en una olla durante 5 minutos o hasta que cambie de color ligeramente.",
            "Agrega 1 ½ litros de agua, mezcla y cocina hasta que hierva ligeramente. Agrega las verduras y el pescado; cocina hasta que estén ligeramente suaves.",
            "Sirve el caldo acompañado de limón."
        ]
    }
}

export default mariscos;