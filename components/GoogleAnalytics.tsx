'use client';

import Script from 'next/script';
import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  measurementId: string;
}

export default function GoogleAnalytics({
  measurementId,
}: GoogleAnalyticsProps) {
  useEffect(() => {
    const updateConsent = () => {
      if (
        typeof window !== 'undefined' &&
        window.Cookiebot?.consent &&
        window.gtag
      ) {
        window.gtag('consent', 'update', {
          ad_storage: window.Cookiebot.consent.marketing ? 'granted' : 'denied',
          ad_user_data: window.Cookiebot.consent.marketing
            ? 'granted'
            : 'denied',
          ad_personalization: window.Cookiebot.consent.marketing
            ? 'granted'
            : 'denied',
          analytics_storage: window.Cookiebot.consent.statistics
            ? 'granted'
            : 'denied',
        });
      }
    };

    window.addEventListener('CookiebotOnConsentReady', updateConsent);
    window.addEventListener('CookiebotOnConsentChange', updateConsent);

    return () => {
      window.removeEventListener('CookiebotOnConsentReady', updateConsent);
      window.removeEventListener('CookiebotOnConsentChange', updateConsent);
    };
  }, []);

  return (
    <>
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="6b55f8e9-7d17-4845-8e2e-0b713442e1af"
        data-blockingmode="auto"
        type="text/javascript"
      />
      <Script
        id="GoogleAnalytics"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="GoogleAnalyticsCode"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
          });
          gtag('config', '${measurementId}');
          gtag('consent', 'update', {
            ad_storage: (typeof Cookiebot !== 'undefined' && Cookiebot.consent?.marketing) ? 'granted' : 'denied',
            ad_user_data: (typeof Cookiebot !== 'undefined' && Cookiebot.consent?.marketing) ? 'granted' : 'denied',
            ad_personalization: (typeof Cookiebot !== 'undefined' && Cookiebot.consent?.marketing) ? 'granted' : 'denied',
            analytics_storage: (typeof Cookiebot !== 'undefined' && Cookiebot.consent?.statistics) ? 'granted' : 'denied',
          });
        `,
        }}
      />
    </>
  );
}
