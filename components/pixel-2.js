import React from "react";

export default () => (
  <React.Fragment>
    <script
      dangerouslySetInnerHTML={{
        __html: `!function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                x=function(){return window.location.pathname.split('/')[1]}
                pathname=x()
     
                if(pathname==='studyabroad' ||pathname === 'questions' ) {
                  fbq('init', '227423133626581');
                  fbq('track', 'PageView');
                  if(pathname === 'questions'){
                     fbq('track', 'Lead');
                }
                }
               `,
      }}
    />
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<img height="1" width="1" style="display:none"
                    src="https://www.facebook.com/tr?id=227423133626581&ev=PageView&noscript=1"
                />`,
      }}
    />
  </React.Fragment>
);
// fbq('track', 'PageView');`,
