import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.jpg";

// #c7fffa
// #81ebf2
// #ff7606

const PrivacyPolicy = () => {
  return (
    <div className="relative h-full min-h-screen w-full bg-white grid grid-rows-[1fr_60px]">
      <div className="h-full">
        {/* navbar */}
        <div className="sticky top-0 z-50 h-[60px] w-full bg-gradient-to-t from-[#81ebf2] to-[#c7fffa] flex items-center justify-center px-[20px]">
          <div className="h-full w-full max-w-[1200px] flex items-center justify-between">
            <div className="h-full flex items-center">
              <Image src={logo} alt="logo" className="h-full w-fit min-w-[60px]" />
            </div>
            <div className="h-full flex items-center gap-[10px] py-[10px]">
              <Link href={"/home/quizzes"}>
                <button className="h-full text-sm text-black font-medium px-[10px] duration-200 hover:text-[#ff7606] sm:text-base" >
                  QUIZZES
                </button>
              </Link>
              <button className="h-full text-sm text-[#ff7606] font-medium px-[10px] pointer-events-none duration-200 sm:text-base" >
                Privacy Policy
              </button>
              <Link href={"/home/contact"}>
                <button className="h-full text-sm text-black font-medium px-[10px] duration-200 hover:text-[#ff7606] sm:text-base" >
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* policy */}
        <div className="h-fit w-full bg-white flex items-center justify-center py-[50px] px-[20px]">
          <div className="h-fit w-full max-w-[1200px] flex flex-col items-start gap-[10px]">
            <h1 className='text-3xl font-semibold text-justify leading-normal sm:text-xl'>Privacy Policy</h1>
            <p className='font-normal text-justify leading-normal sm:text-sm'>Last updated: September 27, 2023</p>
            <p className='font-normal text-justify leading-normal sm:text-sm'>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
            <p className='font-normal text-justify leading-normal sm:text-sm'>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
            
            <h1 className='w-full text-3xl font-semibold text-justify leading-normal sm:text-xl'>Interpretation and Definitions</h1>
            
            <h2 className='text-2xl font-semibold text-justify leading-normal sm:text-lg'>Interpretation</h2>
            <p className='font-normal text-justify leading-normal sm:text-sm'>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
            
            <h2 className='text-2xl font-semibold text-justify leading-normal sm:text-lg'>Definitions</h2>
            <p className='font-normal text-justify leading-normal sm:text-sm'>For the purposes of this Privacy Policy:</p>
            <ul className='list-disc list-inside flex flex-col gap-y-[10px]'>
              <li>
                <p className='font-normal text-justify leading-normal inline sm:text-sm'><span className='font-semibold'>Account</span> means a unique account created for You to access our Service or parts of our Service.</p>
              </li>
              <li>
                <p className='font-normal text-justify leading-normal inline sm:text-sm'><span className='font-semibold'>Affiliate</span> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
              </li>
              <li>
                <p className='font-normal text-justify leading-normal inline sm:text-sm'><span className='font-semibold'>Company</span> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to 3XM Limited, Hong Kong.</p>
              </li>
              <li>
                <p className='font-normal text-justify leading-normal inline sm:text-sm'><span className='font-semibold'>Cookies</span> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>
              </li>
              <li>
                <p className='font-normal text-justify leading-normal inline sm:text-sm'><span className='font-semibold'>Country</span> refers to:  Hong Kong SAR China</p>
              </li>
              <li>
                <p className='font-normal text-justify leading-normal inline sm:text-sm'><span className='font-semibold'>Device</span> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
              </li>
              <li>
                <p className='font-normal text-justify leading-normal inline sm:text-sm'><span className='font-semibold'>Personal Data</span> is any information that relates to an identified or identifiable individual.</p>
              </li>
              <li>
                <p className='font-normal text-justify leading-normal inline sm:text-sm'><span className='font-semibold'>Service</span> refers to the Website.</p>
              </li>
              <li>
                <p className='font-normal text-justify leading-normal inline sm:text-sm'><span className='font-semibold'>Service Provider</span> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>
              </li>
              <li>
                <p className='font-normal text-justify leading-normal inline sm:text-sm'><span className='font-semibold'>Usage Data</span> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
              </li>
              <li>
                <p className='font-normal text-justify leading-normal inline sm:text-sm'><span className='font-semibold'>Website</span> refers to Esquiz, accessible from <a className='text-blue-600' href="https://esquiz.com/" rel="external nofollow noopener" target="_blank">https://esquiz.com/</a></p>
              </li>
              <li>
                <p className='font-normal text-justify leading-normal inline sm:text-sm'><span className='font-semibold'>You</span> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
              </li>
            </ul>
            
            <h1 className='w-full text-3xl font-semibold text-justify leading-normal sm:text-xl'>Collecting and Using Your Personal Data</h1>
            
            <h2 className='text-2xl font-semibold text-justify leading-normal sm:text-lg'>Types of Data Collected</h2>
            
            <h3 className='text-xl font-semibold text-justify leading-normal sm:text-base'>Personal Data</h3>
            <p className='font-normal text-justify leading-normal sm:text-sm'>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
            <ul className='list-disc list-inside flex flex-col gap-y-[10px] sm:text-sm'>
                <li>Usage Data</li>
            </ul>
            
            <h3 className='text-xl font-semibold text-justify leading-normal sm:text-base'>Usage Data</h3>
            <p className='font-normal text-justify leading-normal sm:text-sm'>Usage Data is collected automatically when using the Service.</p>
            <p className='font-normal text-justify leading-normal sm:text-sm'>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
            <p className='font-normal text-justify leading-normal sm:text-sm'>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
            <p className='font-normal text-justify leading-normal sm:text-sm'>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
            
            <h3 className='text-xl font-semibold text-justify leading-normal sm:text-base'>Tracking Technologies and Cookies</h3>
            <p className='font-normal text-justify leading-normal sm:text-sm'>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>
            <ul className='list-disc list-inside flex flex-col gap-y-[10px] sm:text-sm'>
              <li><span className='font-semibold'>Cookies or Browser Cookies.</span> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</li>
              <li><span className='font-semibold'>Web Beacons.</span> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</li>
            </ul>
            <p className='font-normal text-justify leading-normal sm:text-sm'>Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.</p>
            <p className='font-normal text-justify leading-normal sm:text-sm'>We use both Session and Persistent Cookies for the purposes set out below:</p>
            <ul className='list-disc list-inside flex flex-col gap-y-[10px] sm:text-sm'>
              <li>
                <p className='font-normal text-justify leading-normal inline'><span className='font-semibold'>Necessary / Essential Cookies</span></p>
                <p className='font-normal text-justify leading-normal'>Type: Session Cookies</p>
                <p className='font-normal text-justify leading-normal'>Administered by: Us</p>
                <p className='font-normal text-justify leading-normal'>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
              </li>
              <li>
                <p className='font-normal text-justify leading-normal inline'><span className='font-semibold'>Cookies Policy / Notice Acceptance Cookies</span></p>
                <p className='font-normal text-justify leading-normal'>Type: Persistent Cookies</p>
                <p className='font-normal text-justify leading-normal'>Administered by: Us</p>
                <p className='font-normal text-justify leading-normal'>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
              </li>
              <li>
                <p className='font-normal text-justify leading-normal inline'><span className='font-semibold'>Functionality Cookies</span></p>
                <p className='font-normal text-justify leading-normal'>Type: Persistent Cookies</p>
                <p className='font-normal text-justify leading-normal'>Administered by: Us</p>
                <p className='font-normal text-justify leading-normal'>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
              </li>
            </ul>
            <p className='font-normal text-justify leading-normal sm:text-sm'>For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.</p>
            
            <h2 className='text-2xl font-semibold text-justify leading-normal sm:text-lg'>Use of Your Personal Data</h2>
            <p className='font-normal text-justify leading-normal sm:text-sm'>The Company may use Personal Data for the following purposes:</p>
            <ul className='list-disc list-inside flex flex-col gap-y-[10px] sm:text-sm'>
              <li>
                <p className='font-normal text-justify leading-normal inline'><span className='font-semibold'>To provide and maintain our Service</span>, including to monitor the usage of our Service.</p>
              </li>
              <li>
                <p className='font-normal text-justify leading-normal inline'><span className='font-semibold'>To manage Your Account:</span> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p>
              </li>
              <li>
                <p className='font-normal text-justify leading-normal inline'><span className='font-semibold'>For the performance of a contract:</span> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</p>
              </li>
              <li>
                <p className='font-normal text-justify leading-normal inline'><span className='font-semibold'>To contact You:</span> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>
              </li>
              <li>
                <p className='font-normal text-justify leading-normal inline'><span className='font-semibold'>To provide You</span> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</p>
              </li>
              <li>
                <p className='font-normal text-justify leading-normal inline'><span className='font-semibold'>To manage Your requests:</span> To attend and manage Your requests to Us.</p>
              </li>
              <li>
                <p className='font-normal text-justify leading-normal inline'><span className='font-semibold'>For business transfers:</span> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</p>
              </li>
              <li>
                <p className='font-normal text-justify leading-normal inline'><span className='font-semibold'>For other purposes</span>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</p>
              </li>
            </ul>
            <p className='font-normal text-justify leading-normal sm:text-sm'>We may share Your personal information in the following situations:</p>
            <ul className='list-disc list-inside flex flex-col gap-y-[10px] sm:text-sm'>
              <li><span className='font-semibold'>With Service Providers:</span> We may share Your personal information with Service Providers to monitor and analyze the use of our Service,  to contact You.</li>
              <li><span className='font-semibold'>For business transfers:</span> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
              <li><span className='font-semibold'>With Affiliates:</span> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
              <li><span className='font-semibold'>With business partners:</span> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
              <li><span className='font-semibold'>With other users:</span> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
              <li><span className='font-semibold'>With Your consent</span>: We may disclose Your personal information for any other purpose with Your consent.</li>
            </ul>
            
            <h2 className='text-2xl font-semibold text-justify leading-normal sm:text-lg'>Retention of Your Personal Data</h2>
            <p className='font-normal text-justify leading-normal sm:text-sm'>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
            <p className='font-normal text-justify leading-normal sm:text-sm'>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
            
            <h2 className='text-2xl font-semibold text-justify leading-normal sm:text-lg'>Transfer of Your Personal Data</h2>
            <p className='font-normal text-justify leading-normal sm:text-sm'>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
            <p className='font-normal text-justify leading-normal sm:text-sm'>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
            <p className='font-normal text-justify leading-normal sm:text-sm'>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
            
            <h2 className='text-2xl font-semibold text-justify leading-normal sm:text-lg'>Delete Your Personal Data</h2>
            <p className='font-normal text-justify leading-normal sm:text-sm'>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
            <p className='font-normal text-justify leading-normal sm:text-sm'>Our Service may give You the ability to delete certain information about You from within the Service.</p>
            <p className='font-normal text-justify leading-normal sm:text-sm'>You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.</p>
            <p className='font-normal text-justify leading-normal sm:text-sm'>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>
            
            <h2 className='text-2xl font-semibold text-justify leading-normal sm:text-lg'>Disclosure of Your Personal Data</h2>
            
            <h3 className='text-xl font-semibold text-justify leading-normal sm:text-base'>Business Transactions</h3>
            <p className='font-normal text-justify leading-normal sm:text-sm'>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
            
            <h3 className='text-xl font-semibold text-justify leading-normal sm:text-base'>Law enforcement</h3>
            <p className='font-normal text-justify leading-normal sm:text-sm'>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
            
            <h3 className='text-xl font-semibold text-justify leading-normal sm:text-base'>Other legal requirements</h3>
            <p className='font-normal text-justify leading-normal sm:text-sm'>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
            <ul className='list-disc list-inside flex flex-col gap-y-[10px] sm:text-sm'>
              <li>Comply with a legal obligation</li>
              <li>Protect and defend the rights or property of the Company</li>
              <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
              <li>Protect the personal safety of Users of the Service or the public</li>
              <li>Protect against legal liability</li>
            </ul>
            
            <h2 className='text-2xl font-semibold text-justify leading-normal sm:text-lg'>Security of Your Personal Data</h2>
            <p className='font-normal text-justify leading-normal sm:text-sm'>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
            
            <h1 className='w-full text-3xl font-semibold text-justify leading-normal sm:text-xl'>Children's Privacy</h1>
            <p className='font-normal text-justify leading-normal sm:text-sm'>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
            <p className='font-normal text-justify leading-normal sm:text-sm'>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>
            
            <h1 className='w-full text-3xl font-semibold text-justify leading-normal sm:text-xl'>Links to Other Websites</h1>
            <p className='font-normal text-justify leading-normal sm:text-sm'>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
            <p className='font-normal text-justify leading-normal sm:text-sm'>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
            
            <h1 className='w-full text-3xl font-semibold text-justify leading-normal sm:text-xl'>Changes to this Privacy Policy</h1>
            <p className='font-normal text-justify leading-normal sm:text-sm'>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
            <p className='font-normal text-justify leading-normal sm:text-sm'>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>
            <p className='font-normal text-justify leading-normal sm:text-sm'>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
            
            <h1 className='w-full text-3xl font-semibold text-justify leading-normal sm:text-xl'>Contact Us</h1>
            <p className='font-normal text-justify leading-normal sm:text-sm'>If you have any questions about this Privacy Policy, You can contact us:</p>
            <ul className='list-disc list-inside flex flex-col gap-y-[10px] sm:text-sm'>
              <li>By email:  contact@3xm.asia</li>
            </ul>
          </div>
        </div>
      </div>

      {/* footer section */}
      <div className="h-full w-full bg-white flex items-center justify-center px-[20px]">
        <div className="h-full w-full max-w-[1200px] flex items-center justify-center border-t border-t-gray-300">
          <p className="text-sm text-black text-center">
            Copyright © esquiz Pvt Ltd
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;