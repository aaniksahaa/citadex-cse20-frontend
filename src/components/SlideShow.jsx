import React, { useEffect, useRef, useState } from 'react';
import ReactLoading from 'react-loading';
import { primary_dark } from '../Config';

//demo slide_url = 'https://docs.google.com/presentation/d/e/2PACX-1vQd4xEqVUvoaOuLkOivk4RyCX4Xns0nblLOMqmCdiflzYnW0AUCbe4jGySJmo0QLs63A-2uIgOd6ADp'

function SlideShow({ slide_url }) {
  
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    console.log(slide_url)
    setLoading(false);
  };

  return (
    <>
    {loading && (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <ReactLoading type={'spinningBubbles'} color={primary_dark} height={150} width={150} />
      </div>
    )}
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <br></br>
      <iframe 
        onLoad={handleIframeLoad}
        src={slide_url + "/embed?start=true&loop=false&delayms=10000&amp;rm=minimal"} 
        frameborder="0" 
        width="1200" 
        height="710" 
        allowfullscreen="true" 
        mozallowfullscreen="true" 
        webkitallowfullscreen="true">
      </iframe>
    </div>
    </>
  );
}

export default SlideShow