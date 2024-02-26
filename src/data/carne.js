import burger from '../assets/burger.webp';
import quesadillas from '../assets/quesadillas.webp';

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
        ]
    },
    quesadillas: {
        title: "Quesadillas de carne",
        time: 35,
        difficulty: "Fácil",
        image: quesadillas,
        ingredients: ["2 tortillas de maíz o de trigo", "200 gramos de carne de res", "1 cebolla pequeña, picada", "2 cucharadas de aceite de oliva", "Sal al gusto", "Pimienta al gusto"],
        steps: [
            "Comienza calentando una sartén a fuego medio-alto. Añade una cucharada de aceite de oliva y espera a que se caliente un poco.",
            "Ahora, añade la carne de res a la sartén. Saltea la carne hasta que esté bien cocida y dorada. Remueve la carne de la sartén y resérvala.",
            "Reduce el fuego a medio y añade la cucharada de aceite de oliva restante a la sartén. Incorpora la cebolla y el pimiento verde. Cocina las verduras hasta que estén tiernas.",
            "Es momento de volver a introducir la carne en la sartén con las verduras. Mezcla bien y sazona con sal y pimienta al gusto.",
            "Finalmente, coloca una tortilla en otra sartén a fuego medio. Espolvorea la mitad de la tortilla con el queso rallado y añade la mezcla de carne y verduras sobre el queso. Dobla la tortilla a la mitad y cocina hasta que el queso se derrita y la tortilla esté dorada."
        ]
    }
};

export default carne;