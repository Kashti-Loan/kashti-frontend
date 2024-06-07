import { useEffect } from 'react';
import { Footer, Header, MobileHeader } from "@components";
// Global Style
import "@styles/global.scss";
// Bootstrap Css
import "bootstrap/dist/css/bootstrap.min.css";
// Slick Slider Css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from "next/script";
import { PersonalLoanProvider } from "@context/PersonalLoanContext";

export const metadata = {
  title: "Kashti",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    const buttons = document.querySelectorAll('button[data-event]');
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        let eventName = this.getAttribute('data-event');
        fbq('track', eventName);
      });
    });

    // Cleanup event listeners on unmount
    return () => {
      buttons.forEach(button => {
        button.removeEventListener('click', function () {
          let eventName = this.getAttribute('data-event');
          fbq('track', eventName);
        });
      });
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <Script id="fb-pixel">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '476583331565159');
          fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=476583331565159&ev=PageView&noscript=1"
          />
        </noscript>

        <Script id="gtm">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5ZS3LZ44');`}
        </Script>
        <Script id="fb-pixel-2">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1145963663413552');
          fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1145963663413552&ev=PageView&noscript=1"
          />
        </noscript>
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
        <PersonalLoanProvider>
          <Header />
          <MobileHeader />
          {children}
          <Footer />
        </PersonalLoanProvider>
      </body>
    </html>
  );
}
