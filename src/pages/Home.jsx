import React from 'react'
import recetas from '../data/index';
import Box from '../components/Box';
import Grid from '../components/GridTwo';






const Home = () => {


  const selectTopRecipe = (recipes) => {
    const categories = Object.keys(recipes);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const recipe = recipes[randomCategory];
    const keys = Object.keys(recipe);
    const randomIndex = Math.floor(Math.random() * keys.length);
    return recipe[keys[randomIndex]];
  }

  const topRecipe = selectTopRecipe(recetas);

  return (
    <main>
          <section className='flex max-[640px]:flex-col items-center justify-center py-28 bg-[#F0F5EF]'>
              <Box title={topRecipe.title} image={topRecipe.image} to={topRecipe.link} category={topRecipe.category}/>
            <div className='m-6'>
              <h1 className='font-primary font-extrabold text-4xl text-center'>RECETA DEL DÍA</h1>
              <p className='text-xs max-w-64'>Deléitate con este plato exquisito que combina sabores frescos y texturas irresistibles. Esta receta te transportará a un viaje culinario lleno de aromas tentadores y colores vibrantes. Con ingredientes cuidadosamente seleccionados y una preparación sencilla, esta delicia es perfecta para sorprender a tus invitados o simplemente para disfrutar en familia. </p>
            </div>
          </section>
          <section className='flex flex-col items-center justify-center bg-[#F0F5EF]'>
            <h1 className='font-primary font-extrabold text-3xl text-center'>TOP RECETAS DEL MES</h1>
            <Grid data={recetas}/>
          </section>
    </main>
  )
}

export default Home