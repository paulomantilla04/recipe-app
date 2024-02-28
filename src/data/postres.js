import carlota from "../assets/carlota.webp";
import cheesecakeLotus from "../assets/cheesecake-lotus.webp";
import brownies from "../assets/brownies.webp";
import muffins from "../assets/muffins.webp";
import sandwich from "../assets/sandwich-chocolate.webp";

const postres = {
  brownies: {
    title: "Brownies",
    time: 50,
    difficulty: "Fácil",
    image: brownies,
    ingredients: [
        "Cacao en polvo sin azúcar 60 g",
        "Mantequilla sin sal 113 g",
        "2 Huevos",
        "Azúcar (o 200 g si los queremos muy dulces) 175 g",
        "Harina de repostería 30 g",
        "Esencia de vainilla 5 ml",
        "Sal una buena pizca",
        "Nueces o pacanas groseramente picadas 125 g"
    ],
    steps: [
        "Precalentar el horno a 165ºC y engrasar o cubrir con papel sulfurizado un molde cuadrado de unos 20 centímetros de lado.",
        "Derretir la mantequilla con el cacao en polvo, removiendo a fuego lento hasta conseguir una mezcla homogénea y suave. Retirar y dejar enfriar unos minutos. Echar en un recipiente mediano y añadir los huevos uno a uno, y la vainilla, batiendo con unas varillas.",
        "En otro recipiente mezclar la harina con el azúcar, la sal y las nueces.",
        "Incorporar a la mezcla de cacao y remover bien pero con suavidad, hasta tener una masa homogénea, sin grumos secos.",
        "Llenar el molde y hornear durante unos 35-40 minutos. Esperar a que se enfríe antes de cortar."
    ],
    link: "postres/1",
    category: "Postres"

  },
  carlota: {
    title: "Carlota de Limón",
    time: 250,
    difficulty: "Fácil",
    image: carlota,
    ingredients: [
      "1 lata de leche evaporada",
      "1 lata de leche condensada",
      "1 lata de media crema",
      "1 barra de queso crema",
      "Jugo de 5 limones medianos",
      "1 1/2 paquetes de galletas de vainilla de tu preferencia",
    ],
    steps: [
      "Exprimir los limones para conseguir su jugo.",
      "En una licuadora, poner las cremas y el queso crema.",
      "Licuar unos 15 segundos, luego echar el jugo de limón y dejar otros 20 segundos licuando y revisar que la mezcla quede espesa.",
      "Acomodar en capas en un bowl de la siguiente manera: galletas, mezcla, galletas, mezcla, etc.",
      "Meter al congelador 2 horas y luego bajarlo al refrigerador 2 horas más.",
      "¡A disfrutar!",
    ],
    link: "postres/2",
    category: "Postres"

  },
  sandwich: {
    title: "Sándwich de Helado",
    time: 30,
    difficulty: "Fácil",
    image: sandwich,
    ingredients: [
      "1/2 taza de mantequilla",
      "1/4 taza de azúcar",
      "1/4 taza de azúcar mascabado",
      "1 huevo",
      "1 taza de harina",
      "1 cucharada de polvo para hornear",
      "1/2 cucharadita de sal",
      "1/2 taza de Hershey’s Cocoa Natural",
      "1/2 taza de Barra de repostería Hershey’s chocolate semiamargo",
      "1/3 taza de nuez",
      "3/4 taza de Chispas Hershey’s chocolate semiamargo",
      "Suficiente harina",
      "Suficiente helado sabor vainilla",
    ],
    steps: [
      "Coloca la Barra de repostería Hershey's chocolate semiamargo en un baño maría, mezcla hasta derretir en su totalidad y reserva.",
      "Bate la mantequilla, el azúcar, el azúcar mascabado, el huevo, la harina, el polvo para hornear, la sal, la Hershey's Cocoa Natural y la Barra de repostería Hershey's chocolate semiamargo derretida hasta formar una masa. Posteriormente, agrega las nueces y las Chispas Hershey’s chocolate semiamargo. Integra.",
      "Extiende la masa sobre una superficie plana con un poco de harina, usa un cortador redondo para obtener círculos de galleta y coloca en una charola para horno con papel encerado.",
      "Hornea las galletas de chocolate a 180 °C durante 10 minutos o hasta que estén bien cocidas.",
      "Coloca un poco de helado de vainilla en una de las galletas y cierra con otra galleta, presiona ligeramente y disfruta de tu sándwich de chocolate con helado.",
    ],
    link: "postres/3",
    category: "Postres"

  },
  cheesecakeLotus: {
    title: "Cheesecake de Lotus",
    time: 180,
    difficulty: "Fácil",
    image: cheesecakeLotus,
    ingredients: [
      "300 gramos de Lotus Biscoff, molida, para la base",
      "125 gramos de mantequilla, para la base",
      "1 cucharadita de flor de sal, para la base",
      "500 gramos de queso crema, para el relleno de queso",
      "250 gramos de Crema de Lotus Biscoff, para el relleno de queso",
      "100 gramos de azúcar glas, para el relleno de queso",
      "1 cucharada de esencia de vainilla, para el relleno de queso",
      "300 mililitros de crema para batir, para el relleno de queso",
      "al gusto de Crema de Lotus Biscoff, para decorar",
      "al gusto de Lotus Biscoff, molidas",
      "al gusto de Lotus Biscoff, enteras",
    ],
    steps: [
      "Licúa las galletas hasta que estén bien molidas. Coloca en un bowl junto con la mantequilla y la flor de sal y mezcla hasta integrar. Reserva.",
      "Bate el queso crema, la crema de Lotus Biscoff, el azúcar glas y la esencia de vainilla hasta integrar. Agrega la crema batida y continúa batiendo hasta incorporar.",
      "Coloca la mezcla de galleta con mantequilla en un aro de repostería y aplana con una cuchara. Coloca la mezcla de queso encima y refrigera por 2 horas o hasta que esté firme.",
      "Calienta ligeramente la Crema de Lotus Biscoff en el microondas. Vierte sobre el cheesecake y decora con Lotus Biscoff molidas y enteras.",
    ],
    link: "postres/4",
    category: "Postres"

  },
  muffins: {
    title: "Muffins de Zanahoria",
    time: 45,
    difficulty: "Media",
    image: muffins,
    ingredients: [
      "250 gramos de harina, tamizada",
      "250 gramos de mantequilla",
      "250 gramos de azúcar",
      "250 gramos de huevo, de 4 a 5 piezas",
      "3 tazas de zanahoria, rallada",
      "1/2 taza de nuez, picada",
      "2 cucharadas de extracto de vainilla",
      "2 cucharadas de polvo para hornear",
      "1 cucharada de canela en polvo",
      "1/2 taza de leche de vaca",
    ],
    steps: [
      "Acremar la mantequilla con la azúcar hasta tener una textura tersa y que no se sienta moronosa.",
      "Una vez hecho el procedimiento anterior, agregar los huevos uno a uno dando tiempo a que se integren perfectamente.",
      "Posteriormente, cernir la harina con el polvo para hornear y la canela, y agregar a la mezcla anterior intercalando con la leche y la vainilla, sin dejar grumos.",
      "Por último, agregar la nuez y la zanahoria integrando en forma envolvente para evitar sacar el aire a la preparación.",
      "Poner la preparación anterior distribuida en 15 panecillos, llenar hasta tres cuartas partes y hornear a 180 °C por 25 minutos aproximadamente o hasta que al meter un palillo este salga limpio.",
    ],
    link: "postres/5",
    category: "Postres"

  },
};

export default postres;
