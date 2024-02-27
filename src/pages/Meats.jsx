import React from 'react';
import Container from '../components/Container';
import Grid from '../components/Grid';
import data from '../data';

const Meats = () => {
  return (
    <div className='flex flex-col items-center justify-center py-28'>
      <h1 className='font-primary text-3xl font-extrabold'>CARNES</h1>
      <Container>
        <Grid data={data} />
      </Container>
    </div>
  );
}

export default Meats;
