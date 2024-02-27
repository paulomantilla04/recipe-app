import pepino from '../assets/pepino-limon.webp'
import horchata from '../assets/horchata.webp'
import jamaica from '../assets/jamaica-guayaba.webp'
import naranjada from '../assets/naranjada.webp'
import mango from '../assets/mango.webp'

const bebidas = {
    pepino: {
        title: "Pepino con Limón",
        time: 15,
        difficulty: "Fácil",
        image: pepino,
        ingredients: ["2 pepinos, pelados, sin semillas y cortados en cubitos", "5 cucharadas de azúcar", "2 tazas de hielo", "1 litro de agua, natural", "4 limones"],
        steps: [
            "En una licuadora colocar y moler los pepinos (sin semillas), el hielo, azúcar y el agua.",
            "Agregar el jugo de los limones.",
            "Servir el agua fresca."
        ],
    },
    horchata: {
        title: "Horchata",
        time: 120,
        difficulty: "Media",
        image: horchata,
        ingredients: ["2 tazas de arroz", "3 tazas de agua, caliente", "1 taza de leche de vaca", "1/2 tazas de leche evaporada", "1/2 tazas de leche condensada", "4 tazas de agua", "2 cucharaditas de vainilla líquida", "1/2 tazas de azúcar", "1 cucharada de canela en polvo", "Hielo al gusto", "Raja de canela al gusto"],
        steps: [
            "En un bowl remoja el arroz con el agua tibia durante 2 horas como mínimo.",
            "Agrega a la licuadora el arroz con el agua de remojo, la leches, el agua, la esencia de vainilla, el azúcar, la canela y licúa hasta obtener una mezcla sin grumos. Cuela y vierte en una jarra con hielos.",
            "Sirve el agua en vasos y decora con rajas de canela."
        ],
    },
    jamaica: {
        title: "Jamaica con Guayaba",
        time: 180,
        difficulty: "Media",
        image: jamaica,
        ingredients: [" 2 litros de agua", " 300 gramos de flor de Jamaica", " 1 rama de canela", " 5 piezas de guayabas medianas", "Azúcar al gusto", "Hielo al gusto"],
        steps: [
            "Para hacer la receta de agua de Jamaica con guayaba, primero prepara la infusión de la Jamaica. Para ello, en un recipiente con un litro de agua coloca la flor de Jamaica y la rama de canela. A continuación, deja reposar durante 3 horas o bien durante una noche completa. Debes saber que cuanto más tiempo la dejes reposar, mejor sabor soltará.",
            "Corta las guayabas quitando el rabillo y la punta. Luego, rebana para que sea fácil molerlas.",
            "Pasa las guayabas a la licuadora con una taza de agua y azúcar al gusto, también puedes usar algún edulcorante de tu preferencia.",
            "Cuando esté lista la infusión de Jamaica con canela, drena el agua y vacía en una jarra.",
            "Por último, vacía también la guayaba licuada pasando por un colador antes. A continuación, agrega 3 tazas más de agua y mezcla hasta que se integren.",
            "Prepara un vaso con hielo al gusto y sirve. ¡Ya puedes disfrutar de esta agua de Jamaica con guayaba! Cuéntanos en los comentarios tu opinión y comparte con nosotros una fotografía del resultado final."
        ],
    },
    naranjada: {
        title: "Naranjada",
        time: 15,
        difficulty: "Fácil",
        image: naranjada,
        ingredients: ["600 ml de jugo de naranja", "1 naranja cortada en rodajas", "400 ml de agua mineral", "25 gr de azúcar morena", "Hojas de hierbabuena", "Hielo al gusto"],
        steps: [
            "Exprime las naranjas hasta conseguir la cantidad de zumo indicada y decide cuanto de grumoso quieres el zumo. En mi caso y sobre todo para esta naranjada me gusta colarlo, pero eso ya va en gustos.",
            "Pon el zumo de naranja en una jarra o similar y échale también el agua con gas. Déjala en la nevera hasta el momento de servirla.",
            "Lava la otra naranja que he indicado en ingredientes, sécala y córtala en rodajas finas.",
            "Parte por la mitad las rodajas y reserva la mitad para decoración. La otra mitad, ponlas en un mortero junto con el azúcar moreno y unas hojas de hierbabuena, y machácalo todo junto un poco para que se mezclen los sabores. Solo estamos buscando que la naranja suelte su jugo, que la hierbabuena desprenda su olor y el azúcar se disuelva un poco, así que no lo machaques demasiado para evitar que la hierbabuena se trocee demasiado.",
            "Reparte este majado en los vasos, por ejemplo que tenga cada vaso 2 o 3 trozos de naranja junto con algunas hojas de hierbabuena y azúcar. Lo que te sobre puedes dejarlo en la jarra con el zumo de naranja y el agua con gas.",
            "A la hora de servirla reparte hielos en los vasos, cantidad al gusto, y por encima la naranjada. Remueve un poco con una cuchara para que se mezclen los ingredientes con el majado, y ya la tienes lista.",
            "Puedes decorar los vasos con las medias rodajas de naranja que habíamos reservado antes."
        ],
    },
    mango: {
        title: "Mango cremoso",
        time: 15,
        difficulty: "Fácil",
        image: mango,
        ingredients: ["1/2 tazas de mango en almíbar", "1 taza de leche condensada", "1 taza de leche evaporada", "1 cucharadita de vainilla líquida", "Hielo al gusto", "4 tazas de agua", "Azúcar al gusto", "1/4 tazas de mango picado en cubito"],
        steps: [
            "Licúa el mango junto con la leche condensada, la leche evaporada y la vainilla, hasta integrar muy bien.",
            "Añade suficiente hielo en una jarra y vierte el agua, enseguida agrega la mezcla de mango e incorpora bien y si lo deseas puedes agregar azúcar al gusto. ¡Listo! Decora con cubitos de mango."
        ],
    }
}

export default bebidas;