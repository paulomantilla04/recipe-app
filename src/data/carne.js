import burger from '../assets/burger.webp';
import quesadillas from '../assets/quesadillas.webp';
import pollo from '../assets/pollo-frito.webp';
import filet from '../assets/filet-mignon.webp';
import roast from '../assets/roast-beef.webp';

const carne = {
    burger: {
        title: "Hamburguesa",
        time: 30,
        difficulty: "Fácil",
        image: burger,
        ingredients: ["Carne molida picada", "Panes de hamburguesa", "Queso cheddar", "Pimienta molida", "Lechuga", "Tomate", "Pepinillos", "Sal", "Aceite de oliva"],
        steps: [
            "Preparar la hamburguesa es muy sencillo, al contrario de la gran mayoría de gente que añaden huevo, pan, leche, etc. nosotros sólo la sazonaremos con sal y pimienta para que queden jugosas y con sabor a carne.",
            "Dividimos la carne en cuatro partes y apretamos un poco cada una para hacer la forma de la hamburguesa.",
            "Por otro, tostamos el pan en una plancha por la parte interna hasta que esté dorado y untamos un poquito de aceite.",
            "A continuación, lavamos y cortamos la lechuga, el tomate y el pepinillo y reservamos. Hacemos las hamburguesas en una plancha, una parrilla o una sartén y cuando estén listas colocamos en el pan. Directamente ponemos encima una loncha de queso cheddar y cerramos el pan."
        ],
        link: "carnes/1",
        category: "Carnes"
    },
    quesadillas: {
        title: "Quesadillas de carne",
        time: 35,
        difficulty: "Fácil",
        image: quesadillas,
        ingredients: ["2 tortillas de maíz o de trigo.", "200 gramos de carne de res.", "1 cebolla pequeña, picada", "2 cucharadas de aceite de oliva", "Sal al gusto", "Pimienta al gusto"],
        steps: [
            "Comienza calentando una sartén a fuego medio-alto. Añade una cucharada de aceite de oliva y espera a que se caliente un poco.",
            "Ahora, añade la carne de res a la sartén. Saltea la carne hasta que esté bien cocida y dorada. Remueve la carne de la sartén y resérvala.",
            "Reduce el fuego a medio y añade la cucharada de aceite de oliva restante a la sartén. Incorpora la cebolla y el pimiento verde. Cocina las verduras hasta que estén tiernas.",
            "Es momento de volver a introducir la carne en la sartén con las verduras. Mezcla bien y sazona con sal y pimienta al gusto.",
            "Finalmente, coloca una tortilla en otra sartén a fuego medio. Espolvorea la mitad de la tortilla con el queso rallado y añade la mezcla de carne y verduras sobre el queso. Dobla la tortilla a la mitad y cocina hasta que el queso se derrita y la tortilla esté dorada."
        ],
        link: "carnes/2",
        category: "Carnes"
    },
    pollo: {
        title: "Pollo Frito",
        time: 24,
        difficulty: "Media",
        image: pollo,
        ingredients: ["2 pechugas de pollo sin piel ni hueso.", "1 huevo.", "1/4 taza de leche.", "1 taza de harina de trigo.", "1 cucharadita de polvo de ajo.", "1 cucharadita de polvo de cebolla.", "1 cucharadita de sal", "Aceite para freír."],
        steps: [
            "Para comenzar, vamos a preparar el rebozado para el pollo. En un tazón mediano, mezcla la harina, el polvo de ajo, el polvo de cebolla y la sal. En otro tazón, bate el huevo y la leche.",
            "Sumerge cada pechuga de pollo en la mezcla de huevo y luego en la mezcla de harina, asegurándote de cubrir completamente el pollo en cada paso.",
            "Una vez que hayas rebozado ambas pechugas, calienta suficiente aceite en una sartén a fuego medio-alto. Una vez que el aceite esté caliente, coloca las pechugas en la sartén y cocina durante 5-6 minutos por lado o hasta que estén doradas por fuera y bien cocinadas en su interior.",
            "Si quieres puedes usar un termómetro para carne para asegurarte de que alcancen una temperatura interna de 73 grados centígrados (165 grados Fahrenheit).",
            "Cuando las pechugas estén cocidas, colócalas en un plato con papel de cocina para absorber cualquier exceso de aceite. Sirve inmediatamente y disfruta de tu delicioso pollo frito crujiente. Puedes acompañarlo con tus verduras o patatas fritas favoritas.",
        ],
        link: "carnes/3",
        category: "Carnes"
    },
    filet: {
        title: "Filet Mignon",
        time: 45,
        difficulty: "Fácil",
        image: filet,
        ingredients: ["4 unidades de Medallones de filet mignon", "Sal al gusto", "Pimienta al gusto", "½ cucharadita de Aceite de oliva sabor suave"],
        steps: [
            "En primer lugar dejamos que la carne repose unos 30 minutos antes de cocinarla. Pintamos la plancha o parrilla con un poco de aceite suave, muy poco solo media cucharadita. Encendemos el fuego fuerte y dejamos que la plancha se caliente. Sazonamos la carne con sal y pimienta. Cuando hayan pasado unos minutos y la plancha o parrilla estén bien calientes añadimos los filetes y bajamos el fuego a la mitad.",
            "Cocinar durante 6 minutos por lado si te gusta en su punto, ligeramente poco hecha en su interior. Si te gusta algo más cruda en el interior sería 5 minutos. Para carne más hecha nos vamos a 7 minutos por lado.",
            "Importante, una vez cocinada la carne retirarla de la plancha y dejar que repose al menos 5 minutos antes de servir.",
        ],
        link: "carnes/4",
        category: "Carnes"
    },
    roastBeef: {
        title: "Roast Beef",
        time: 120,
        difficulty: "Media",
        image: roast, 
        ingredients: ["Una pieza de lomo de buey o ternera de un kilo y medio", "2 dientes de ajo", "4 cebollitas francesas (chalotas)", "1 vaso de jerez para cocinar", "1 vaso de agua", "Aceite de oliva", "Sal", "Pimienta blanca molida"],
        steps: [
            "Salpimentamos la carne al gusto.",
            "En una sartén colocamos un poco de aceite para sellar el trozo de carne. La calentamos a fuego fuerte, y colocamos la carne dejándola un minuto por cada lado. De esa manera, se sellará y no perderá sus jugos, con lo que el roast beef estará jugosísimo. Retiramos de la sartén.",
            "Encendemos el horno a 250 grados para que vaya tomando temperatura.",
            "En una fuente para horno colocamos un lecho de aceite de oliva, dos dientes de ajo pelados y cuatro cebollitas francesas, así como la carne. Regamos con medio vaso de agua.",
            "Introducimos la fuente en el horno bien caliente, y dejamos durante 17 minutos.",
            "Abrimos el horno, sacamos con cuidado la fuente, y le damos la vuelta a la carne.",
            "Añadimos el vasito de jerez para cocinar, y el otro medio vaso de agua. Volvemos a meter al horno.",
            "Pasados otros 17 minutos, sacamos del horno y dejamos enfriar para cortar.",
            "Servimos, acompañado de las cebollitas.",
        ],
        link: "carnes/5",
        category: "Carnes"
    },
};

export default carne;