import Image from 'next/image'
import React from 'react'
import a from '../public/a.png'
import * as echarts from 'echarts';
import { useEffect } from 'react';
import AppContext from '@/context/Context';
import { useContext } from 'react';
import {BsFacebook,BsTwitter,BsLinkedin} from 'react-icons/bs'
import { Jost } from 'next/font/google';

const jost = Jost({ subsets: ['latin'] });

const results = () => {

  const funvar = useContext(AppContext);
  const { budget, cult, language, academic, location } = funvar
  useEffect(() => {
    const chartDom = document.getElementById('echarts-container');
    const myChart = echarts.init(chartDom);

    let option = {
      title: {
        text: 'Your Overall Score',
        // subtext: `${(location + academic + language + budget + cult) * 10}%`, // Calculate the overall score
        subtext: `${Math.min((location + academic + language + budget + cult) * 10, 100)}%`,
        left: 'center',
        top: 'center',
        textStyle: {
          color: '#fff', // Set the text color
          fontSize: '1rem', // Adjust the font size as needed
        },
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        show: false, // Set this to false to hide the legend
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          // name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: true,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#000',
            borderWidth: 2
          },
          label: {
            show: true,
            position: 'outside', // Set this to 'outside' to display names outside the chart
            fontSize: 14,
            fontWeight: 'bold',
            color: 'white'
          },
          labelLine: {
            show: true, // Set this to true to show lines connecting names to the chart
            length: 30 // You can adjust the length of the lines as needed
          },
          data: [
            { value: budget, name: 'Budget' },
            { value: location, name: 'Location' },
            { value: academic, name: 'Academics' },
            { value: language, name: 'Language' },
            { value: cult, name: 'Culture' }
          ]
        }
      ]
    };


    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div className='bg-black min-h-screen h-full w-full min-w-full flex flex-col mx-auto  text-white'>

      <div className="h-full w-full min-w-full flex lg:flex-row flex-col mx-auto  text-white">
        <div className="lg:ml-20 lg:w-[40vw] flex flex-row lg:flex-col justify-center align-middle content-center">
          <div className="mx-4">
            <Image src={a} alt='Logo' />
            <h1 className={`${jost.className}`} style={{ fontSize: '2.1rem' }}>Congratulations on Completing the Quiz!</h1>
            <p className={`${jost.className} my-2`}>Your full report has been been generated</p>
            <p className={`${jost.className}`}>We are thrilled that you have taken the time to complete our quiz, 'Discover Your Perfect Study Abroad Program'. Your answers have provided us with valuable insights to help you find the best-fit study abroad programs. Below, you will find your full results and feedback for each category. We encourage you to read through them to discover your perfect study abroad program.</p>
          </div>
        </div>
        <div className="lg:w-[50vw] ml-10 lg:relative flex flex-col justify-center align-middle content-center">
          <div id="echarts-container" style={{ width: '100%', height: '400px' }} />
        </div>

      </div>
      <div className="mx-auto flex flex-row my-14 justify-center align-middle content-center w-full">
        <div className="mx-auto flex flex-col justify-center align-middle content-center text-center">
          <h1 className={`text-white`} style={{ fontSize: '1.5rem' }}>Did you know that Universities in Europe and the USA offer the</h1>
          <h1 className={`text-white`} style={{ fontSize: '1.5rem' }}>opportunity to Study for Free?</h1>
          <p className={`text-white my-20 ${jost.className}`}>Explore options here</p>

          <button style={{backgroundColor:'rgb(73,193,240)'}} className={`w-40 mx-auto py-5 px-8 rounded-md`}>Get Started</button>
          {/*  Location */}
          <div style={{backgroundColor:'rgb(73,193,240)'}} className="flex justify-between my-4 mt-10 mx-3 lg:flex-row flex-col rounded-md">
            <div className="rounded-md lg:p-8 p-4 justify-between lg:space-y-7 content-between">
            <div className={`mx-3 lg:text-left text-center`} style={{fontSize:'1.2rem'}}>Location</div>
            <div className="mx-3 underline" style={{fontSize:'1.2rem'}}><a href="">Harvard Online Business Courses</a></div>
            </div>
            <div className="flex flex-col lg:p-8 p-4 justify-start">
              <div className="mx-3" style={{fontSize:'1.2rem'}}>Your Score</div>
              <div className="mx-3 text-red-600 font-bold" style={{fontSize:'1.5rem'}}>{language>0?'50%':'10%'}</div>
              <div className={`mx-3 ${'bg-red-400'} rounded-md`} style={{fontSize:'1.2rem'}}>medium</div>
            </div>
          </div>
          {/*  Academics */}
          <div style={{backgroundColor:'rgb(73,193,240)'}} className="flex justify-between my-4 mx-3 lg:flex-row flex-col rounded-md">
            <div className="rounded-md lg:p-8 p-4 justify-between lg:space-y-7 content-between">
            <div className={`mx-3 lg:text-left text-center`} style={{fontSize:'1.2rem'}}>Academics</div>
            <div className="mx-3 underline" style={{fontSize:'1.2rem'}}><a href="">Free Harvard Online Business Courses</a></div>
            </div>
            <div className="flex flex-col lg:p-8 p-4 justify-start">
              <div className="mx-3" style={{fontSize:'1.2rem'}}>Your Score</div>
              <div className={`mx-3  font-bold ${academic==2?'text-green-500':'text-red-600'}`} style={{fontSize:'1.5rem'}}>{(academic/2)*100}%</div>
              <div className={`mx-3 ${academic==2?'bg-green-400':'bg-red-400'} rounded-md`} style={{fontSize:'1.2rem'}}>medium</div>
            </div>
          </div>

          {/*  Language */}
          <div style={{backgroundColor:'rgb(73,193,240)'}} className="flex justify-between my-4 mx-3 lg:flex-row flex-col rounded-md">
            <div className="rounded-md lg:p-8 p-4 justify-between lg:space-y-7 content-between">
            <div className={`mx-3 lg:text-left text-center`} style={{fontSize:'1.2rem'}}>Language</div>
            <div className="mx-3 underline" style={{fontSize:'1.2rem'}}><a href="">Best Online Accredited Courses</a></div>
            </div>
            <div className="flex flex-col lg:p-8 p-4 justify-start">
              <div className="mx-3" style={{fontSize:'1.2rem'}}>Your Score</div>
              <div className={`mx-3  font-bold ${language==1?'text-green-500':'text-red-600'}`} style={{fontSize:'1.5rem'}}>{(language)*100}%</div>
              <div className={`mx-3 ${language==1?'bg-green-400':'bg-red-400'} rounded-md`} style={{fontSize:'1.2rem'}}>medium</div>
            </div>
          </div>

           {/*  Culture */}
           <div style={{backgroundColor:'rgb(73,193,240)'}} className="flex justify-between my-4 mx-3 lg:flex-row flex-col rounded-md">
            <div className="rounded-md lg:p-8 p-4 justify-between lg:space-y-7 content-between">
            <div className={`mx-3 lg:text-left text-center`} style={{fontSize:'1.2rem'}}>Culture</div>
            <div className="mx-3 underline" style={{fontSize:'1.2rem'}}><a href="">Fully Funded Online Degrees</a></div>
            </div>
            <div className="flex flex-col lg:p-8 p-4 justify-start">
              <div className="mx-3" style={{fontSize:'1.2rem'}}>Your Score</div>
              <div className={`mx-3  font-bold ${cult==3?'text-green-500':'text-red-600'}`} style={{fontSize:'1.5rem'}}>{Math.round((cult/3)*100)}%</div>
              <div className={`mx-3 ${cult==3?'bg-green-400':'bg-red-400'} rounded-md`} style={{fontSize:'1.2rem'}}>medium</div>
            </div>
          </div>
           {/*  Budget */}
           <div style={{backgroundColor:'rgb(73,193,240)'}} className="flex justify-between my-4 mx-3 lg:flex-row flex-col rounded-md">
            <div className="rounded-md lg:p-8 p-4 justify-between lg:space-y-7 content-between">
            <div className={`mx-3 lg:text-left text-center`} style={{fontSize:'1.2rem'}}>Budget</div>
            <div className="mx-3 underline" style={{fontSize:'1.2rem'}}><a href="">Free Teaching Degree Online</a></div>
            </div>
            <div className="flex flex-col lg:p-8 p-4 justify-start">
              <div className="mx-3" style={{fontSize:'1.2rem'}}>Your Score</div>
              <div className={`mx-3  font-bold ${budget>3?'text-green-500':'text-red-600'}`} style={{fontSize:'1.5rem'}}>{Math.round((budget/4)*100)}%</div>
              <div className={`mx-3 ${budget>3?'bg-green-400':'bg-red-400'} rounded-md`} style={{fontSize:'1.2rem'}}>medium</div>
            </div>
          </div>

          {/* Offer */}
          <h1 className={`text-white mt-10`} style={{ fontSize: '1.5rem' }}>Did you know that Universities in Europe and the USA offer the</h1>
          <h1 className={`text-white`} style={{ fontSize: '1.5rem' }}>opportunity to Study for Free?</h1>
          <p className={`text-white my-10 ${jost.className}`}>Explore options here</p>

          <button style={{backgroundColor:'rgb(73,193,240)'}} className={`w-40 mx-auto py-5 px-8 rounded-md`}>Get Started</button>
          
          <div className={`${jost.className} mt-12`}>Share it with friends</div>
          <div className="flex flex-row w-40 mx-auto py-5 px-8 rounded-md">
            <BsFacebook className='mx-2' color='white' />
            <BsTwitter className='mx-2' color='white' />
            <BsLinkedin className='mx-2' color='white' />
          </div>
          <div className="mt-10 h-full relative right-20 flex flex-row justify-between content-between">
            <Image height={150} width={150} className='relative bottom-5  right-20' alt='logo' src={a} />
            <div className='left-32 top-14 relative'>Study Abroad 2023 © Copyright</div>
          </div> 
        </div>
        
      </div>
    </div>
  )
}

export default results
