import React, { useEffect } from "react";

const KlookAffiliateWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://affiliate.klook.com/widget/fetch-iframe-init.js";
    document.getElementsByTagName("head")[0].appendChild(script);

    return () => {
      document.getElementsByTagName("head")[0].removeChild(script);
    };
  }, []);

  return (
    <ins
      className="klk-aff-widget"
      data-adid="792134"
      data-lang=""
      data-currency=""
      data-cardH="126"
      data-padding="92"
      data-lgH="470"
      data-edgeValue="655"
      data-cid="-1"
      data-tid="-1"
      data-amount="4"
      data-prod="dynamic_widget"
    >
      <a href="//www.klook.com/">Klook.com</a>
    </ins>
  );
};

export default KlookAffiliateWidget;
