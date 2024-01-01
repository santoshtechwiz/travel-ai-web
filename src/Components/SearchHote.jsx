import React, { useEffect } from 'react';
import KlookDealsWidget from './KlookDealsWidget';

const KlookAffiliateWidgetSearch = () => {
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
    <div className='flex w-full'>
      <div className='w-3/5 pr-4'>
        <KlookDealsWidget />
      </div>
      <div className='w-2/5 h-screen'>
      <ins
        className="klk-aff-widget"
        data-wid="50494"
        data-height="340px"
        data-adid="792170"
        data-lang=""
        data-prod="search_vertical"
        data-currency=""
        style={{ width: '20%' }} // Adjust the width as needed
      >
        <a href="//www.klook.com/?aid=">Klook.com</a>
      </ins>
      </div>
    </div>
  );
};

export default KlookAffiliateWidgetSearch;
