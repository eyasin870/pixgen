import React from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';

const TopGenerations = async() => {
   const res = await fetch("https://pixgen-blue.vercel.app/data.json");
  const photos = await res.json();
  const topPhotos = photos.slice(0, 8);
  // console.log(topPhotos);
  return (
    <div className='max-w-7xl mx-auto'>
    <h1 className='font-bold text-2xl my-5'> Top Generations</h1>
    <div  className='grid grid-cols-4 gap-5'>
      {
        topPhotos.map((photo,ind)=><PhotoCard key={ind} photo={photo}>

        </PhotoCard>)
      }
    </div>
      
    </div>
  );
};

export default TopGenerations;