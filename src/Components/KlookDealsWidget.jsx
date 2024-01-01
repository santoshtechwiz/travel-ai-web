import React, { useEffect } from "react";

const KlookDealsWidget = () => {
  useEffect(() => {
    // Embed the Klook affiliate widget script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://affiliate.klook.com/widget/fetch-iframe-init.js";
    document.getElementsByTagName("head")[0].appendChild(script);

    return () => {
      // Cleanup: remove the script when the component unmounts
      document.getElementsByTagName("head")[0].removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <ins
      class="klk-aff-widget"
      data-adid="792195"
      data-lang=""
      data-currency=""
      data-cardH="126"
      data-padding="92"
      data-lgH="470"
      data-edgeValue="655"
      data-cid="-1"
      data-tid="-1"
      data-amount="6"
      data-prod="dynamic_widget"
    >
      <a href="//www.klook.com/">Klook.com</a>
    </ins>
  );
};

export default KlookDealsWidget;
