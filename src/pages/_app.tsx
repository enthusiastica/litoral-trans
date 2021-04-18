import "../styles/styles.sass"

import * as React from "react"

import Head from "next/head"

import { DefaultSeo } from "next-seo"

import Script from "../components/elements/Script"

const App = ({ Component, props }) => (
  <>
    <Head>
      <meta charSet="utf-8" />

      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />

      <Script
        data={`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":
        new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src=
        "https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,"script","dataLayer","${process.env.GTM}");
      `}
      />

      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      <meta name="theme-color" content={process.env.colorPrimary} />
      <meta name="application-name" content={process.env.name} />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content={process.env.name} />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="author" content={process.env.authorName} />
      <link rel="manifest" href="/static/manifest.json" />
      <link rel="search" type="application/opensearchdescription+xml" title={`${process.env.name} | Buscador`} href="/static/opensearch.xml" />

      {/* Generated by pwa-asset-generator */}
      <link rel="icon" type="image/png" sizes="196x196" href="/static/images/brand/favicon-196.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link rel="apple-touch-icon" href="/static/images/brand/apple-icon-180.png" />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-2048-2732.jpg"
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-2732-2048.jpg"
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-1668-2388.jpg"
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-2388-1668.jpg"
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-1536-2048.jpg"
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-2048-1536.jpg"
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-1668-2224.jpg"
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-2224-1668.jpg"
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-1620-2160.jpg"
        media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-2160-1620.jpg"
        media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-1284-2778.jpg"
        media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-2778-1284.jpg"
        media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-1170-2532.jpg"
        media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-2532-1170.jpg"
        media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-1125-2436.jpg"
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-2436-1125.jpg"
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-1242-2688.jpg"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-2688-1242.jpg"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-828-1792.jpg"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-1792-828.jpg"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-1242-2208.jpg"
        media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-2208-1242.jpg"
        media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-750-1334.jpg"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-1334-750.jpg"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-640-1136.jpg"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/static/images/brand/apple-splash-1136-640.jpg"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
      />
    </Head>
    <DefaultSeo titleTemplate={`${process.env.name} | %s`} />
    <Component {...props} />
  </>
)

export default App
