import React from "react";
import { Partytown } from "@builder.io/partytown/react";
// You might prefer to add these as an env vars
const ORIGIN = "https://www.googletagmanager.com";

const resolveUrl = (url) => {
  if (
    url.hostname === "www.google-analytics.com" ||
    url.hostname === "connect.facebook.net"
  ) {
    var proxyUrl = new URL(
      `https://coop-atm.mygenfcu.workers.dev/?${url.href}`
    );
    // proxyUrl.searchParams.append('', )
    return proxyUrl;
  }
  return url;
};

export const onRenderBody = ({ setHeadComponents }) => {
  if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test")
    return null;
  setHeadComponents([
    <Partytown key="partytown" forward={["gtag"]} resolveUrl={resolveUrl} />,
    <script
      key="google-analytics"
      type="text/partytown"
      src={`${ORIGIN}/gtag/js?id=${process.env.GATSBY_GTAG}`}
    />,
    <script
      key="google-analytics-config"
      type="text/partytown"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(){ window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.GATSBY_GTAG}', { send_page_view: false })`,
      }}
    />,
  ]);
};
