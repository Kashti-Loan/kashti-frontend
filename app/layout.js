//Components
import { Footer, Header, MobileHeader } from "@components";
//Global Style
import "@styles/global.scss";
// Bootstrap Css
import "bootstrap/dist/css/bootstrap.min.css";
// Slick Slider Css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from "next/script";

export const metadata = {
  title: "Kashti",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5ZS3LZ44');`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5ZS3LZ44"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <div id={"popupContainer"}></div>
        <Header />
        <MobileHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
