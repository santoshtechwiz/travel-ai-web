import React, { useEffect } from 'react';

const AffiliateTitles = () => {
  useEffect(() => {
    // Embed the Klook affiliate widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://affiliate.klook.com/widget/fetch-iframe-init.js';
    document.getElementsByTagName('head')[0].appendChild(script);

    return () => {
      // Cleanup: remove the script when the component unmounts
      document.getElementsByTagName('head')[0].removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <ins
      className="klk-aff-widget"
      data-wid="50494"
      data-bgtype="Shinkansen"
      data-adid="792180"
      data-lang="en"
      data-prod="banner"
      data-width="300"
      data-height="250"
    >
      <a href="//www.klook.com/?aid=">Klook.com</a>
    </ins>
  );
};

export default AffiliateTitles;
