import React, { useEffect } from 'react';

const KlookDealsWidget = () => {
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
      data-aid="50494"
      data-city_id=""
      data-country_id=""
      data-tag_id="0"
      data-currency=""
      data-lang=""
      data-label1=""
      data-label2=""
      data-label3=""
      data-prod="deals_widget"
      data-total="6"
    >
      <a href="//www.klook.com/">Klook.com</a>
    </ins>
  );
};

export default KlookDealsWidget;
