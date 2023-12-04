import React, { useEffect, useRef, useState } from 'react';
import ReactLoading from 'react-loading';
import { primary_dark } from '../Config';

function SheetShow({ url }) {
  
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    //console.log(slide_url)
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true)
  },[url])

  //const sheet_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQFvW37K3fGLqAF5yK-EvHL9mo9SbUyzY2KD2ujPeY9CTPKdVUcFIDrPgNDqlBbQn-de24CqmZNBSNn/pubhtml?gid=1936167829&amp;single=true&amp;widget=true&amp;headers=false"
  const sheet_url = url

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
        title='Linkkk'
        onLoad={handleIframeLoad}
        src={sheet_url}
        width="100%" 
        height="650"  
        mozallowfullscreen="false" 
        webkitallowfullscreen="false"
        >
      </iframe>
    </div>
    </>
  );
}

export default SheetShow