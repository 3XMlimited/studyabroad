import React from "react";

export default () => (
  // console.log(track)
  <React.Fragment>
    <script>var newURL =window.location.pathname</script>
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
                fbq('init', '227423133626581');
                fbq('init', '881941526695481');
                fbq('init', '663938491921697');
                fbq('init', '470924325983613');
                fbq('track', 'PageView');
                if(pathname.includes('questions')){
                    fbq('track', 'Lead');
                };
               `,
      }}
    />
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<img height="1" width="1" style="display:none"
                    src="https://www.facebook.com/tr?id=227423133626581&ev=PageView&noscript=1"
                />
                <img height="1" width="1" style="display:none"
                    src="https://www.facebook.com/tr?id=881941526695481&ev=PageView&noscript=1"
                />
                 <img height="1" width="1" style="display:none"
                    src="https://www.facebook.com/tr?id=6639384919216971&ev=PageView&noscript=1"
                />
                    <img height="1" width="1" style="display:none"
                    src="https://www.facebook.com/tr?id=470924325983613&ev=PageView&noscript=1"
                />
                `,
      }}
    />
  </React.Fragment>
);
// fbq('track', 'PageView');`,
